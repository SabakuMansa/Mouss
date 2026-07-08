-- Crée l'espace de stockage "photos" pour l'upload d'images depuis l'admin,
-- avec lecture publique (visiteurs du site) et écriture réservée aux admins connectés.

insert into storage.buckets (id, name, public)
values ('photos', 'photos', true)
on conflict (id) do nothing;

create policy "Lecture publique des photos"
on storage.objects for select
using (bucket_id = 'photos');

create policy "Upload photos par admin connecté"
on storage.objects for insert
with check (bucket_id = 'photos' and auth.role() = 'authenticated');

create policy "Suppression photos par admin connecté"
on storage.objects for delete
using (bucket_id = 'photos' and auth.role() = 'authenticated');
