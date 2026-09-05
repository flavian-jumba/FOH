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
