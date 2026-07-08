import { Users, Flame, GraduationCap, Heart, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";
import { values } from "@/lib/data/values";

const ICONS: Record<string, LucideIcon> = {
  "Esprit d'équipe": Users,
  Engagement: Flame,
  Formation: GraduationCap,
  Convivialité: Heart,
};

export function ValuesGrid() {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value) => {
        const Icon = ICONS[value.title] ?? Heart;
        return (
          <StaggerItem key={value.title}>
            <GlassCard className="h-full text-center">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-navy-950/8">
                <Icon className="size-6 text-navy-900" aria-hidden />
              </div>
              <h3 className="font-heading text-lg tracking-wide text-navy-950 uppercase">{value.title}</h3>
              <p className="mt-2 text-sm text-navy-900/70">{value.description}</p>
            </GlassCard>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
