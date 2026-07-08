import { createSupabaseServerClient } from "@/lib/supabase/server";
import { PlayerForm } from "@/components/admin/PlayerForm";
import { PlayerRow } from "@/components/admin/PlayerRow";
import { createPlayer } from "./actions";

export default async function AdminPlayersPage() {
  const supabase = await createSupabaseServerClient();

  const [{ data: teams, error: teamsError }, { data: players, error: playersError }] = await Promise.all([
    supabase.from("teams").select("id, name").order("name"),
    supabase.from("players").select("*, teams(name)").order("name"),
  ]);

  const rows = (players ?? []).map((p) => ({ ...p, teamName: p.teams?.name ?? "?" }));

  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Joueurs & staff</h1>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">Ajouter un joueur</h2>
        <div className="mt-4">
          <PlayerForm action={createPlayer} teams={teams ?? []} submitLabel="Ajouter" />
        </div>
      </div>

      <div className="mt-10 space-y-3">
        {teamsError ? <p className="text-sm text-red-600">Erreur équipes : {teamsError.message}</p> : null}
        {playersError ? <p className="text-sm text-red-600">Erreur joueurs : {playersError.message}</p> : null}
        {rows.map((player) => (
          <PlayerRow key={player.id} player={player} teams={teams ?? []} />
        ))}
      </div>
    </div>
  );
}
