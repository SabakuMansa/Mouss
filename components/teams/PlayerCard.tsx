import Image from "next/image";
import { PlayerPlaceholder } from "@/components/ui/PlayerPlaceholder";
import type { Player } from "@/lib/types";

export function PlayerCard({ player, subtitle }: { player: Player; subtitle?: string }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-navy-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden">
        {player.photo ? (
          <Image
            src={player.photo}
            alt={`${player.name}${subtitle ? ` — ${subtitle}` : ""}`}
            fill
            sizes="(min-width: 1024px) 220px, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PlayerPlaceholder name={player.name} className="rounded-none" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading text-base tracking-wide text-navy-950 uppercase">{player.name}</h3>
        {player.heightCm || player.weightKg ? (
          <ul className="mt-2 space-y-1 text-xs text-navy-900/60">
            {player.heightCm ? (
              <li>
                <span className="font-semibold text-navy-900/80">Taille :</span> {player.heightCm}
              </li>
            ) : null}
            {player.weightKg ? (
              <li>
                <span className="font-semibold text-navy-900/80">Poids :</span> {player.weightKg}
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
