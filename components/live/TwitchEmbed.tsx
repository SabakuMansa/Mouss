"use client";

import { useEffect, useState } from "react";

/**
 * Twitch's embed requires a `parent` param matching the exact hostname it's
 * served from (security requirement on their side) — read at render time
 * instead of hardcoding one domain, so it works on localhost, every Vercel
 * preview URL, and the real domain without extra config.
 */
export function TwitchEmbed({ channel }: { channel: string }) {
  const [hostname, setHostname] = useState<string | null>(null);

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

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
