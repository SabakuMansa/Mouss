interface Team {
  id: string;
  name: string;
}

interface PlayerFormValues {
  team_id?: string;
  name?: string;
  position?: string | null;
  height_cm?: string | null;
  weight_kg?: string | null;
  photo_url?: string | null;
}

export function PlayerForm({
  action,
  teams,
  defaultValues,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  teams: Team[];
  defaultValues?: PlayerFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="grid gap-3 sm:grid-cols-2">
      <label className="text-sm font-medium text-navy-900">
        Équipe
        <select
          name="team_id"
          required
          defaultValue={defaultValues?.team_id}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        >
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-navy-900">
        Nom
        <input
          name="name"
          required
          defaultValue={defaultValues?.name}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Poste (ex: Quarterbacks, Oline...) ou rôle pour un coach
        <input
          name="position"
          defaultValue={defaultValues?.position ?? ""}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Photo (URL, optionnel)
        <input
          name="photo_url"
          defaultValue={defaultValues?.photo_url ?? ""}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Taille (optionnel, ex: 1m80)
        <input
          name="height_cm"
          defaultValue={defaultValues?.height_cm ?? ""}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Poids (optionnel, ex: 80 kg)
        <input
          name="weight_kg"
          defaultValue={defaultValues?.weight_kg ?? ""}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2 text-sm font-semibold tracking-wide text-navy-950 uppercase"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
