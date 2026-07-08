import { createSupabaseServerClient } from "@/lib/supabase/server";
import { MatchForm } from "@/components/admin/MatchForm";
import { MatchRow } from "@/components/admin/MatchRow";
import { createMatch } from "./actions";

export default async function AdminMatchesPage() {
  const supabase = await createSupabaseServerClient();
  const { data: matches, error } = await supabase
    .from("matches")
    .select("*")
    .order("date_time", { ascending: true });

  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Matchs & résultats</h1>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">Ajouter un match</h2>
        <div className="mt-4">
          <MatchForm action={createMatch} submitLabel="Ajouter" />
        </div>
      </div>

      <div className="mt-10 space-y-4">
        {error ? <p className="text-sm text-red-600">Erreur : {error.message}</p> : null}
        {matches?.length === 0 ? <p className="text-sm text-navy-900/60">Aucun match pour l&apos;instant.</p> : null}
        {matches?.map((match) => <MatchRow key={match.id} match={match} />)}
      </div>
    </div>
  );
}
