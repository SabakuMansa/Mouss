-- Les Mousquetaires — schéma de base de données (Supabase / PostgreSQL)
-- À exécuter dans Supabase : Dashboard > SQL Editor > New query > coller > Run
--
-- Convention : chaque table a un `id` (identifiant unique généré automatiquement)
-- et un `created_at` (date de création, pour trier/auditer).

-- Équipes / catégories (Sénior, U18, Coachs)
create table teams (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz not null default now()
);

-- Joueurs et coachs, rattachés à une équipe
create table players (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references teams(id) on delete cascade,
  name text not null,
  position text,
  height_cm text,
  weight_kg text,
  photo_url text,
  created_at timestamptz not null default now()
);

-- Calendrier + résultats des matchs
create table matches (
  id uuid primary key default gen_random_uuid(),
  opponent text not null,
  opponent_logo_url text,
  date_time timestamptz not null,
  venue text not null,
  is_home boolean not null default true,
  result text,
  created_at timestamptz not null default now()
);

-- Actualités du club
create table news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  excerpt text not null,
  body text,
  cover_image_url text,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- Galerie photo
create table photos (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  caption text,
  created_at timestamptz not null default now()
);

-- Partenaires
create table partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  website_url text,
  created_at timestamptz not null default now()
);

-- Documents utiles (règlement, formulaires...)
create table documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  file_url text not null,
  created_at timestamptz not null default now()
);

-- Informations pratiques du club — une seule ligne (adresse, horaires, contact)
create table site_settings (
  id uuid primary key default gen_random_uuid(),
  address text not null,
  schedule text not null,
  email text not null,
  helloasso_url text,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- Sécurité : Row Level Security (RLS)
-- Règle pour toutes les tables : tout le monde peut LIRE (site public),
-- seul un compte connecté (l'admin) peut ÉCRIRE (ajouter/modifier/supprimer).
-- ============================================================

alter table teams enable row level security;
alter table players enable row level security;
alter table matches enable row level security;
alter table news enable row level security;
alter table photos enable row level security;
alter table partners enable row level security;
alter table documents enable row level security;
alter table site_settings enable row level security;

-- Lecture publique (visiteurs du site, non connectés)
create policy "Lecture publique" on teams for select using (true);
create policy "Lecture publique" on players for select using (true);
create policy "Lecture publique" on matches for select using (true);
create policy "Lecture publique" on news for select using (true);
create policy "Lecture publique" on photos for select using (true);
create policy "Lecture publique" on partners for select using (true);
create policy "Lecture publique" on documents for select using (true);
create policy "Lecture publique" on site_settings for select using (true);

-- Écriture réservée aux comptes admin connectés (insert/update/delete)
create policy "Écriture admin" on teams for all using (auth.role() = 'authenticated');
create policy "Écriture admin" on players for all using (auth.role() = 'authenticated');
create policy "Écriture admin" on matches for all using (auth.role() = 'authenticated');
create policy "Écriture admin" on news for all using (auth.role() = 'authenticated');
create policy "Écriture admin" on photos for all using (auth.role() = 'authenticated');
create policy "Écriture admin" on partners for all using (auth.role() = 'authenticated');
create policy "Écriture admin" on documents for all using (auth.role() = 'authenticated');
create policy "Écriture admin" on site_settings for all using (auth.role() = 'authenticated');

-- Note : aucune inscription publique n'est prévue sur ce projet — seuls les
-- comptes créés manuellement par vous (via Supabase Dashboard > Authentication)
-- peuvent se connecter, donc "authenticated" revient ici à "admin".
