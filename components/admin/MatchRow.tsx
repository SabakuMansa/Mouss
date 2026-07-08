"use client";

import { useState } from "react";
import { MatchForm } from "./MatchForm";
import { updateMatch, deleteMatch } from "@/app/admin/matchs/actions";

interface Match {
  id: string;
  opponent: string;
  opponent_logo_url: string | null;
  date_time: string;
  venue: string;
  is_home: boolean;
  result: string | null;
}

export function MatchRow({ match }: { match: Match }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <MatchForm
          defaultValues={match}
          submitLabel="Enregistrer"
          action={async (formData) => {
            await updateMatch(match.id, formData);
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
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-950/5">
      <div>
        <p className="font-heading tracking-wide text-navy-950 uppercase">
          {match.is_home ? "vs" : "@"} {match.opponent}
        </p>
        <p className="text-sm text-navy-900/60">
          {new Date(match.date_time).toLocaleString("fr-FR")} — {match.venue}
        </p>
        {match.result ? <p className="mt-1 text-sm font-semibold text-navy-950">{match.result}</p> : null}
      </div>
      <div className="flex shrink-0 gap-3">
        <button onClick={() => setEditing(true)} className="text-sm font-medium text-navy-900 hover:underline">
          Modifier
        </button>
        <button
          onClick={() => {
            if (confirm(`Supprimer le match contre ${match.opponent} ?`)) deleteMatch(match.id);
          }}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
