-- Paystack donations share the donations table with M-Pesa STK donations.
-- Paystack donors give an email instead of a phone number, so phone_number becomes optional.
alter table public.donations
  add column if not exists provider text not null default 'mpesa'
    check (provider in ('mpesa', 'paystack')),
  add column if not exists email text,
  add column if not exists paystack_reference text unique,
  add column if not exists paystack_channel text;

alter table public.donations alter column phone_number drop not null;

alter table public.donations drop constraint if exists donations_contact_check;
alter table public.donations add constraint donations_contact_check check (
  (provider = 'mpesa' and phone_number is not null)
  or (provider = 'paystack' and email is not null and paystack_reference is not null)
);
