-- ============================================================
-- DLSAU MARKETPLACE - SUPABASE SETUP
-- Run this ONCE:
--   Supabase Dashboard > SQL Editor > New query > paste > Run
-- Everything below is idempotent (safe to re-run).
-- ============================================================

-- ------------------------------------------------------------
-- 1. TABLES
-- ------------------------------------------------------------

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  description text,
  owner text not null,
  status text not null default 'Available',
  image text,
  created_at timestamptz not null default now()
);

create table if not exists public.chats (
  id uuid primary key default gen_random_uuid(),
  buyer_name text not null,
  seller_name text not null,
  item_title text not null,
  messages jsonb not null default '[]'::jsonb,
  deleted_by jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.ratings (
  id uuid primary key default gen_random_uuid(),
  target_user text not null,
  rated_by text not null,
  rating smallint not null check (rating between 1 and 5),
  comment text,
  updated_at timestamptz not null default now(),
  unique (target_user, rated_by)
);

create index if not exists chats_buyer_idx on public.chats (buyer_name);
create index if not exists chats_seller_idx on public.chats (seller_name);
create index if not exists ratings_target_idx on public.ratings (target_user);
create index if not exists products_owner_idx on public.products (owner);

-- ------------------------------------------------------------
-- 2. ROW LEVEL SECURITY
--    The app uses the built-in demo login (no real accounts yet),
--    so policies are open to the anon role. Anyone holding your
--    publishable key can read/write these three tables - fine for
--    a class project, NOT for real user data. Later you can add
--    Supabase Auth and tighten these policies to auth.uid().
-- ------------------------------------------------------------

alter table public.products enable row level security;
alter table public.chats enable row level security;
alter table public.ratings enable row level security;

drop policy if exists "products_read" on public.products;
drop policy if exists "products_insert" on public.products;
drop policy if exists "products_update" on public.products;
drop policy if exists "products_delete" on public.products;
create policy "products_read"   on public.products for select to anon, authenticated using (true);
create policy "products_insert" on public.products for insert to anon, authenticated with check (true);
create policy "products_update" on public.products for update to anon, authenticated using (true);
create policy "products_delete" on public.products for delete to anon, authenticated using (true);

drop policy if exists "chats_read" on public.chats;
drop policy if exists "chats_insert" on public.chats;
drop policy if exists "chats_update" on public.chats;
drop policy if exists "chats_delete" on public.chats;
create policy "chats_read"   on public.chats for select to anon, authenticated using (true);
create policy "chats_insert" on public.chats for insert to anon, authenticated with check (true);
create policy "chats_update" on public.chats for update to anon, authenticated using (true);
create policy "chats_delete" on public.chats for delete to anon, authenticated using (true);

drop policy if exists "ratings_read" on public.ratings;
drop policy if exists "ratings_insert" on public.ratings;
drop policy if exists "ratings_update" on public.ratings;
drop policy if exists "ratings_delete" on public.ratings;
create policy "ratings_read"   on public.ratings for select to anon, authenticated using (true);
create policy "ratings_insert" on public.ratings for insert to anon, authenticated with check (true);
create policy "ratings_update" on public.ratings for update to anon, authenticated using (true);
create policy "ratings_delete" on public.ratings for delete to anon, authenticated using (true);

-- ------------------------------------------------------------
-- 3. REALTIME (live updates across open browsers)
--    Dashboard > Database > Replication must also be ON for the
--    three tables (it is on by default on new projects).
-- ------------------------------------------------------------

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'products'
  ) then
    alter publication supabase_realtime add table public.products;
  end if;

  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'chats'
  ) then
    alter publication supabase_realtime add table public.chats;
  end if;

  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'ratings'
  ) then
    alter publication supabase_realtime add table public.ratings;
  end if;
end $$;

-- ------------------------------------------------------------
-- 4. DEMO DATA (only inserted if the tables are empty)
--    Thumbnails are inline SVG data-URIs, so no files needed.
--    Skip this block if you want the marketplace to start empty.
-- ------------------------------------------------------------

