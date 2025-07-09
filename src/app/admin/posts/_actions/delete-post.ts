"use server"

import { db } from "@/db/drizzle"
import { postsTable } from "@/db/drizzle/schemas"
import { postRepositoryDb } from "@/repositories/PostRepositoryDb"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function deletePostAction(id: string) {
  //TODO: verifiar se o usuario esta logado

  const post = await postRepositoryDb.findById(id)

  if (!post) {
    return {
      error: "Post não encontrado"
    }
  }

  await db.delete(postsTable).where(eq(postsTable.id, id))

  revalidatePath("/admin/posts")
  revalidatePath("/")

  return {
    data: "post deletado com successo"
  }
}
