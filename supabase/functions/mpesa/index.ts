import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Origin": "*",
};

type StkPushRequest = { amount?: unknown; phoneNumber?: unknown };
type CallbackItem = { Name: string; Value?: string | number };

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function normalizeKenyanPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 10) return `254${digits.slice(1)}`;
  if (digits.startsWith("254") && digits.length === 12) return digits;
  return null;
}

function getMpesaBaseUrl(environment: string) {
  return environment === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";
}

function getSecret(primaryName: string, legacyName?: string) {
  return Deno.env.get(primaryName) ?? (legacyName ? Deno.env.get(legacyName) : undefined);
}

async function handleStkPush(request: Request) {
  const body = (await request.json()) as StkPushRequest;
  const amount = Number(body.amount);
  const phoneNumber =
    typeof body.phoneNumber === "string" ? normalizeKenyanPhoneNumber(body.phoneNumber) : null;

  if (!Number.isInteger(amount) || amount < 1) {
    return json({ ok: false, message: "Enter a donation amount of at least KES 1." }, 400);
  }
  if (!phoneNumber) return json({ ok: false, message: "Enter a valid Kenyan M-Pesa number." }, 400);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const consumerKey = getSecret("MPESA_CONSUMER_KEY", "CONSUMER_KEY");
  const consumerSecret =
    getSecret("MPESA_CONSUMER_SECRET", "CONSUMER_SECRET") ?? Deno.env.get("CONSUMER_SECRETE");
  const shortcode = getSecret("MPESA_SHORTCODE", "SHORT_CODE");
  const passkey = Deno.env.get("MPESA_PASSKEY");
  const environment = Deno.env.get("MPESA_ENVIRONMENT") ?? "sandbox";
  const transactionType = Deno.env.get("MPESA_TRANSACTION_TYPE") ?? "CustomerPayBillOnline";

  if (
    !supabaseUrl ||
    !serviceRoleKey ||
    !consumerKey ||
    !consumerSecret ||
    !shortcode ||
    !passkey
  ) {
    console.error("Missing required M-Pesa or Supabase Edge Function secrets.");
    return json(
      { ok: false, message: "Donations are not configured yet. Please contact FOH." },
      503,
    );
  }

  const callbackUrl =
    Deno.env.get("MPESA_CALLBACK_URL") ?? `${supabaseUrl}/functions/v1/mpesa/callback`;
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: donation, error: donationError } = await supabase
    .from("donations")
    .insert({ amount_kes: amount, phone_number: phoneNumber })
    .select("id")
    .single();

  if (donationError || !donation) {
    console.error("Unable to create donation record", donationError);
    return json({ ok: false, message: "We could not start your donation. Please try again." }, 500);
  }

  const mpesaBaseUrl = getMpesaBaseUrl(environment);
  const authResponse = await fetch(
    `${mpesaBaseUrl}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: { Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}` },
    },
  );
  const authData = await authResponse.json();

  if (!authResponse.ok || !authData.access_token) {
    console.error("M-Pesa access-token request failed", authData);
    await supabase.from("donations").update({ status: "failed" }).eq("id", donation.id);
    return json(
      { ok: false, message: "We could not contact M-Pesa. Please try again shortly." },
      502,
    );
  }

  const timestamp = new Date()
    .toISOString()
    .replace(/[-:TZ.]/g, "")
    .slice(0, 14);
  const password = btoa(`${shortcode}${passkey}${timestamp}`);
  const stkResponse = await fetch(`${mpesaBaseUrl}/mpesa/stkpush/v1/processrequest`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authData.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: transactionType,
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: shortcode,
      PhoneNumber: phoneNumber,
      CallBackURL: callbackUrl,
      AccountReference: `FOH-${donation.id}`,
      TransactionDesc: "Footprints of Hope donation",
    }),
  });
  const stkData = await stkResponse.json();

  if (!stkResponse.ok || stkData.ResponseCode !== "0") {
    console.error("M-Pesa STK push failed", stkData);
    await supabase
      .from("donations")
      .update({
        status: "failed",
        result_description: stkData.errorMessage ?? stkData.ResponseDescription,
      })
      .eq("id", donation.id);
    return json(
      { ok: false, message: stkData.errorMessage ?? "M-Pesa could not start the payment." },
      502,
    );
  }

  await supabase
    .from("donations")
    .update({
      status: "stk_sent",
      merchant_request_id: stkData.MerchantRequestID,
      checkout_request_id: stkData.CheckoutRequestID,
      result_description: stkData.CustomerMessage,
    })
    .eq("id", donation.id);

  return json({
    ok: true,
    donationId: donation.id,
    checkoutRequestId: stkData.CheckoutRequestID,
    message: stkData.CustomerMessage ?? "Check your phone to complete the M-Pesa payment.",
  });
}

async function handleCallback(request: Request) {
  const payload = await request.json();
  const callback = payload?.Body?.stkCallback;
  const checkoutRequestId = callback?.CheckoutRequestID;
  if (!checkoutRequestId) return new Response("Missing CheckoutRequestID", { status: 400 });

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey)
    return new Response("Server configuration error", { status: 500 });

  const metadata = (callback.CallbackMetadata?.Item ?? []) as CallbackItem[];
  const receiptNumber = metadata.find((item) => item.Name === "MpesaReceiptNumber")?.Value;
  const resultCode = Number(callback.ResultCode);
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { error } = await supabase
    .from("donations")
    .update({
      status: resultCode === 0 ? "success" : "failed",
      result_code: resultCode,
      result_description: callback.ResultDesc ?? null,
      mpesa_receipt_number: resultCode === 0 && receiptNumber ? String(receiptNumber) : null,
      completed_at: new Date().toISOString(),
    })
    .eq("checkout_request_id", checkoutRequestId);

  if (error) {
    console.error("Unable to update donation callback", error);
    return new Response("Unable to save callback", { status: 500 });
  }

  return Response.json({ ResultCode: 0, ResultDesc: "Accepted" });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ ok: false, message: "Method not allowed." }, 405);

  try {
    const path = new URL(request.url).pathname;
    return path.endsWith("/callback")
      ? await handleCallback(request)
      : await handleStkPush(request);
  } catch (error) {
    console.error("Unexpected M-Pesa function error", error);
    return json({ ok: false, message: "Something went wrong. Please try again." }, 500);
  }
});
