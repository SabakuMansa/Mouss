-- Ajoute le nom de la chaîne Twitch du club, modifiable ensuite depuis
-- /admin/infos comme les autres liens (Facebook, HelloAsso...).

alter table site_settings add column if not exists twitch_channel text;

update site_settings set twitch_channel = 'mousquetaires92';
