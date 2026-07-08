-- Complète la table site_settings avec les champs utilisés sur plusieurs pages
-- (auparavant dupliqués entre lib/data/join.ts et lib/data/contact.ts).

alter table site_settings add column if not exists venue text;
alter table site_settings add column if not exists facebook_url text;
alter table site_settings add column if not exists instagram_url text;
alter table site_settings add column if not exists map_embed_src text;

insert into site_settings (address, schedule, email, helloasso_url, venue, facebook_url, instagram_url, map_embed_src)
values (
  '254 av. de la Division Leclerc - 92290 Chatenay-Malabry',
  'Lundi & Jeudi de 20h à 22h',
  'mousquetaires.footus@gmail.com',
  'https://www.helloasso.com/associations/les-mousquetaires-foot-us/adhesions/adhesion-2025-2026',
  'Stade Municipal Jean Longuet',
  'https://www.facebook.com/mousfootus/?locale=fr_FR',
  'https://www.instagram.com/mousquetairesfootus/?hl=fr',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.818395793304!2d2.267659359431484!3d48.76453030614987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e679e25e112069%3A0x342506e186ea8106!2sStade%20de%20Ch%C3%A2tenay-Malabry!5e0!3m2!1sfr!2sfr!4v1761945612178!5m2!1sfr!2sfr'
);
