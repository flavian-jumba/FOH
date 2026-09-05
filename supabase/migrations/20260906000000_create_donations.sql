create table if not exists public.donations (
  id bigint generated always as identity primary key,
  amount_kes numeric(12, 2) not null check (amount_kes > 0),
  phone_number text not null check (phone_number ~ '^254[17][0-9]{8}$'),
  status text not null default 'pending' check (status in ('pending', 'stk_sent', 'success', 'failed')),
  merchant_request_id text,
  checkout_request_id text unique,
  mpesa_receipt_number text unique,
  result_code integer,
  result_description text,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists donations_status_created_at_idx
  on public.donations (status, created_at desc);

create or replace function public.set_donations_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists donations_set_updated_at on public.donations;
create trigger donations_set_updated_at
before update on public.donations
for each row
execute function public.set_donations_updated_at();

alter table public.donations enable row level security;
alter table public.donations force row level security;

-- Donations contain phone numbers and payment records. Browser roles have no direct access;
-- only the M-Pesa Edge Functions use the service role to create and update these records.
revoke all on table public.donations from anon, authenticated;
revoke all on sequence public.donations_id_seq from anon, authenticated;
