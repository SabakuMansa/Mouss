import { Trophy } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";
import { honors } from "@/lib/data/honors";

export function HonorsBoard() {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2">
      {honors.map((group) => (
        <StaggerItem key={group.category}>
          <GlassCard className="h-full">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-gold-400/15">
                <Trophy className="size-5 text-gold-500" aria-hidden />
              </div>
              <h3 className="font-heading text-xl tracking-wide text-navy-950 uppercase">{group.category}</h3>
            </div>
            <ul className="space-y-2 text-sm text-navy-900/75">
              {group.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
