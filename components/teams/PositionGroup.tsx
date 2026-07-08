import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { PlayerCard } from "@/components/teams/PlayerCard";
import type { PositionGroup as PositionGroupType } from "@/lib/types";

export function PositionGroup({ group }: { group: PositionGroupType }) {
  return (
    <div>
      <h3 className="inline-block border-b-2 border-gold-400 pb-1 font-heading text-2xl tracking-wide text-navy-950 uppercase">
        {group.position}
      </h3>
      <Stagger className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {group.players.map((player) => (
          <StaggerItem key={player.name}>
            <PlayerCard player={player} subtitle={group.position} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
