import { Newspaper } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { newsWithFormattedDate } from "@/lib/data/news";
import { getMatches } from "@/lib/supabase/matches";

export async function NewsFeed() {
  const matches = await getMatches();
  const items = newsWithFormattedDate(matches);
  if (items.length === 0) return null;

  return (
    <section className="bg-offwhite-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading kicker="À la une" title="Dernières actualités" tone="light" />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <GlassCard className="h-full">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-navy-900/8">
                  <Newspaper className="size-5 text-navy-900" aria-hidden />
                </div>
                <p className="text-xs font-medium tracking-wide text-navy-900/50 uppercase">{item.formattedDate}</p>
                <h3 className="mt-2 font-heading text-xl tracking-wide text-navy-950 uppercase">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-900/70">{item.excerpt}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 text-center">
          <Button href="/calendrier" variant="ghost">
            Voir tous les résultats
          </Button>
        </div>
      </div>
    </section>
  );
}
