import { Users, Flame, GraduationCap, Heart, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { values } from "@/lib/data/values";

const ICONS: Record<string, LucideIcon> = {
  "Esprit d'équipe": Users,
  Engagement: Flame,
  Formation: GraduationCap,
  Convivialité: Heart,
};

export function WhyJoin() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(242,183,5,0.12), transparent 40%), radial-gradient(circle at 85% 80%, rgba(242,183,5,0.08), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          kicker="Nos valeurs"
          title="Pourquoi rejoindre les Mousquetaires"
          description="Un collectif construit sur quatre piliers, sur le terrain comme en dehors."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = ICONS[value.title] ?? Heart;
            return (
              <StaggerItem key={value.title}>
                <GlassCard tone="dark" className="h-full">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gold-400/15">
                    <Icon className="size-6 text-gold-400" aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl tracking-wide text-white uppercase">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{value.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-14 text-center">
          <Button href="/a-propos" variant="secondary">
            En savoir plus sur le club
          </Button>
        </div>
      </div>
    </section>
  );
}
