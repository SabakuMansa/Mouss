"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function createMatch(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.from("matches").insert({
    opponent: String(formData.get("opponent")),
    opponent_logo_url: String(formData.get("opponent_logo_url") || "") || null,
    date_time: String(formData.get("date_time")),
    venue: String(formData.get("venue")),
    is_home: formData.get("is_home") === "on",
    result: String(formData.get("result") || "") || null,
  });

  if (error) throw new Error(error.message);
  revalidatePath("/admin/matchs");
  revalidatePath("/calendrier");
  revalidatePath("/");
}

export async function updateMatch(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("matches")
    .update({
      opponent: String(formData.get("opponent")),
      opponent_logo_url: String(formData.get("opponent_logo_url") || "") || null,
      date_time: String(formData.get("date_time")),
      venue: String(formData.get("venue")),
      is_home: formData.get("is_home") === "on",
      result: String(formData.get("result") || "") || null,
    })
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/matchs");
  revalidatePath("/calendrier");
  revalidatePath("/");
}

export async function deleteMatch(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("matches").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/matchs");
  revalidatePath("/calendrier");
  revalidatePath("/");
}
