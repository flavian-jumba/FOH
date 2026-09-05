# Supabase M-Pesa donation setup

This Vite application uses a browser-only Supabase client. The M-Pesa STK Push is performed by
Supabase Edge Functions, keeping Daraja and service-role credentials off the website.

## 1. Apply the database migration

Install the Supabase CLI, log in, link this project to the correct Supabase project, then run:

```bash
supabase db push
```

The migration creates a `public.donations` table. Row-level security is enabled and no browser
roles can read or write payment records; only Edge Functions using the service role can do so.

## 2. Set Edge Function secrets

Set these in the Supabase dashboard or with `supabase secrets set`:

```text
MPESA_ENVIRONMENT=sandbox
MPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
MPESA_SHORTCODE=...
MPESA_PASSKEY=...
MPESA_TRANSACTION_TYPE=CustomerPayBillOnline
MPESA_CALLBACK_URL=https://<project-ref>.supabase.co/functions/v1/mpesa/callback
```

For a Till number, use the Daraja transaction type supplied for that Till rather than the example
PayBill value above. `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are supplied to deployed Edge
Functions by Supabase; do not put the service-role key in `.env`, `.env.local`, or frontend code.

## 3. Deploy the functions

```bash
supabase functions deploy mpesa --no-verify-jwt
```

The STK endpoint is public so that donors can initiate a payment without an account. Before a
production launch, protect it with a CAPTCHA and rate limiting at your CDN/WAF or Edge Function
layer to prevent unwanted STK requests.

## 4. Browser environment

The frontend reads `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY`; it also accepts the
existing `NEXT_PUBLIC_*` names for compatibility. These are public values and belong in `.env` or
`.env.local`. Never expose Daraja secrets or a Supabase service-role key to the browser.
