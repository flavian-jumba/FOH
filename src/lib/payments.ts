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

export type DonationCurrency = "KES" | "USD";

export type PaystackDonationRequest = {
  amount: number;
  email: string;
  currency: DonationCurrency;
  /** The dollar amount the donor chose, when it was shown in dollars but is charged in shillings. */
  shownUsd?: number;
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

export type DonationSettings = {
  /** Currencies Paystack will charge in, the server's preferred one first. */
  currencies: DonationCurrency[];
  /** Shillings per dollar, when dollar amounts can be shown and charged in shillings. */
  usdRate: number | null;
};

// What the form should offer. The server decides, so dollars can be switched on or off without
// releasing the site again. Any failure (including an older server that has no such endpoint)
// means shillings only.
export async function fetchDonationSettings(): Promise<DonationSettings> {
  try {
    const { currencies, usdRate } = await invokePaystack<{
      currencies?: unknown;
      usdRate?: unknown;
    }>("paystack/config", {});
    const offered = Array.isArray(currencies)
      ? currencies.filter((value): value is DonationCurrency => value === "KES" || value === "USD")
      : [];
    return {
      currencies: offered.length > 0 ? offered : ["KES"],
      usdRate: typeof usdRate === "number" && usdRate > 0 ? usdRate : null,
    };
  } catch {
    return { currencies: ["KES"], usdRate: null };
  }
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
