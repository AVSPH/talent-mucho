create table if not exists public.va_foundations_participants (
  id             uuid primary key default gen_random_uuid(),
  email          text unique not null,
  name           text,
  certified      boolean not null default false,
  notes          text,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create unique index if not exists va_foundations_participants_email_idx
  on public.va_foundations_participants (lower(email));

alter table public.va_foundations_participants enable row level security;

drop policy if exists "service role only" on public.va_foundations_participants;
create policy "service role only" on public.va_foundations_participants for all using (false);
