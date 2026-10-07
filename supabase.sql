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