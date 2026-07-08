-- Reprise des 8 matchs réels de la saison 2025-2026 (venaient de lib/data/matches.ts)
-- À exécuter une seule fois dans Supabase > SQL Editor, après schema.sql.

insert into matches (opponent, opponent_logo_url, date_time, venue, is_home, result) values
('Cobras de Paris', '/images/opponents/cobras.jpg', '2025-11-16T14:00:00+01:00', 'Stade Jean Longuet, Châtenay-Malabry', true, '6 - 0'),
('Saints de Marne la Vallée', '/images/opponents/saints.jpg', '2025-11-30T14:00:00+01:00', 'Stade Jean Longuet, Châtenay-Malabry', true, '24 - 6'),
('Météores Fontenay-sous-Bois', '/images/opponents/meteo.jpg', '2025-12-14T14:00:00+01:00', 'Stade André Laurent, Fontenay-sous-Bois', false, '20 - 23'),
('Bucks de Boran-sur-Oise', '/images/opponents/bucks.jpg', '2026-01-18T14:00:00+01:00', 'Stade Jean Longuet, Châtenay-Malabry', true, '18 - 0'),
('Chevalier d''Orléans', '/images/opponents/chevalier.jpg', '2026-02-01T14:00:00+01:00', 'Stade de l''Île Arrault, Orléans', false, '8 - 20'),
('Météores Fontenay-sous-Bois', '/images/opponents/meteo.jpg', '2026-02-22T14:00:00+01:00', 'Stade Jean Longuet, Châtenay-Malabry', true, '10 - 7'),
('Saints de Marne la Vallée', '/images/opponents/saints.jpg', '2026-03-14T20:00:00+01:00', '41 rue de l''Abyme, Magny-le-Hongre', false, '37 - 0'),
('Cobras de Paris', '/images/opponents/cobras.jpg', '2026-04-04T20:00:00+02:00', 'Stade Suzanne Lenglen, 75015 Paris', false, null);
