import { createClient, type SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Origin": "*",
};

const PAYSTACK_BASE_URL = Deno.env.get("PAYSTACK_API_BASE") ?? "https://api.paystack.co";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUPPORTED_CURRENCIES = ["KES", "USD"] as const;
type Currency = (typeof SUPPORTED_CURRENCIES)[number];
const CURRENCY_PREFIX: Record<Currency, string> = { KES: "KES ", USD: "$" };

const isCurrency = (value: string): value is Currency =>
  (SUPPORTED_CURRENCIES as readonly string[]).includes(value);

// Which currencies donors may give in, in the order the form offers them (the first is the
// default). Set with `supabase secrets set DONATION_CURRENCIES=USD,KES`.
// Paystack refuses a currency it has not enabled for the business, so until USD is switched on
// there this stays at its default of shillings only.
function allowedCurrencies(): Currency[] {
  const requested = (Deno.env.get("DONATION_CURRENCIES") ?? "")
    .split(",")
    .map((value) => value.trim().toUpperCase())
    .filter(isCurrency);
  const unique = [...new Set(requested)];
  return unique.length > 0 ? unique : ["KES"];
}

type InitializeRequest = { amount?: unknown; email?: unknown; currency?: unknown };
type VerifyRequest = { reference?: unknown };
type PaystackTransaction = {
  status: string;
  reference: string;
  amount: number;
  currency: string;
  channel?: string;
  gateway_response?: string;
  paid_at?: string | null;
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function getConfig() {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const secretKey = Deno.env.get("PAYSTACK_SECRET_KEY");

  if (!supabaseUrl || !serviceRoleKey || !secretKey) {
    console.error("Missing required Paystack or Supabase Edge Function secrets.");
    return null;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return { supabase, secretKey };
}

const notConfigured = () =>
  json({ ok: false, message: "Donations are not configured yet. Please contact FOH." }, 503);

async function fetchTransaction(secretKey: string, reference: string) {
  const response = await fetch(
    `${PAYSTACK_BASE_URL}/transaction/verify/${encodeURIComponent(reference)}`,
    { headers: { Authorization: `Bearer ${secretKey}` } },
  );
  const payload = await response.json();
  if (!response.ok || !payload.status) {
    console.error("Paystack verify request failed", payload);
    return null;
  }
  return payload.data as PaystackTransaction;
}

// Records the outcome of a transaction, but only after checking it against the amount we
// asked Paystack to charge. Used by both the browser-triggered verify and the webhook.
async function settleDonation(supabase: SupabaseClient, transaction: PaystackTransaction) {
  // select("*") rather than naming currency/amount_usd, so shilling donations keep settling
  // even if this function is deployed before the currency migration has been applied.
  const { data: donation, error } = await supabase
    .from("donations")
    .select("*")
    .eq("paystack_reference", transaction.reference)
    .single();

  if (error || !donation) {
    console.error("No donation found for Paystack reference", transaction.reference, error);
    return null;
  }
  if (donation.status === "success") return "success";

  const currency: Currency = donation.currency === "USD" ? "USD" : "KES";
  const quoted = currency === "USD" ? donation.amount_usd : donation.amount_kes;
  const expectedAmount = Math.round(Number(quoted) * 100);
  const paid =
    transaction.status === "success" &&
    transaction.amount === expectedAmount &&
    transaction.currency === currency;

  // Abandoned or still-processing transactions stay pending so a later webhook can settle them.
  if (!paid && transaction.status !== "failed" && transaction.status !== "success") {
    return "pending";
  }

  const status = paid ? "success" : "failed";
  const { error: updateError } = await supabase
    .from("donations")
    .update({
      status,
      paystack_channel: transaction.channel ?? null,
      result_description: paid
        ? (transaction.gateway_response ?? null)
        : `Paystack status ${transaction.status}, amount ${transaction.amount} ${transaction.currency}`,
      completed_at: transaction.paid_at ?? new Date().toISOString(),
    })
    .eq("id", donation.id);

  if (updateError) {
    console.error("Unable to update Paystack donation", updateError);
    return null;
  }
  return status;
}

async function handleInitialize(request: Request) {
  const body = (await request.json()) as InitializeRequest;
  const amount = Number(body.amount);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  // Older copies of the site send no currency; they are always giving in shillings.
  const requestedCurrency =
    typeof body.currency === "string" ? body.currency.trim().toUpperCase() : "KES";

  if (!isCurrency(requestedCurrency) || !allowedCurrencies().includes(requestedCurrency)) {
    return json(
      {
        ok: false,
        message: "Donations in that currency are not available. Please choose another.",
      },
      400,
    );
  }
  const currency = requestedCurrency;

  if (!Number.isInteger(amount) || amount < 1) {
    return json(
      {
        ok: false,
        message: `Enter a donation amount of at least ${CURRENCY_PREFIX[currency]}1.`,
      },
      400,
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return json({ ok: false, message: "Enter a valid email address for your receipt." }, 400);
  }

  const config = getConfig();
  if (!config) return notConfigured();
  const { supabase, secretKey } = config;

  const reference = `FOH-${crypto.randomUUID()}`;
  const { data: donation, error: donationError } = await supabase
    .from("donations")
    .insert({
      provider: "paystack",
      email,
      paystack_reference: reference,
      // A shilling donation is written exactly as before the currency columns existed.
      ...(currency === "USD" ? { currency, amount_usd: amount } : { amount_kes: amount }),
    })
    .select("id")
    .single();

  if (donationError || !donation) {
    console.error("Unable to create donation record", donationError);
    return json({ ok: false, message: "We could not start your donation. Please try again." }, 500);
  }

  const initResponse = await fetch(`${PAYSTACK_BASE_URL}/transaction/initialize`, {
    method: "POST",
    headers: { Authorization: `Bearer ${secretKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      amount: amount * 100,
      currency,
      reference,
      metadata: { donation_id: donation.id, source: "footprints-of-hope-website" },
    }),
  });
  const initData = await initResponse.json();

  if (!initResponse.ok || !initData.status) {
    console.error("Paystack initialize failed", initData);
    await supabase
      .from("donations")
      .update({ status: "failed", result_description: initData.message ?? null })
      .eq("id", donation.id);
    // Paystack's answer when a currency has not been enabled for the business.
    const currencyRefused = /currency not supported/i.test(String(initData.message ?? ""));
    return json(
      {
        ok: false,
        message: currencyRefused
          ? `Gifts in ${currency} are not available yet. Please choose another currency.`
          : "We could not contact the payment provider. Please try again.",
      },
      502,
    );
  }

  return json({ ok: true, accessCode: initData.data.access_code, reference });
}

// Tells the donation form which currencies to offer, so a currency can be switched on or off
// with a secret instead of a new release of the website.
function handleConfig() {
  return json({ ok: true, currencies: allowedCurrencies() });
}

async function handleVerify(request: Request) {
  const { reference } = (await request.json()) as VerifyRequest;
  if (typeof reference !== "string" || !reference.startsWith("FOH-")) {
    return json({ ok: false, message: "Missing payment reference." }, 400);
  }

  const config = getConfig();
  if (!config) return notConfigured();

  const transaction = await fetchTransaction(config.secretKey, reference);
  if (!transaction) {
    return json({ ok: false, message: "We could not confirm your payment yet." }, 502);
  }

  const status = await settleDonation(config.supabase, transaction);
  if (!status) return json({ ok: false, message: "We could not confirm your payment yet." }, 500);

  return json({ ok: true, status });
}

async function isValidSignature(rawBody: string, signature: string | null, secretKey: string) {
  if (!signature) return false;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secretKey),
    { name: "HMAC", hash: "SHA-512" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(rawBody));
  const expected = Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  return expected === signature;
}

async function handleWebhook(request: Request) {
  const config = getConfig();
  if (!config) return new Response("Server configuration error", { status: 500 });

  const rawBody = await request.text();
  const signature = request.headers.get("x-paystack-signature");
  if (!(await isValidSignature(rawBody, signature, config.secretKey))) {
    return new Response("Invalid signature", { status: 401 });
  }

  const event = JSON.parse(rawBody);
  if (event.event !== "charge.success" || !event.data?.reference?.startsWith("FOH-")) {
    return new Response("Ignored", { status: 200 });
  }

  // Re-fetch rather than trusting the payload, so the amount check uses Paystack's record.
  const transaction = await fetchTransaction(config.secretKey, event.data.reference);
  if (!transaction) return new Response("Unable to verify transaction", { status: 502 });

  const status = await settleDonation(config.supabase, transaction);
  if (!status) return new Response("Unable to save transaction", { status: 500 });

  return new Response("OK", { status: 200 });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ ok: false, message: "Method not allowed." }, 405);

  try {
    const path = new URL(request.url).pathname;
    if (path.endsWith("/webhook")) return await handleWebhook(request);
    if (path.endsWith("/config")) return handleConfig();
    if (path.endsWith("/verify")) return await handleVerify(request);
    return await handleInitialize(request);
  } catch (error) {
    console.error("Unexpected Paystack function error", error);
    return json({ ok: false, message: "Something went wrong. Please try again." }, 500);
  }
});
