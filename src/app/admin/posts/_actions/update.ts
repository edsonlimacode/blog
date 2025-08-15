"use server"
import { postRepository } from "@/repositories/PostRepository"
import { revalidatePath } from "next/cache"
import { makeSlugFromText } from "@/utils/generate-slug"
import { PostFormData } from "../_components/post-form/post-use-form-hook"
import { getUserLoginSession } from "@/utils/auth/login-manager"

type UpdatePostAction = {
  success?: string
  error?: string
}

export async function updatePostAction(
  id: string,
  formData: PostFormData
): Promise<UpdatePostAction> {
  const isAuthenticated = await getUserLoginSession()

  if (!isAuthenticated) {
    return {
      error: "Faça login novamente em outra aba para continuar"
    }
  }

  try {
    const updatePost = {
      ...formData,
      slug: makeSlugFromText(formData.title),
      updatedAt: new Date()
    }

    await postRepository.update(id, updatePost)

    revalidatePath("/admin/posts")
    return {
      success: "Post atualizado com sucesso"
    }
  } catch (error: any) {
    if (error instanceof Error) {
      return {
        error: error.message
      }
    }

    return {
      error: "Erro desconhecido"
    }
  }
}
