"use client";

import { useSyncExternalStore } from "react";

/** Le nom de domaine ne change jamais pendant la vie de la page : rien à écouter. */
const subscribeToNothing = () => () => {};

/**
 * Twitch impose un paramètre `parent` correspondant exactement au domaine qui
 * affiche le lecteur (sécurité de leur côté). On le lit donc au moment du rendu
 * plutôt que de le figer dans le code : le lecteur fonctionne ainsi en local,
 * sur chaque URL de preview Vercel et sur le vrai domaine, sans configuration.
 *
 * `useSyncExternalStore` renvoie `null` côté serveur et le vrai domaine côté
 * navigateur — c'est la façon prévue par React de lire une valeur propre au
 * navigateur sans provoquer d'écart entre le HTML envoyé et celui affiché.
 */
export function TwitchEmbed({ channel }: { channel: string }) {
  const hostname = useSyncExternalStore(
    subscribeToNothing,
    () => window.location.hostname,
    () => null
  );

  if (!hostname) {
    return <div className="aspect-video w-full animate-pulse rounded-2xl bg-navy-950/10" />;
  }

  return (
    <iframe
      src={`https://player.twitch.tv/?channel=${channel}&parent=${hostname}&muted=true`}
      allowFullScreen
      className="aspect-video w-full rounded-2xl"
      title={`Diffusion en direct de ${channel} sur Twitch`}
    />
  );
}
