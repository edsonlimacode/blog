"use server"
import { makeSlugFromText } from "@/utils/generate-slug"
import { postRepository } from "@/repositories/PostRepository"
import { PostFormData } from "../_components/post-form/post-use-form-hook"
import { getUserLoginSession } from "@/utils/auth/login-manager"

type CreatePostAction = {
  success?: string
  error?: string
}

export async function createPostAction(
  formData: PostFormData
): Promise<CreatePostAction> {
  const isAuthenticated = await getUserLoginSession()

  if (!isAuthenticated) {
    return {
      error: "Faça login novamente em outra aba para continuar"
    }
  }

  const newPost = {
    ...formData,
    slug: makeSlugFromText(formData.title),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  try {
    await postRepository.create(newPost)

    return {
      success: "Post criado com sucesso"
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
