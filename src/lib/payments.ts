import { createClient } from "@/lib/supabase/client";

export type StkPushRequest = {
  amount: number;
  phoneNumber: string;
};

export type StkPushResponse = {
  donationId: number;
  checkoutRequestId: string;
  message: string;
};

const STK_PUSH_TIMEOUT_MS = 20_000;

export async function requestStkPush(input: StkPushRequest): Promise<StkPushResponse> {
  const supabase = createClient();
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  try {
    const response = await Promise.race([
      supabase.functions.invoke("mpesa", { body: input }),
      new Promise<never>((_, reject) => {
        timeoutId = setTimeout(
          () =>
            reject(
              new Error(
                "The payment request took too long. Please check your connection and try again.",
              ),
            ),
          STK_PUSH_TIMEOUT_MS,
        );
      }),
    ]);

    const { data, error } = response;

    if (error) {
      throw new Error(error.message || "We could not start the M-Pesa payment. Please try again.");
    }

    if (!data?.ok) {
      throw new Error(data?.message || "We could not start the M-Pesa payment. Please try again.");
    }

    return data as StkPushResponse;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

export type PaystackDonationRequest = {
  amount: number;
  email: string;
};

export type PaystackDonationResult = "success" | "pending" | "cancelled";

async function invokePaystack<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const { data, error } = await createClient().functions.invoke(path, { body });

  if (error) {
    // On a non-2xx response supabase-js only says "Edge Function returned a non-2xx status code";
    // the function's own message is in the response body.
    const body = await (error as { context?: Response }).context?.json?.().catch(() => null);
    throw new Error(body?.message || "We could not reach the payment service. Please try again.");
  }
  if (!data?.ok) {
    throw new Error(data?.message || "We could not reach the payment service. Please try again.");
  }

  return data as T;
}

// The amount is fixed server-side when the transaction is initialized, then the Paystack
// popup collects payment (card, M-Pesa, bank) and the server verifies the result.
export async function startPaystackDonation(
  input: PaystackDonationRequest,
): Promise<PaystackDonationResult> {
  const { accessCode, reference } = await invokePaystack<{ accessCode: string; reference: string }>(
    "paystack",
    input,
  );
  const { default: PaystackPop } = await import("@paystack/inline-js");

  const completed = await new Promise<boolean>((resolve, reject) => {
    new PaystackPop().resumeTransaction(accessCode, {
      onSuccess: () => resolve(true),
      onCancel: () => resolve(false),
      onError: (error) =>
        reject(new Error(error.message || "The payment window could not be opened.")),
    });
  });

  if (!completed) return "cancelled";

  const { status } = await invokePaystack<{ status: string }>("paystack/verify", { reference });
  if (status === "failed") {
    throw new Error("Your payment was not completed. You have not been charged.");
  }
  return status === "success" ? "success" : "pending";
}
