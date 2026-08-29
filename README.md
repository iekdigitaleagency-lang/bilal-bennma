# ROAD TO 2027 — Billal Bennama

Site vitrine statique de Billal Bennama, boxeur français, vice-champion
olympique à Paris 2024 (médaille d'argent), dans le cadre du projet
« ROAD TO 2027 ».

Site une-page, sans backend : Next.js (App Router) + TypeScript +
Tailwind CSS + Framer Motion. Déployable directement sur Vercel.

## Lancer le projet en local

Prérequis : Node.js 18.17 ou plus récent.

```bash
npm install
npm run dev
```

Le site est alors disponible sur [http://localhost:3000](http://localhost:3000).

Autres commandes utiles :

```bash
npm run build   # build de production
npm run start   # sert le build de production en local
npm run lint    # vérifie le code avec ESLint
```

## Déploiement sur Vercel

1. Poussez ce dépôt sur GitHub (ou GitLab/Bitbucket).
2. Sur [vercel.com](https://vercel.com), cliquez sur « Add New Project »
   et importez le dépôt.
3. Vercel détecte automatiquement Next.js — aucune configuration
   supplémentaire n'est nécessaire, il n'y a ni base de données ni
   variable d'environnement à renseigner.
4. Cliquez sur « Deploy ». Chaque nouveau push sur la branche
   principale redéploiera automatiquement le site.

## Modifier les textes du site

**Tous les textes du site sont centralisés dans un seul fichier :**

```
data/content.ts
```

Ce fichier regroupe, section par section, l'ensemble des contenus
affichés : titres, paragraphes, citations, dates, chiffres clés,
coordonnées de contact, etc. Pour changer un texte, il suffit d'éditer
la valeur correspondante dans ce fichier — aucune autre partie du code
ne doit être modifiée.

Quelques exemples :

- **Ajouter un résultat au palmarès** : ajoutez un objet dans le
  tableau `palmares.timeline`, au format
  `{ year: "2026", title: "...", description: "..." }`. Utilisez
  `highlight: true` pour un temps fort (podium majeur) ou
  `isGoal: true` pour un objectif à venir.
- **Modifier un chiffre clé** : éditez le tableau `stats.items`
  (`{ value, suffix?, label }`). Le chiffre s'anime automatiquement de
  0 à sa valeur finale à l'affichage.
- **Ajouter un partenaire** : ajoutez un objet dans `partners.logos`,
  au format `{ name: "...", logoSrc: "/partners/logo.png", href: "https://..." }`.
  Déposez le fichier logo correspondant dans `public/partners/`. Tant
  que ce tableau est vide, la grille affiche des emplacements réservés
  ("Votre logo ici").
- **Changer l'email ou le téléphone de contact** : éditez les champs
  `contact.email`, `contact.phone` et `contact.phoneHref` (ce dernier
  au format international, sans espaces, ex. `+33681452413`).

## Changer les images

- **Photo du Hero** (`public/hero.jpg`) : image de fond plein écran de
  la page d'accueil. Remplacez ce fichier par une nouvelle photo en
  conservant le même nom, idéalement au format portrait ou paysage en
  haute résolution (1600 px de large minimum), en noir et blanc pour
  rester cohérent avec l'identité visuelle du site.
- **Image de partage / Open Graph** (`public/og-image.jpg`) : aperçu
  affiché lors du partage du lien sur les réseaux sociaux et par
  messagerie. Format recommandé : 1200 × 630 px.
- **Logos partenaires** : à déposer dans `public/partners/` puis à
  référencer dans `partners.logos` (voir ci-dessus).

Les images sont automatiquement optimisées par `next/image` (formats
modernes AVIF/WebP, chargement différé et dimensionnement adaptatif) —
il n'y a rien à faire de plus après avoir remplacé les fichiers.

## Identité visuelle

- Couleurs : noir profond `#0A0A0A`, blanc cassé `#F5F3EF`, accent
  rouge `#C1272D`. Modifiables dans `tailwind.config.ts` (clés `ink`,
  `paper`, `accent`).
- Typographies : une serif éditoriale (titres) et une sans-serif
  sobre (texte courant), chargées via `next/font` dans
  `app/layout.tsx`.

## Accessibilité et animations

- Contrastes élevés, focus clavier toujours visibles.
- Toutes les animations (apparitions au scroll, effet rideau sur les
  titres, curseur personnalisé, compteurs animés) se désactivent
  automatiquement si l'utilisateur a activé la réduction des
  animations dans les préférences de son système
  (`prefers-reduced-motion: reduce`).
- Le curseur personnalisé ne s'active que sur les écrans avec un
  pointeur précis (souris/trackpad) ; il reste désactivé sur mobile et
  tablette tactile.

## Structure du projet

```
app/                 Layout racine, page unique et styles globaux
components/          Sections de la page et briques d'animation réutilisables
data/content.ts      Tous les textes et données du site (fichier à éditer)
lib/                 Hooks utilitaires (détection prefers-reduced-motion)
public/              Images et assets statiques
```
