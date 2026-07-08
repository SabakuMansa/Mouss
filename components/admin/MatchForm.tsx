interface MatchFormValues {
  opponent?: string;
  opponent_logo_url?: string | null;
  date_time?: string;
  venue?: string;
  is_home?: boolean;
  result?: string | null;
}

/** Reusable create/edit form for a match — fields match the `matches` table columns 1:1. */
export function MatchForm({
  action,
  defaultValues,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  defaultValues?: MatchFormValues;
  submitLabel: string;
}) {
  // datetime-local inputs need "YYYY-MM-DDTHH:mm", Postgres gives back an ISO string.
  const dateTimeLocal = defaultValues?.date_time ? defaultValues.date_time.slice(0, 16) : "";

  return (
    <form action={action} className="grid gap-3 sm:grid-cols-2">
      <label className="text-sm font-medium text-navy-900">
        Adversaire
        <input
          name="opponent"
          required
          defaultValue={defaultValues?.opponent}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Logo adversaire (URL, optionnel)
        <input
          name="opponent_logo_url"
          defaultValue={defaultValues?.opponent_logo_url ?? ""}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Date et heure
        <input
          type="datetime-local"
          name="date_time"
          required
          defaultValue={dateTimeLocal}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Lieu
        <input
          name="venue"
          required
          defaultValue={defaultValues?.venue}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-navy-900">
        Résultat (optionnel, ex: "24 - 6")
        <input
          name="result"
          defaultValue={defaultValues?.result ?? ""}
          className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
        />
      </label>
      <label className="mt-6 flex items-center gap-2 text-sm font-medium text-navy-900">
        <input type="checkbox" name="is_home" defaultChecked={defaultValues?.is_home ?? true} />
        Match à domicile
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
