import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { formatMatchDate, formatMatchTime, matchStatus } from "@/lib/utils";
import type { Match } from "@/lib/types";

export function MatchCard({ match }: { match: Match }) {
  const status = matchStatus(match.dateTimeIso);

  return (
    <GlassCard className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <Badge tone={status === "upcoming" ? "gold" : "past"}>
          {status === "upcoming" ? "À venir" : "Terminé"}
        </Badge>
        <Badge tone="neutral">{match.isHome ? "Domicile" : "Extérieur"}</Badge>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy-950/5">
          {match.opponentLogo ? (
            <Image src={match.opponentLogo} alt={match.opponent} fill className="object-cover" sizes="56px" />
          ) : (
            <span className="font-heading text-lg text-navy-900/40">?</span>
          )}
        </div>
        <div>
          <p className="text-xs font-medium tracking-wide text-navy-900/50 uppercase">
            {match.isHome ? "vs" : "@"}
          </p>
          <h3 className="font-heading text-lg leading-tight tracking-wide text-navy-950 uppercase">
            {match.opponent}
          </h3>
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-navy-900/70">
        <li className="flex items-center gap-2">
          <Clock className="size-4 shrink-0 text-gold-500" />
          {formatMatchDate(match.dateTimeIso)} — {formatMatchTime(match.dateTimeIso)}
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-gold-500" />
          {match.venue}
        </li>
      </ul>

      <div className="mt-auto pt-5">
        {match.result ? (
          <p className="font-heading text-3xl tracking-wide text-navy-950">{match.result}</p>
        ) : (
          <p className="text-sm font-medium text-navy-900/50">Résultat à venir</p>
        )}
      </div>
    </GlassCard>
  );
}
