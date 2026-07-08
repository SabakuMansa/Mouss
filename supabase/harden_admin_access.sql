-- Renforce la sécurité : au lieu de "n'importe quel compte connecté peut écrire",
-- on vérifie précisément que l'email du compte connecté fait partie d'une liste
-- d'admins autorisés. Empêche un compte créé par erreur ou par un tiers d'avoir
-- accès en écriture, même si les inscriptions publiques sont un jour réactivées
-- par erreur dans les réglages Supabase.

create table admin_emails (
  email text primary key
);

-- Ajoutez ici l'email de chaque personne autorisée à administrer le site.
-- Remplacez par votre vrai email de connexion admin.
insert into admin_emails (email) values ('k.benalioua.sio@gmail.com');

create or replace function is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from admin_emails
    where email = auth.jwt() ->> 'email'
  );
$$;

-- Remplace les anciennes règles d'écriture par la vérification stricte
drop policy if exists "Écriture admin" on teams;
drop policy if exists "Écriture admin" on players;
drop policy if exists "Écriture admin" on matches;
drop policy if exists "Écriture admin" on news;
drop policy if exists "Écriture admin" on photos;
drop policy if exists "Écriture admin" on partners;
drop policy if exists "Écriture admin" on documents;
drop policy if exists "Écriture admin" on site_settings;

create policy "Écriture admin" on teams for all using (is_admin());
create policy "Écriture admin" on players for all using (is_admin());
create policy "Écriture admin" on matches for all using (is_admin());
create policy "Écriture admin" on news for all using (is_admin());
create policy "Écriture admin" on photos for all using (is_admin());
create policy "Écriture admin" on partners for all using (is_admin());
create policy "Écriture admin" on documents for all using (is_admin());
create policy "Écriture admin" on site_settings for all using (is_admin());

-- Idem pour l'upload/suppression de photos dans le stockage
drop policy if exists "Upload photos par admin connecté" on storage.objects;
drop policy if exists "Suppression photos par admin connecté" on storage.objects;

create policy "Upload photos par admin"
on storage.objects for insert
with check (bucket_id = 'photos' and is_admin());

create policy "Suppression photos par admin"
on storage.objects for delete
using (bucket_id = 'photos' and is_admin());
