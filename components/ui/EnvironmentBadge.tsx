/**
 * Bandeau visuel affiché uniquement hors production (site local ou preview `dev`),
 * pour ne jamais confondre un environnement de test avec le vrai site en ligne.
 * `VERCEL_ENV` vaut "production" sur le vrai site, "preview" sur les branches de
 * test, et n'existe pas du tout en local (`npm run dev`).
 */
export function EnvironmentBadge() {
  const env = process.env.VERCEL_ENV ?? "development";
  if (env === "production") return null;

  const label = env === "preview" ? "Test (dev)" : "Local";

  return (
    <div
      className="pointer-events-none fixed bottom-4 left-4 z-[200] rounded-full bg-red-600 px-4 py-2 text-xs font-bold tracking-wide text-white uppercase shadow-lg"
      title="Environnement de test — pas le site public"
    >
      ⚠ {label} — pas le site public
    </div>
  );
}
