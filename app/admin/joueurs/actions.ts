"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function createPlayer(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.from("players").insert({
    team_id: String(formData.get("team_id")),
    name: String(formData.get("name")),
    position: String(formData.get("position") || "") || null,
    height_cm: String(formData.get("height_cm") || "") || null,
    weight_kg: String(formData.get("weight_kg") || "") || null,
    photo_url: String(formData.get("photo_url") || "") || null,
  });

  if (error) throw new Error(error.message);
  revalidatePath("/admin/joueurs");
  revalidatePath("/equipes");
}

export async function updatePlayer(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("players")
    .update({
      team_id: String(formData.get("team_id")),
      name: String(formData.get("name")),
      position: String(formData.get("position") || "") || null,
      height_cm: String(formData.get("height_cm") || "") || null,
      weight_kg: String(formData.get("weight_kg") || "") || null,
      photo_url: String(formData.get("photo_url") || "") || null,
    })
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/joueurs");
  revalidatePath("/equipes");
}

export async function deletePlayer(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("players").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/joueurs");
  revalidatePath("/equipes");
}
