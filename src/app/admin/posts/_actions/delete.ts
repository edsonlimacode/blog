"use server"

import { postRepository } from "@/repositories/PostRepository"
import { getUserLoginSession } from "@/utils/auth/login-manager"
import { revalidatePath } from "next/cache"

export async function deletePostAction(id: string) {
  const isAuthenticated = await getUserLoginSession()

  if (!isAuthenticated) {
    return {
      error: "Faça login novamente em outra aba para continuar"
    }
  }

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
