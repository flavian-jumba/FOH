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

## 5. Card donations in US dollars

Card donations go through the `paystack` function. It can take gifts in Kenyan shillings, US
dollars, or both; which ones the donation form offers is decided by one secret, so nothing on the
website has to be released to change it:

```bash
supabase secrets set DONATION_CURRENCIES=USD,KES   # dollars first (the default choice), then shillings
supabase secrets set DONATION_CURRENCIES=KES       # shillings only (also what you get if it is unset)
```

Before switching dollars on:

1. Ask Paystack to enable USD for the business. Until they do, Paystack answers a dollar charge
   with "Currency not supported by merchant" and the form tells the donor dollars are not
   available yet.
2. Apply the currency migration (`supabase db push`). It adds `currency` and `amount_usd` to
   `donations`; shilling donations keep using `amount_kes`.
3. Deploy the function: `supabase functions deploy paystack --no-verify-jwt`.

M-Pesa STK donations are always in shillings and are not affected.

### Dollar amounts, charged in shillings

While Paystack only charges the business in shillings, the form still shows dollar amounts to
visitors outside Kenya: the donor picks `$50`, sees "Charged as KES 6,500", and the card is
charged that shilling amount. Visitors whose device is on Kenyan time get shillings first. The
gift is stored as an ordinary shilling donation; the dollar figure the donor chose is kept on the
Paystack transaction as `shown_usd`.

The rate (shillings per dollar) is looked up once every few hours. To control it:

```bash
supabase secrets set USD_KES_RATE=129.5   # pin the rate
supabase secrets set USD_KES_RATE=off     # show shillings only
supabase secrets unset USD_KES_RATE       # back to the looked-up rate
```

The donor's bank does the final conversion and may add a foreign-transaction fee, so the form
says the statement can differ slightly. Once Paystack enables USD and `DONATION_CURRENCIES`
lists it, dollars are charged as dollars and this conversion is no longer used.
