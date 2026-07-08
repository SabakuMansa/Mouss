import type { Advantage, RecruitProfile } from "@/lib/types";

/** Verbatim from NOUS REJOINDRE.html. */
export const recruitProfiles: RecruitProfile[] = [
  { title: "Joueurs", description: "Débutant ou expérimenté, rejoins nos sections U15, U18 ou Seniors." },
  { title: "Coachs", description: "Encadre nos équipes et participe au développement du club." },
  { title: "Arbitres", description: "Découvre une autre façon de vivre le football américain." },
  { title: "Bénévoles", description: "Accompagne nos événements et soutiens l'organisation." },
];

export const advantages: Advantage[] = [
  { title: "Un collectif soudé", description: "Des valeurs fortes : solidarité, respect et dépassement de soi." },
  {
    title: "Formation et encadrement",
    description: "Tu n'as jamais joué ? Aucun problème, on t'accompagne dès le début.",
  },
  { title: "Des ambitions", description: "Le club grandit vite et vise toujours plus haut." },
  {
    title: "Une ambiance unique",
    description: "Vivre le foot US, c'est aussi partager des moments forts en dehors du terrain.",
  },
];