insert into public.products (title, category, description, owner, status, image)
select * from (values
  ('Wireless Headphones', 'Electronics', 'Barely used Bluetooth headphones with noise cancellation and a carry pouch.', 'Juan Dela Cruz', 'Available',
   'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22450%22%3E%3Crect%20width=%22600%22%20height=%22450%22%20fill=%22%232563eb%22/%3E%3Ctext%20x=%22300%22%20y=%22230%22%20fill=%22%23ffffff%22%20font-size=%2228%22%20text-anchor=%22middle%22%3EWireless%20Headphones%3C/text%3E%3C/svg%3E'),
  ('Scientific Calculator', 'School Supplies', 'Casio FX-991EX, perfect for engineering and math subjects. Fully working.', 'Maria Santos', 'Available',
   'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22450%22%3E%3Crect%20width=%22600%22%20height=%22450%22%20fill=%22%23059669%22/%3E%3Ctext%20x=%22300%22%20y=%22230%22%20fill=%22%23ffffff%22%20font-size=%2228%22%20text-anchor=%22middle%22%3EScientific%20Calculator%3C/text%3E%3C/svg%3E'),
  ('DLSAU Hoodie', 'Clothing & Accessories', 'Official campus hoodie, medium size, worn only twice.', 'Paolo Reyes', 'Available',
   'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22450%22%3E%3Crect%20width=%22600%22%20height=%22450%22%20fill=%22%237c3aed%22/%3E%3Ctext%20x=%22300%22%20y=%22230%22%20fill=%22%23ffffff%22%20font-size=%2228%22%20text-anchor=%22middle%22%3EDLSAU%20Hoodie%3C/text%3E%3C/svg%3E'),
  ('Badminton Racket Set', 'Sports & Hobbies', 'Two rackets and three shuttlecocks in a carry bag. Great for P.E. or weekend play.', 'Juan Dela Cruz', 'Available',
   'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22450%22%3E%3Crect%20width=%22600%22%20height=%22450%22%20fill=%22%23d97706%22/%3E%3Ctext%20x=%22300%22%20y=%22230%22%20fill=%22%23ffffff%22%20font-size=%2228%22%20text-anchor=%22middle%22%3EBadminton%20Racket%20Set%3C/text%3E%3C/svg%3E'),
  ('Calculus Notes & Reviewers', 'School Supplies', 'Complete handwritten reviewers for MATH 101 - 140 pages, photocopied.', 'Maria Santos', 'Available',
   'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22450%22%3E%3Crect%20width=%22600%22%20height=%22450%22%20fill=%22%23dc2626%22/%3E%3Ctext%20x=%22300%22%20y=%22230%22%20fill=%22%23ffffff%22%20font-size=%2228%22%20text-anchor=%22middle%22%3ECalculus%20Notes%20%26%20Reviewers%3C/text%3E%3C/svg%3E'),
  ('Mechanical Keyboard', 'Electronics', 'Hot-swappable switches, RGB backlight, includes original box and cable.', 'Paolo Reyes', 'Sold',
   'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22450%22%3E%3Crect%20width=%22600%22%20height=%22450%22%20fill=%22%230891b2%22/%3E%3Ctext%20x=%22300%22%20y=%22230%22%20fill=%22%23ffffff%22%20font-size=%2228%22%20text-anchor=%22middle%22%3EMechanical%20Keyboard%3C/text%3E%3C/svg%3E')
) as v(title, category, description, owner, status, image)
where not exists (select 1 from public.products);

insert into public.ratings (target_user, rated_by, rating, comment) values
  ('Juan Dela Cruz', 'Maria Santos', 5, 'Item was exactly as described and he delivered it right after class. Super bait!'),
  ('Juan Dela Cruz', 'Paolo Reyes', 4, 'Good condition, replied fast. Packaging could be better.'),
  ('Maria Santos', 'Juan Dela Cruz', 5, 'Very easy to deal with, no issues at all.'),
  ('Maria Santos', 'Paolo Reyes', 4, 'Friendly seller, item was clean and complete.'),
  ('Paolo Reyes', 'Maria Santos', 5, 'Honest and reliable. 10/10 would buy from again.')
on conflict (target_user, rated_by) do nothing;

-- ============================================================
-- 5. UPDATE: listing approval, chat "seen", accounts, notifications, reports
--    (idempotent - safe to re-run)
-- ============================================================

-- 5a. Listing approval. Existing listings are grandfathered in as approved;
--     every new listing starts as 'pending' until an admin reviews it.
alter table public.products add column if not exists approval text;
alter table public.products add column if not exists reject_reason text;
update public.products set approval = 'approved' where approval is null;
alter table public.products alter column approval set default 'pending';
alter table public.products alter column approval set not null;

-- 5b. Chat "seen": { "username": number of messages that person has seen }
alter table public.chats add column if not exists seen jsonb not null default '{}'::jsonb;

-- 5c. Accounts (so the admin dashboard can list and manage them)
create table if not exists public.accounts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  pass_hash text not null,
  suspended boolean not null default false,
  created_at timestamptz not null default now()
);
create unique index if not exists accounts_name_idx on public.accounts (lower(name));
create unique index if not exists accounts_email_idx on public.accounts (lower(email));

-- 5d. Notifications (listing approved / rejected, etc.)
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient text not null,
  type text not null default 'info',
  title text not null,
  body text,
  read boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists notifications_recipient_idx on public.notifications (recipient);

-- 5e. Reports sent from the chat window
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter text not null,
  reported_user text not null,
  item_title text,
  reason text not null,
  details text,
  transcript jsonb not null default '[]'::jsonb,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

alter table public.accounts enable row level security;
alter table public.notifications enable row level security;
alter table public.reports enable row level security;

drop policy if exists "accounts_read" on public.accounts;
drop policy if exists "accounts_insert" on public.accounts;
drop policy if exists "accounts_update" on public.accounts;
drop policy if exists "accounts_delete" on public.accounts;
create policy "accounts_read"   on public.accounts for select to anon, authenticated using (true);
create policy "accounts_insert" on public.accounts for insert to anon, authenticated with check (true);
create policy "accounts_update" on public.accounts for update to anon, authenticated using (true);
create policy "accounts_delete" on public.accounts for delete to anon, authenticated using (true);

drop policy if exists "notifications_read" on public.notifications;
drop policy if exists "notifications_insert" on public.notifications;
drop policy if exists "notifications_update" on public.notifications;
drop policy if exists "notifications_delete" on public.notifications;
create policy "notifications_read"   on public.notifications for select to anon, authenticated using (true);
create policy "notifications_insert" on public.notifications for insert to anon, authenticated with check (true);
create policy "notifications_update" on public.notifications for update to anon, authenticated using (true);
create policy "notifications_delete" on public.notifications for delete to anon, authenticated using (true);

drop policy if exists "reports_read" on public.reports;
drop policy if exists "reports_insert" on public.reports;
drop policy if exists "reports_update" on public.reports;
drop policy if exists "reports_delete" on public.reports;
create policy "reports_read"   on public.reports for select to anon, authenticated using (true);
create policy "reports_insert" on public.reports for insert to anon, authenticated with check (true);
create policy "reports_update" on public.reports for update to anon, authenticated using (true);
create policy "reports_delete" on public.reports for delete to anon, authenticated using (true);

do $$
declare t text;
begin
  foreach t in array array['accounts', 'notifications', 'reports'] loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;
