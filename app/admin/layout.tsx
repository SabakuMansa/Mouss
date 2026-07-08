import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { signOut } from "./login/actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Pas d'utilisateur connecté = page de login elle-même (le middleware gère déjà
  // la redirection pour les autres pages /admin/*), donc pas de barre admin ici.
  if (!user) return children;

  return (
    <div className="min-h-screen bg-offwhite-50">
      <header className="flex items-center justify-between border-b border-navy-950/10 bg-navy-950 px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-wordmark text-white uppercase">
            Admin Mousquetaires
          </Link>
          <nav className="hidden gap-4 text-sm text-white/70 sm:flex">
            <Link href="/admin/matchs" className="hover:text-white">
              Matchs
            </Link>
            <Link href="/admin/joueurs" className="hover:text-white">
              Joueurs
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-white/50 sm:inline">{user.email}</span>
          <form action={signOut}>
            <button type="submit" className="text-sm font-medium text-gold-400 hover:text-gold-300">
              Déconnexion
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
