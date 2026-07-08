import type { LucideIcon } from "lucide-react";
import type { Advantage } from "@/lib/types";

export function AdvantageCard({ advantage, icon: Icon }: { advantage: Advantage; icon?: LucideIcon }) {
  return (
    <div className="rounded-2xl bg-navy-900/60 p-6 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1">
      {Icon ? (
        <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-gold-400/15">
          <Icon className="size-5 text-gold-400" aria-hidden />
        </div>
      ) : null}
      <h4 className="font-heading text-lg tracking-wide text-gold-400 uppercase">{advantage.title}</h4>
      <p className="mt-2 text-sm text-white/70">{advantage.description}</p>
    </div>
  );
}
