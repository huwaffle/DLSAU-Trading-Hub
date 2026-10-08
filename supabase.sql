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
