-- Correctif de sécurité urgent : la table admin_emails avait été créée dans
-- harden_admin_access.sql SANS jamais activer la sécurité ligne par ligne (RLS).
-- Résultat : n'importe qui connaissant l'URL du projet pouvait lire ET modifier
-- cette liste via l'API publique — ce qui aurait pu permettre à quelqu'un de
-- s'auto-ajouter comme admin. Repéré par l'alerte automatique de Supabase.
--
-- Cette table n'est utilisée que par la fonction is_admin() (security definer),
-- jamais interrogée directement par le site — donc on l'active SANS aucune
-- règle de lecture/écriture publique : elle devient totalement fermée à toute
-- requête externe, admin y compris, tout en restant utilisable par is_admin().

alter table admin_emails enable row level security;
