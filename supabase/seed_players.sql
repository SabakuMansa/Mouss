-- Reprise de l'effectif réel (venait de lib/data/roster.ts)
-- À exécuter une seule fois dans Supabase > SQL Editor.

insert into teams (name) values ('Sénior'), ('U18'), ('Coach');

-- Sénior
insert into players (team_id, name, position, height_cm, weight_kg, photo_url)
select id, v.name, v.position, v.height_cm, v.weight_kg, v.photo_url
from teams, (values
  ('David Victor', 'Quarterbacks', '1m81', '70 kg', '/images/roster/10.jpg'),
  ('Monfort Matthieu', 'Running Backs', '1m80', '90 kg', '/images/roster/47.jpg'),
  ('Mindas Bora', 'Running Backs', '1m80', '80 kg', '/images/roster/7.jpg'),
  ('Almada Pereira Bradley', 'Running Backs', null, null, '/images/roster/20.jpg'),
  ('Charles Henri', 'Running Backs', '1m75', '76 kg', null),
  ('Kouadri Djoubair', 'Receveurs', '1m74', '86 kg', '/images/roster/1.jpg'),
  ('Belloni Marco', 'Receveurs', '1m73', '71 kg', '/images/roster/3.jpg'),
  ('De Forcade Basile', 'Receveurs', null, null, '/images/roster/9.jpg'),
  ('Msefer Alwin', 'Receveurs', '1m75', '73 kg', '/images/roster/11.jpg'),
  ('Pierre Guillaume', 'Receveurs', '1m87', '85 kg', '/images/roster/23.jpg'),
  ('Tallandie Clément', 'Receveurs', '1m84', '70 kg', '/images/roster/25.jpg'),
  ('Sougoumar Vivek', 'Receveurs', '1m85', '85 kg', '/images/roster/80.jpg'),
  ('Doro Pablo', 'Receveurs', '1m87', '72 kg', '/images/roster/83.jpg'),
  ('Desius John', 'Receveurs', '1m81', '80 kg', null),
  ('Achech Iyad', 'Tight End', '1m85', '85 kg', '/images/roster/21.jpg'),
  ('Chemla Victor', 'Tight End', '1m76', '85 kg', '/images/roster/84.jpg'),
  ('Admeziem Wassim', 'Oline', null, null, '/images/roster/56.jpg'),
  ('Balde Boubacar', 'Oline', '1m74', '96 kg', '/images/roster/57.jpg'),
  ('Baudelot Ilhan', 'Oline', '1m78', '140 kg', '/images/roster/67.jpg'),
  ('Cain Sébastien', 'Oline', '1m80', '88 kg', '/images/roster/52.jpg'),
  ('Haudry Benjamin', 'Oline', '1m90', '127 kg', '/images/roster/63.jpg'),
  ('Marteau Vincent', 'Oline', '1m83', '103 kg', '/images/roster/50.jpg'),
  ('Mouysset Thibault', 'Oline', '1m80', '125 kg', '/images/roster/77.jpg'),
  ('Noel Stéphane', 'Oline', '1m74', '96 kg', '/images/roster/40.jpg'),
  ('Admeziem Jessim', 'Dline', '1m83', '83 kg', '/images/roster/33.jpg'),
  ('Lesueur Anthony', 'Dline', '1m83', '92 kg', '/images/roster/82.jpg'),
  ('Brun Julien', 'Dline', '1m75', '90 kg', '/images/roster/12.jpg'),
  ('Ghezouli Mohamed', 'Dline', null, null, '/images/roster/79.jpg'),
  ('Bennegadi Jazil', 'Linebacker', '1m68', '70 kg', '/images/roster/4.jpg'),
  ('De Boyer Luc', 'Linebacker', '1m85', '100 kg', '/images/roster/46.jpg'),
  ('Shu Mickael', 'Linebacker', '1m80', '83 kg', '/images/roster/41.jpg'),
  ('Zaïti Bilal', 'Linebacker', '1m89', '115 kg', '/images/roster/59.jpg'),
  ('Razafindrazaka Antony', 'DB', '1m73', '77 kg', null),
  ('Houndonougbo Xavier', 'DB', '1m80', '72 kg', '/images/roster/29.jpg'),
  ('Liang Louis', 'DB', '1m82', '82 kg', '/images/roster/27.jpg'),
  ('Mercier Gabin', 'DB', '1m88', '89 kg', '/images/roster/13.jpg'),
  ('Moissaing Ugo', 'DB', '1m82', '82 kg', '/images/roster/37.jpg'),
  ('Cisse Sadibou', 'DB', '1m86', '76 kg', '/images/roster/81.jpg'),
  ('Saunois Arthur', 'DB', '1m73', '65 kg', null),
  ('Vacherot Nicolas', 'DB', '1m90', '90 kg', '/images/roster/22.jpg'),
  ('Nicy Michal Mathieu', 'DB', '1m88', '85 kg', null)
) as v(name, position, height_cm, weight_kg, photo_url)
where teams.name = 'Sénior';

-- U18
insert into players (team_id, name, position, height_cm, weight_kg, photo_url)
select id, v.name, v.position, v.height_cm, v.weight_kg, v.photo_url
from teams, (values
  ('Lecamp Clément', 'Quarterbacks', '1m73', '65 kg', '/images/roster-u18/clement1.jpg'),
  ('Coulange Melvin', 'Running Backs', '1m75', '60 kg', null),
  ('Lee Sung-Min', 'Receveurs', '1m73', '65 kg', '/images/roster-u18/lee1.jpg')
) as v(name, position, height_cm, weight_kg, photo_url)
where teams.name = 'U18';

-- Coachs (le rôle est stocké dans la colonne "position")
insert into players (team_id, name, position, photo_url)
select id, v.name, v.role, v.photo_url
from teams, (values
  ('Nelson Joel', 'Head Coach / Coach défense', '/images/coachs/nelson.jpg'),
  ('Thiriez Duncan', 'Coach offense', '/images/coachs/duncan.jpg')
) as v(name, role, photo_url)
where teams.name = 'Coach';
