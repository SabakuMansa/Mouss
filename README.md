# Les Mousquetaires — site du club

Site du club de football américain Les Mousquetaires (Châtenay-Malabry). Next.js + Supabase.

> Cette documentation est écrite au fur et à mesure de la construction du projet. Certaines sections
> (déploiement, ajout d'une page, etc.) seront complétées au fil des prochaines étapes.

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

(Ces deux valeurs se trouvent dans Supabase → Project Settings → API Keys.)

## Lancer le site en local

```bash
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000). Le site se recharge automatiquement à chaque modification de code.

## Organisation du projet

```
app/
  (site)/        → toutes les pages publiques (accueil, équipes, calendrier...)
                    partagent un même menu/pied de page (app/(site)/layout.tsx)
  admin/          → espace d'administration privé, protégé par connexion
app/layout.tsx    → structure commune à tout le site (polices, balises SEO)
proxy.ts          → protège les pages /admin/* : redirige vers la connexion si non identifié

components/       → composants réutilisables, rangés par thème
lib/data/         → contenu qui n'est pas encore en base de données (valeurs, textes fixes...)
lib/supabase/     → connexion à la base de données (client.ts, server.ts) et requêtes (matches.ts...)
lib/types.ts      → définitions TypeScript des données du site

supabase/schema.sql        → structure complète de la base de données (tables + sécurité)
supabase/seed_matches.sql  → données de départ (les 8 matchs de la saison)
```

## Espace admin

Accessible sur `/admin`, protégé par un compte (créé manuellement dans Supabase → Authentication → Users).
Actuellement disponible : gestion des matchs et résultats (`/admin/matchs`). D'autres sections
(actualités, joueurs, galerie, partenaires) seront ajoutées progressivement.

## Environnements

- **`main`** = site en ligne réel (production) : https://mouss-five.vercel.app
- **`dev`** = branche de test, jamais visible publiquement, avec sa propre URL de preview générée
  automatiquement par Vercel à chaque `git push`. C'est ici que tout changement est testé avant
  d'être fusionné vers `main`.

⚠️ Ne jamais utiliser le bouton "Redeploy" sur un déploiement `dev` en cochant une case liée à la
production — cela pousserait du code non validé sur le site en ligne. Pour republier `dev`, préférez
un nouveau `git push`.
