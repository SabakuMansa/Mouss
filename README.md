# Les Mousquetaires — site du club

Site du club de football américain Les Mousquetaires (Châtenay-Malabry). Next.js + Supabase.

## Stack technique

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Tailwind CSS v4** pour le style
- **Supabase** : base de données (PostgreSQL), authentification admin, stockage de fichiers
- **Vercel** : hébergement, avec déploiement automatique à chaque `git push`

## Installation sur votre Mac

Prérequis : [Node.js](https://nodejs.org) (version 20 ou plus récente).

```bash
git clone git@github.com:SabakuMansa/Mouss.git
cd Mouss
npm install
```

Créez ensuite un fichier `.env.local` à la racine du projet (jamais commité dans Git) avec :

```
NEXT_PUBLIC_SUPABASE_URL=https://pveiltpmlbvaddganotj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<la clé publique du projet Supabase>
```

(Ces deux valeurs se trouvent dans Supabase → Project Settings → API Keys. Ce sont des valeurs
publiques par conception, sans risque à réutiliser — la vraie sécurité est assurée côté base de
données, voir la section Sécurité plus bas.)

## Lancer le site en local

```bash
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000). Le site se recharge automatiquement à chaque modification de code. Un bandeau rouge en bas à droite confirme que vous êtes bien en local, jamais sur le vrai site.

## Organisation du projet

```
app/
  (site)/        → toutes les pages publiques (accueil, équipes, calendrier...)
                    partagent un même menu/pied de page (app/(site)/layout.tsx)
  admin/          → espace d'administration privé, protégé par connexion
    <section>/page.tsx    → page de liste + formulaire d'ajout
    <section>/actions.ts  → fonctions serveur (create/update/delete) appelées par les formulaires
app/layout.tsx    → structure commune à tout le site (polices, balises SEO, bandeau d'environnement)
proxy.ts          → protège les pages /admin/* : redirige vers la connexion si non identifié

components/       → composants réutilisables, rangés par thème (home/, teams/, admin/, ui/...)
lib/data/         → contenu qui reste écrit en dur dans le code (valeurs du club, textes fixes...)
lib/supabase/     → connexion à la base (client.ts, server.ts) et lecture des données (matches.ts,
                    roster.ts, photos.ts, partners.ts, settings.ts)
lib/types.ts      → définitions TypeScript des données du site

supabase/
  schema.sql                  → structure complète de la base (tables + sécurité RLS)
  harden_admin_access.sql     → liste blanche des emails admin (admin_emails + fonction is_admin())
  storage_setup.sql           → espace de stockage pour les photos uploadées
  seed_*.sql                  → données de départ (transcrites du site d'origine)
  alter_site_settings.sql     → ajout des champs infos pratiques (venue, réseaux sociaux, carte)
  migrate_products.sql        → table boutique (articles + photo) + reprise des 17 articles existants

scripts/backup.mjs            → export JSON de toutes les tables (utilisé par la sauvegarde automatique)
.github/workflows/backup.yml  → programme la sauvegarde chaque lundi
```

## Espace admin

Accessible sur `/admin`, protégé par connexion (compte créé manuellement dans Supabase →
Authentication → Users, jamais par inscription publique — voir Sécurité). Sections disponibles :

| Section | URL | Gère |
|---|---|---|
| Matchs & résultats | `/admin/matchs` | Calendrier de la saison |
| Joueurs & staff | `/admin/joueurs` | Effectif Sénior, U18, coachs |
| Galerie | `/admin/galerie` | Photos (upload direct ou URL) |
| Partenaires | `/admin/partenaires` | Sponsors et partenaires |
| Boutique | `/admin/boutique` | Articles et photos de la boutique |
| Infos pratiques | `/admin/infos` | Adresse, horaires, réseaux sociaux, carte |

## Sécurité

- **Aucune inscription publique** : seuls les comptes créés à la main par un admin (Supabase →
  Authentication → Users) peuvent exister.
- **Liste blanche d'admins** (`supabase/harden_admin_access.sql`) : même un compte connecté ne peut
  écrire dans la base que si son email figure dans la table `admin_emails`. Pour ajouter un nouvel
  admin (ex: un autre membre du bureau), deux étapes : créer son compte dans Supabase Authentication,
  puis `insert into admin_emails (email) values ('son-email@exemple.com');` dans le SQL Editor.
- **Lecture publique / écriture admin uniquement**, appliqué au niveau de la base de données
  elle-même (Row Level Security), pas seulement dans le code du site — donc protégé même si le code
  du site avait un bug.
- **Aucun secret dans Git** : `.env.local` est exclu par `.gitignore`. Les seules valeurs utilisées
  par le site (`NEXT_PUBLIC_SUPABASE_URL`/`ANON_KEY`) sont publiques par conception.
- **Alertes Supabase** : Supabase envoie un email si une table est créée sans sécurité (RLS)
  activée — ne jamais ignorer cet email. Réflexe en cas d'alerte : `alter table <nom> enable row
  level security;` dans le SQL Editor, puis ajouter les règles de lecture/écriture nécessaires
  (voir `schema.sql` comme modèle). Un oubli de ce type sur `admin_emails` a été corrigé le
  2026-08-03 (`supabase/fix_admin_emails_rls.sql`).

## Sauvegardes

Une [GitHub Action](.github/workflows/backup.yml) exporte automatiquement toutes les tables en JSON
chaque lundi à 3h, et les enregistre sur la branche **`backups`** du dépôt (dossier `backups/<date>/`).
Gratuit, sans intervention nécessaire. Pour lancer une sauvegarde manuelle immédiate : GitHub → onglet
**Actions** → "Sauvegarde hebdomadaire de la base de données" → **Run workflow**.

Pour restaurer une table à partir d'une sauvegarde : ouvrez le fichier JSON correspondant sur la
branche `backups`, et réinjectez les lignes via Supabase → Table Editor (ou SQL Editor avec des
`insert into`).

## Environnements

- **`main`** = site en ligne réel (production) : https://mouss-five.vercel.app
- **`dev`** = branche de test, jamais visible publiquement, avec sa propre URL de preview générée
  automatiquement par Vercel à chaque `git push`. Un bandeau rouge "Test (dev)" s'affiche pour ne
  jamais confondre avec le vrai site.
- **`backups`** = ne contient aucun code, juste l'historique des sauvegardes. Vercel essaiera de la
  déployer automatiquement et échouera (normal, sans conséquence) puisqu'il n'y a pas de site dessus.

⚠️ Ne jamais utiliser le bouton "Redeploy" sur un déploiement `dev` en cochant une case liée à la
production — cela pousserait du code non validé sur le site en ligne. Pour republier `dev`, préférez
un nouveau `git push`.

## Comment faire une mise à jour du site

1. Toujours partir de la branche `dev` : `git checkout dev && git pull`
2. Faites vos modifications de code
3. Vérifiez en local : `npm run dev`, puis regardez sur [http://localhost:3000](http://localhost:3000)
4. `git add -A && git commit -m "Description du changement" && git push origin dev`
5. Vercel republie automatiquement une preview de `dev` (URL différente à chaque fois, visible dans
   l'onglet Deployments) — vérifiez que tout fonctionne dessus
6. Une fois satisfait, fusionnez vers `main` pour mettre en ligne :
   ```bash
   git checkout main
   git pull
   git merge dev
   git push origin main
   ```
   Vercel republie alors automatiquement le vrai site en production.

## Comment ajouter une nouvelle page publique

1. Créez un dossier dans `app/(site)/` avec le nom de l'URL voulue (ex: `app/(site)/evenements/`
   pour `/evenements`)
2. À l'intérieur, un fichier `page.tsx` — copiez la structure d'une page existante similaire
   (ex: `app/(site)/galerie/page.tsx`) comme point de départ
3. Ajoutez le lien dans le menu : `lib/data/club.ts`, tableau `navLinks`

## Comment ajouter une nouvelle section à l'espace admin

Chaque section admin suit le même schéma (voir `/admin/partenaires` comme exemple simple) :

1. `supabase/` : ajoutez une table si besoin (avec RLS + policies, voir `schema.sql` comme modèle)
2. `lib/supabase/<nom>.ts` : une fonction qui lit la table (`get...()`)
3. `app/admin/<nom>/actions.ts` : fonctions serveur `create/update/delete` (voir
   `app/admin/partenaires/actions.ts`)
4. `app/admin/<nom>/page.tsx` : la page avec le formulaire et la liste
5. Ajoutez le lien dans `app/admin/layout.tsx` (menu) et `app/admin/page.tsx` (tableau de bord)
6. Si la page publique doit aussi afficher ces données, remplacez son import statique par un appel
   à votre nouvelle fonction `get...()` (voir comment `app/(site)/galerie/page.tsx` utilise
   `getPhotos()`)

## Comment revenir en arrière si quelque chose casse

**Option la plus simple (recommandée)** : Vercel garde tous les déploiements précédents. Sur
vercel.com → Deployments, retrouvez un déploiement `main` antérieur qui fonctionnait, cliquez sur
**"..."** → **"Promote to Production"**. Le site revient instantanément à cette version, sans toucher
au code.

**Avec Git** (si vous voulez aussi annuler le changement dans le code) :

```bash
git log --oneline          # repérez le commit à annuler (son identifiant à gauche)
git revert <identifiant>   # crée un nouveau commit qui annule celui-ci proprement
git push origin main       # (ou dev, selon la branche concernée)
```

Évitez `git reset --hard` ou toute commande qui réécrit l'historique sur une branche déjà partagée —
`git revert` est plus sûr, il ajoute une correction sans effacer l'historique existant.
