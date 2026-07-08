import { signIn } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950 px-6">
      <form action={signIn} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="font-heading text-2xl tracking-wide text-navy-950 uppercase">Espace admin</h1>
        <p className="mt-1 text-sm text-navy-900/60">Les Mousquetaires</p>

        {error ? (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        ) : null}

        <label className="mt-6 block text-sm font-medium text-navy-900">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm focus:border-gold-500 focus:outline-none"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-navy-900">
          Mot de passe
          <input
            type="password"
            name="password"
            required
            className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm focus:border-gold-500 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2.5 text-sm font-semibold tracking-wide text-navy-950 uppercase transition-transform hover:-translate-y-0.5"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
