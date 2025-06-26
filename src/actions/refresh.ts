"use server"

import { revalidatePath, revalidateTag } from "next/cache"

export async function refreshData() {
  revalidateTag("posts")
  revalidateTag("post-como-a-escrita-pode-mudar-sua-carreira")
}
