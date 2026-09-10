# Guide d'utilisation du site — Les Mousquetaires

Ce guide s'adresse aux membres du club qui gèrent le contenu du site.
**Aucune compétence technique n'est nécessaire.** Vous n'avez jamais besoin de toucher au code.

Le site officiel : **https://mousquetairesfootus.fr**

---

## 1. Se connecter à l'espace de gestion

1. Allez tout en bas du site, sur n'importe quelle page.
2. Dans la barre du bas, cliquez sur le petit lien **🔒 Admin** (à droite, à côté de « Mentions légales »).
3. Entrez votre **email** et votre **mot de passe**, puis « Se connecter ».

Vous arrivez sur le **tableau de bord** : 6 cases, une par type de contenu.

> **Astuce** : mettez la page `mousquetairesfootus.fr/admin` en favori pour aller plus vite.

**Important** : ne partagez jamais votre mot de passe. Si une autre personne du bureau doit gérer
le site, il faut lui créer **son propre compte** (voir la section 8).

---

## 2. Ajouter un match ou saisir un résultat

**Menu : Matchs**

### Ajouter un match à venir
Remplissez le formulaire en haut de page :

| Champ | Quoi mettre |
|---|---|
| **Adversaire** | Le nom de l'équipe adverse (ex : `Cobras de Paris`) |
| **Logo adversaire** | Facultatif — laissez vide si vous ne l'avez pas |
| **Date et heure** | Cliquez, un calendrier s'ouvre |
| **Lieu** | L'adresse ou le nom du stade |
| **Résultat** | **Laissez vide** pour un match à venir |
| **Match à domicile** | Cochez si le match se joue chez nous, décochez si c'est à l'extérieur |

Puis cliquez sur **Ajouter**.

### Saisir le résultat après le match
Retrouvez le match dans la liste, cliquez sur **Modifier**, remplissez le champ **Résultat**
au format `24 - 6`, puis enregistrez.

> Le site bascule tout seul le match de « À venir » à « Terminé » en fonction de la date.
> Les 3 derniers résultats remontent automatiquement en page d'accueil dans « Dernières actualités ».

---

## 3. Gérer l'effectif (joueurs et coachs)

**Menu : Joueurs**

Pour ajouter quelqu'un : choisissez son **équipe** dans la liste déroulante (Séniors, U18, Coachs…),
mettez son **nom**, et son **poste** (ex : `Quarterback`, ou le rôle pour un coach).
La taille, le poids et la photo sont facultatifs.

Pour un départ ou une erreur : bouton **Modifier** ou **Supprimer** sur la ligne concernée.

---

## 4. Ajouter des photos

**Menu : Galerie**

Cliquez sur **Choisir un fichier**, sélectionnez la photo sur votre ordinateur ou votre téléphone,
ajoutez une légende si vous voulez, puis **Ajouter**. Elle apparaît immédiatement sur la page Galerie
du site.

> Préférez des photos nettes et pas trop lourdes. Si une photo met du temps à s'envoyer, c'est
> qu'elle est très grosse — c'est normal, laissez-la finir.

---

## 5. Gérer la boutique

**Menu : Boutique**

Les 17 articles existants sont déjà en place avec leurs photos.

- **Nouvel article** : remplissez nom, prix (ex : `25€`), description, et choisissez une photo.
- **Changer une photo** : sur la ligne de l'article, « Choisir un fichier » puis
  **Mettre à jour la photo**.
- **Article épuisé / retiré** : bouton **Supprimer**.

> ⚠️ Cette page gère **l'affichage** des articles sur le site. Les commandes et les paiements,
> eux, restent gérés sur **HelloAsso** — le bouton « Commander » y renvoie. Si vous ajoutez un
> article ici, pensez à l'ajouter aussi dans la boutique HelloAsso, sinon les gens ne pourront
> pas l'acheter.

---

## 6. Les partenaires

**Menu : Partenaires**

Nom du partenaire, son site internet (facultatif) et son logo. Ils s'affichent sur la page d'accueil.

---

## 7. Les infos pratiques et les liens

**Menu : Infos pratiques**

C'est ici que se changent, **en un seul endroit pour tout le site** :

- le nom du stade, l'adresse, les horaires d'entraînement
- l'email de contact
- le lien HelloAsso (à mettre à jour **chaque saison** quand la nouvelle adhésion est ouverte)
- les liens Facebook et Instagram
- la carte Google Maps
- **la chaîne Twitch** (mettez juste l'identifiant, ex : `mousquetaires92`, pas l'adresse complète)

Cliquez sur **Enregistrer** en bas. Le changement est visible sur tout le site immédiatement.

### La page Live
Elle affiche automatiquement la chaîne Twitch indiquée ci-dessus.
Vous n'avez **rien à faire avant un match** : quand la chaîne passe en direct, la vidéo apparaît
toute seule sur le site. En dehors des diffusions, un message « hors ligne » s'affiche, c'est normal.

---

## 8. Ajouter une autre personne à l'équipe de gestion

Il faut deux étapes, sur le site **supabase.com** (la base de données du site) :

1. **Créer le compte** : Supabase → votre projet → menu **Authentication** → **Users** →
   **Add user** → **Create new user**. Renseignez son email et un mot de passe, et **cochez
   « Auto Confirm User »** (sinon la personne ne pourra pas se connecter).
2. **L'autoriser** : menu **SQL Editor** → **New query** → collez la ligne ci-dessous en remplaçant
   l'email, puis cliquez **Run** :
   ```sql
   insert into admin_emails (email) values ('son-email@exemple.com');
   ```

Les deux étapes sont obligatoires : sans la seconde, la personne peut se connecter mais ne peut
rien modifier. C'est une sécurité voulue.

---

## 9. Questions fréquentes

**Est-ce que je peux casser le site en me trompant ?**
Non. Vous ne pouvez modifier que du contenu (textes, photos, résultats). Si vous supprimez
quelque chose par erreur, il suffit de le recréer.

**Mon changement n'apparaît pas sur le site ?**
Rafraîchissez la page (Ctrl+R, ou Cmd+R sur Mac). Si ça ne change rien, attendez une minute et
réessayez.

**Les données sont-elles sauvegardées ?**
Oui, une sauvegarde automatique complète est faite **chaque lundi**, sans intervention.

**Je veux une nouvelle page, ou changer le design.**
Ça, ce n'est pas gérable depuis l'espace admin — il faut passer par une personne qui sait
développer. Le code source complet du site est disponible (voir le fichier `README.md`), donc
n'importe quel développeur peut reprendre le travail.

---

## 10. Les comptes qui font tourner le site

Quatre services, tous **gratuits** dans l'usage actuel :

| Service | À quoi ça sert | Que se passe-t-il en cas de problème |
|---|---|---|
| **OVH** | Le nom de domaine `mousquetairesfootus.fr` | Le site n'est plus joignable à cette adresse |
| **Vercel** | Héberge le site (le met en ligne) | Le site ne s'affiche plus |
| **Supabase** | La base de données (contenu) et les comptes admin | Le contenu ne s'affiche plus |
| **GitHub** | Stocke le code source | Le site continue de tourner, mais plus d'évolution possible |

> ⚠️ **À conserver précieusement** : les identifiants de ces 4 comptes. Notez-les dans un endroit
> sûr accessible à plusieurs membres du bureau — pas seulement dans la tête d'une seule personne.
> Si Supabase ou Vercel envoie un email d'alerte de sécurité, **ne l'ignorez pas** : faites-le lire
> à quelqu'un de technique rapidement.
