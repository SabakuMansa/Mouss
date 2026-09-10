import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { MatchCard } from "@/components/schedule/MatchCard";
import { getMatches } from "@/lib/supabase/matches";

export const metadata: Metadata = {
  title: "Calendrier",
  description: "Tous les matchs de la saison 2025-2026 des Mousquetaires : dates, lieux et résultats.",
};

export default async function SchedulePage() {
  const matches = await getMatches();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: matches.map((match, index) => ({
      "@type": "SportsEvent",
      position: index + 1,
      name: `Les Mousquetaires ${match.isHome ? "vs" : "@"} ${match.opponent}`,
      startDate: match.dateTimeIso,
      location: { "@type": "Place", name: match.venue },
      ...(match.result ? { result: match.result } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero image="/images/hero/calendrier.jpg" imageAlt="Match des Mousquetaires" title="Nos matchs" />

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <StaggerItem key={match.id}>
                <MatchCard match={match} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
