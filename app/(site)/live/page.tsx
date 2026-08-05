import type { Metadata } from "next";
import { ExternalLink, Radio } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TwitchEmbed } from "@/components/live/TwitchEmbed";
import { getSiteSettings } from "@/lib/supabase/settings";

export const metadata: Metadata = {
  title: "Live",
  description: "Suivez les matchs des Mousquetaires en direct sur Twitch.",
};

export default async function LivePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero image="/images/hero/calendrier.jpg" imageAlt="Match des Mousquetaires" kicker="En direct" title="Live" />

      <section className="bg-navy-950 py-24 sm:py-32">
        <Container className="max-w-4xl">
          {settings.twitch_channel ? (
            <>
              <TwitchEmbed channel={settings.twitch_channel} />
              <div className="mt-8 flex flex-col items-center gap-4 text-center">
                <p className="flex items-center gap-2 text-sm text-white/60">
                  <Radio className="size-4 text-gold-400" aria-hidden />
                  Le lecteur reste vide en dehors des diffusions.
                </p>
                <Button href={`https://www.twitch.tv/${settings.twitch_channel}`} variant="secondary" icon={ExternalLink}>
                  Voir sur Twitch
                </Button>
              </div>
            </>
          ) : (
            <p className="text-center text-white/70">Aucune chaîne Twitch configurée pour le moment.</p>
          )}
        </Container>
      </section>
    </>
  );
}
