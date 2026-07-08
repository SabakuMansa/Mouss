"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function addPhoto(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const file = formData.get("file") as File | null;
  const caption = String(formData.get("caption") || "") || null;

  let imageUrl = String(formData.get("image_url") || "");

  if (file && file.size > 0) {
    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("photos").upload(fileName, file);
    if (uploadError) throw new Error(uploadError.message);
    const { data } = supabase.storage.from("photos").getPublicUrl(fileName);
    imageUrl = data.publicUrl;
  }

  if (!imageUrl) throw new Error("Choisissez un fichier ou renseignez une URL d'image.");

  const { error } = await supabase.from("photos").insert({ image_url: imageUrl, caption });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/galerie");
  revalidatePath("/galerie");
}

export async function deletePhoto(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("photos").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/galerie");
  revalidatePath("/galerie");
}
