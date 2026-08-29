/**
 * Fichier de contenu unique du site.
 *
 * Tous les textes, chiffres et données affichés sur le site vivent ici.
 * Pour mettre à jour le site (nouveau résultat, nouveau partenaire, texte
 * corrigé...), il suffit de modifier les valeurs de ce fichier — aucune
 * autre partie du code n'a besoin d'être touchée.
 */

export const site = {
  name: "Billal Bennama",
  project: "ROAD TO 2027",
  title: "ROAD TO 2027 — Billal Bennama, boxeur",
  description:
    "Billal Bennama, vice-champion olympique de boxe (médaille d'argent, Paris 2024). Suivez la route vers Los Angeles 2028. Team France.",
  url: "https://billal-bennama.vercel.app",
  ogImage: "/og-image.jpg",
  locale: "fr_FR",
  // Logo utilisé comme bouton d'accueil dans la navigation (fond transparent).
  logo: {
    src: "/logo.png",
    alt: "Billal Bennama — retour à l'accueil",
  },
};

export const nav = [
  { label: "Parcours", href: "#parcours" },
  { label: "Palmarès", href: "#palmares" },
  { label: "Chiffres clés", href: "#chiffres" },
  { label: "Vision", href: "#vision" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

export const countdown = {
  label: "JO Los Angeles 2028",
  // Date d'ouverture prévisionnelle des Jeux Olympiques d'été de Los
  // Angeles. À ajuster ici si une date officielle différente est
  // confirmée — le compte à rebours de la navigation se met à jour
  // automatiquement.
  targetDate: "2028-07-14T00:00:00-07:00",
};

export const hero = {
  kicker: "Team France — Boxe",
  title: "ROAD TO 2027",
  subtitle: "BILLAL BENNAMA — Boxeur, Team France",
  scrollLabel: "Découvrir",
  backgroundImage: {
    src: "/hero.jpg",
    alt: "Portrait en noir et blanc de Billal Bennama, boxeur, en sueur sur fond noir",
  },
};

export const parcours = {
  kicker: "Mon parcours",
  title: "Un héritage familial",
  paragraphs: [
    "Billal Bennama est né le 14 juin 1998 à Albi, au sein d'une famille qui vit au rythme du ring depuis toujours.",
    "Son père, Mohamed Bennama, entraîneur principal du Blagnac Boxing Club, est reconnu comme l'un des meilleurs entraîneurs de France et d'Europe. C'est tout naturellement que Billal enfile ses premiers gants dès l'âge de 4 ans.",
    "Aujourd'hui, il partage son temps d'entraînement entre l'INSEP, à Paris, et le Blagnac Boxing Club, à Toulouse — entre l'excellence du haut niveau national et les racines de son club formateur.",
  ],
  quote: "La boxe comme un héritage familial.",
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  /** Met en avant l'étape (ex : médaille olympique) */
  highlight?: boolean;
  /** Marque une étape à venir / un objectif plutôt qu'un résultat acquis */
  isGoal?: boolean;
};

export const palmares = {
  kicker: "Palmarès",
  title: "Une trajectoire vers les sommets",
  intro:
    "Chaque étape de son parcours prépare la prochaine. Retrouvez ci-dessous les jalons de sa carrière — cette liste est faite pour être complétée au fil des résultats à venir.",
  // Ajoutez ou modifiez des résultats ici : chaque entrée doit contenir au
  // minimum { year, title, description }. Passez `highlight: true` pour un
  // temps fort (podium majeur) ou `isGoal: true` pour un objectif à venir.
  timeline: [
    {
      year: "1998",
      title: "Naissance à Albi",
      description:
        "Billal Bennama naît le 14 juin 1998 à Albi, dans une famille qui vit autour du ring.",
    },
    {
      year: "2002",
      title: "Premiers gants",
      description:
        "Initié à la boxe dès l'âge de 4 ans par son père Mohamed Bennama, entraîneur principal du Blagnac Boxing Club.",
    },
    {
      year: "2024",
      title: "Jeux Olympiques de Paris — Médaille d'argent",
      description:
        "Vice-champion olympique. Billal monte sur le podium des Jeux de Paris 2024, la consécration d'une vie dédiée à la boxe.",
      highlight: true,
    },
    {
      year: "2028",
      title: "Objectif : Los Angeles",
      description:
        "Cap sur l'or aux Jeux Olympiques de Los Angeles 2028, aux côtés de sa sœur Rim Bennama.",
      isGoal: true,
    },
  ] as TimelineEntry[],
};

export type StatEntry = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats = {
  kicker: "Chiffres clés",
  title: "Une carrière en chiffres",
  items: [
    { value: 24, suffix: "+", label: "Années de pratique" },
    { value: 1, label: "Médaille olympique" },
    { value: 2, label: "Centres d'entraînement — INSEP & Blagnac BC" },
    { value: 2028, label: "Objectif Los Angeles" },
  ] as StatEntry[],
};

export const vision = {
  kicker: "Ma vision",
  title: "Une notoriété au service d'une cause plus grande",
  paragraphs: [
    "Pour Billal, la médaille n'est pas une fin en soi mais un point de départ. Il veut mettre sa notoriété au service de quelque chose de plus grand que lui : montrer aux jeunes qu'un rêve d'enfant, porté par le travail et la famille, peut mener jusqu'au podium olympique.",
    "Devenir un exemple, transmettre les valeurs du sport — le respect, la rigueur, la persévérance — et donner envie à la génération qui vient de croire en ses propres ambitions.",
  ],
  quote: "Je veux être un exemple pour mon pays et notamment pour les jeunes.",
};

export type Partner = {
  name: string;
  logoSrc: string;
  href?: string;
};

export const partners = {
  kicker: "Partenaires",
  title: "Un sponsor, une équipe, une famille",
  paragraphs: [
    "Derrière chaque victoire, il y a un entourage : une famille, des entraîneurs, un club, des partenaires qui croient au projet et l'accompagnent au quotidien.",
    "Billal considère chaque partenaire comme un membre de son équipe — une relation de confiance, construite sur le long terme, dans un seul objectif commun.",
  ],
  quote: "Travailler ensemble sera la réussite.",
  // Grille de logos partenaires — vide pour le moment, prête à être remplie.
  // Ajoutez vos partenaires ici, ex :
  // { name: "Nom du partenaire", logoSrc: "/partners/logo.png", href: "https://..." }
  logos: [] as Partner[],
};

export const contact = {
  kicker: "Contact",
  title: "Traçons ensemble les lignes de demain",
  quote:
    "Rencontrons-nous et traçons ensemble les lignes de notre collaboration.",
  email: "bennamabr@yahoo.com",
  phone: "06 81 45 24 13",
  phoneHref: "+33681452413",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Billal Bennama — ROAD TO 2027. Tous droits réservés.`,
};
