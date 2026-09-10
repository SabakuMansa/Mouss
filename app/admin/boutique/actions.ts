"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Envoie le fichier choisi dans le formulaire vers le stockage Supabase et
 * renvoie son adresse publique. Si aucun fichier n'est choisi, on retombe sur
 * l'URL saisie à la main, sinon sur `null`.
 */
async function resolveImageUrl(formData: FormData): Promise<string | null> {
  const supabase = await createSupabaseServerClient();
  const file = formData.get("image_file") as File | null;

  if (file && file.size > 0) {
    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("photos").upload(fileName, file);
    if (uploadError) throw new Error(uploadError.message);
    return supabase.storage.from("photos").getPublicUrl(fileName).data.publicUrl;
  }

  return String(formData.get("image_url") || "") || null;
}

/** Rafraîchit l'admin et la page publique après toute modification. */
function refreshShopPages() {
  revalidatePath("/admin/boutique");
  revalidatePath("/boutique");
}

export async function createProduct(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const imageUrl = await resolveImageUrl(formData);

  const { error } = await supabase.from("products").insert({
    name: String(formData.get("name")),
    description: String(formData.get("description") || "") || null,
    price: String(formData.get("price")),
    image_url: imageUrl,
  });

  if (error) throw new Error(error.message);
  refreshShopPages();
}

/**
 * Modifie un article existant : nom, prix et description.
 * La photo n'est remplacée que si une nouvelle est fournie — sinon l'ancienne
 * est conservée, pour qu'on puisse corriger un prix sans réenvoyer l'image.
 */
export async function updateProduct(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const imageUrl = await resolveImageUrl(formData);

  const fields: Record<string, string | null> = {
    name: String(formData.get("name")),
    description: String(formData.get("description") || "") || null,
    price: String(formData.get("price")),
  };
  if (imageUrl) fields.image_url = imageUrl;

  const { error } = await supabase.from("products").update(fields).eq("id", id);
  if (error) throw new Error(error.message);
  refreshShopPages();
}

/** Remplace uniquement la photo, depuis le bouton rapide de la liste. */
export async function updateProductImage(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const imageUrl = await resolveImageUrl(formData);
  if (!imageUrl) return;

  const { error } = await supabase.from("products").update({ image_url: imageUrl }).eq("id", id);
  if (error) throw new Error(error.message);
  refreshShopPages();
}

export async function deleteProduct(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
  refreshShopPages();
}
