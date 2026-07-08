"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function createProduct(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const file = formData.get("image_file") as File | null;
  let imageUrl = String(formData.get("image_url") || "") || null;

  if (file && file.size > 0) {
    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("photos").upload(fileName, file);
    if (uploadError) throw new Error(uploadError.message);
    imageUrl = supabase.storage.from("photos").getPublicUrl(fileName).data.publicUrl;
  }

  const { error } = await supabase.from("products").insert({
    name: String(formData.get("name")),
    description: String(formData.get("description") || "") || null,
    price: String(formData.get("price")),
    image_url: imageUrl,
  });

  if (error) throw new Error(error.message);
  revalidatePath("/admin/boutique");
  revalidatePath("/boutique");
}

export async function updateProductImage(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const file = formData.get("image_file") as File | null;
  let imageUrl = String(formData.get("image_url") || "") || null;

  if (file && file.size > 0) {
    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("photos").upload(fileName, file);
    if (uploadError) throw new Error(uploadError.message);
    imageUrl = supabase.storage.from("photos").getPublicUrl(fileName).data.publicUrl;
  }

  if (!imageUrl) return;

  const { error } = await supabase.from("products").update({ image_url: imageUrl }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/boutique");
  revalidatePath("/boutique");
}

export async function deleteProduct(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/boutique");
  revalidatePath("/boutique");
}
