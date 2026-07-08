-- Migration boutique : reprise des 17 articles existants (venait de lib/data/shop.ts)
-- vers une vraie table, pour pouvoir leur ajouter une photo depuis /admin/boutique.

create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price text not null,
  image_url text,
  created_at timestamptz not null default now()
);

alter table products enable row level security;

create policy "Lecture publique" on products for select using (true);
create policy "Écriture admin" on products for all using (is_admin());

insert into products (name, description, price) values
('Pin''s Mousquetaires', 'Pin''s avec le logo des Mousquetaires', '3€'),
('Bandeau "M"', 'Bandeau', '15€'),
('Bonnet MOUSQUETAIRES', 'Bonnet des Mousquetaires', '25€'),
('Chaussettes "un pour tous, tous sur un"', 'Personnalisables : numéro', '18€'),
('Maillot supporter', 'Nom et numéro personnalisable, de S à XXXL', '55€'),
('Cagoule Balaclava "M"', 'Cagoule balaclava', '20€'),
('Serviette de match', 'Fixable à la ceinture avec velcro — idéal pour skill player', '15€'),
('Veste zip technique', 'Veste zip Mousquetaires Football, taille S/M/L/XL', '45€'),
('Short Perf', 'Taille du S au XXL', '25€'),
('Pantalon survêtement perf', 'Pantalon survêtement perf', '35€'),
('Coupe vent doublé Navy', 'Coupe-vent doublé', '45€'),
('Coupe vent doublé Jaune', 'Coupe-vent doublé', '45€'),
('T-shirt MSQTRS Jaune', 'T-shirt Mousquetaires', '25€'),
('T-shirt "M" Navy', 'T-shirt Mousquetaires', '25€'),
('Hoodie personnalisé Navy', 'Personnalisation du numéro', '40€'),
('T-shirt manches longues Navy', 'T-shirt manches longues', '30€'),
('T-shirt manches longues training', 'T-shirt manches longues training', '30€');
