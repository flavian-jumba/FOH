-- Card donations can now be given in US dollars as well as Kenyan shillings.
-- M-Pesa donations are always in shillings and keep using amount_kes untouched; a dollar
-- donation records its amount in amount_usd instead, so the two are never added together.
--
-- Safe to run more than once.

alter table public.donations
  add column if not exists currency text not null default 'KES'
    check (currency in ('KES', 'USD')),
  add column if not exists amount_usd numeric(12, 2) check (amount_usd > 0);

alter table public.donations alter column amount_kes drop not null;

-- Exactly one amount, in the column that matches the currency.
alter table public.donations drop constraint if exists donations_amount_currency_check;
alter table public.donations add constraint donations_amount_currency_check check (
  (currency = 'KES' and amount_kes is not null and amount_usd is null)
  or (currency = 'USD' and amount_usd is not null and amount_kes is null)
);

-- Dollars only arrive by card through Paystack.
alter table public.donations drop constraint if exists donations_usd_provider_check;
alter table public.donations add constraint donations_usd_provider_check check (
  currency = 'KES' or provider = 'paystack'
);
