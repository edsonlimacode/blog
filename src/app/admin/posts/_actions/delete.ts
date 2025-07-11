"use server"

import { postRepository } from "@/repositories/PostRepository"
import { revalidatePath } from "next/cache"

export async function deletePostAction(id: string) {
  //TODO: verifiar se o usuario esta logado

  try {
    await postRepository.delete(id)

    revalidatePath("/admin/posts")
    return {
      data: ["Post deletado com sucesso"]
    }
  } catch (error: any) {
    if (error instanceof Error) {
      return {
        error: [error.message]
      }
    }
    return {
      error: ["Erro desconhecido"]
    }
  }
}
