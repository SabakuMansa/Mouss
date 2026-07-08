"use client";

import { useState } from "react";
import { PlayerForm } from "./PlayerForm";
import { updatePlayer, deletePlayer } from "@/app/admin/joueurs/actions";

interface Team {
  id: string;
  name: string;
}

interface Player {
  id: string;
  team_id: string;
  name: string;
  position: string | null;
  height_cm: string | null;
  weight_kg: string | null;
  photo_url: string | null;
  teamName: string;
}

export function PlayerRow({ player, teams }: { player: Player; teams: Team[] }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <PlayerForm
          teams={teams}
          defaultValues={player}
          submitLabel="Enregistrer"
          action={async (formData) => {
            await updatePlayer(player.id, formData);
            setEditing(false);
          }}
        />
        <button onClick={() => setEditing(false)} className="mt-3 text-sm text-navy-900/60 underline">
          Annuler
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-950/5">
      <div>
        <p className="font-heading tracking-wide text-navy-950 uppercase">{player.name}</p>
        <p className="text-sm text-navy-900/60">
          {player.teamName} {player.position ? `— ${player.position}` : ""}
        </p>
      </div>
      <div className="flex shrink-0 gap-3">
        <button onClick={() => setEditing(true)} className="text-sm font-medium text-navy-900 hover:underline">
          Modifier
        </button>
        <button
          onClick={() => {
            if (confirm(`Supprimer ${player.name} ?`)) deletePlayer(player.id);
          }}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
