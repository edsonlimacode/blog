"use server"
import { getZodErrorMessages } from "@/utils/get-zod-errors-messages"
import { PostUpdateSchema } from "../_components/post-form/_validations/validations"
import { makePartialpost, PostDto } from "../_dto/dto"
import { postRepository } from "@/repositories/PostRepository"
import { revalidatePath } from "next/cache"

type UpdatePostProps = {
  formState: PostDto
  errors: string[]
}

export async function updatePostAction(
  preState: UpdatePostProps,
  formData: FormData
): Promise<UpdatePostProps> {
  if (!(formData instanceof FormData)) {
    return {
      formState: preState.formState,
      errors: ["Dados inválidos"]
    }
  }

  const formDataToObj = Object.fromEntries(formData.entries())
  const zodParseObj = PostUpdateSchema.safeParse(formDataToObj)

  if (!zodParseObj.success) {
    const errors = getZodErrorMessages(zodParseObj.error.format())
    return {
      formState: makePartialpost(formDataToObj),
      errors
    }
  }

  const id = formData.get("id")?.toString() || ""
  const postData = zodParseObj.data
  const newPost = {
    ...postData
  }

  let post
  try {
    post = await postRepository.update(id, newPost)

    revalidatePath("/admin/posts")
    return {
      formState: makePartialpost(post),
      errors: []
    }
  } catch (error: any) {
    if (error instanceof Error) {
      return {
        formState: makePartialpost(formDataToObj),
        errors: [error.message]
      }
    }

    return {
      formState: makePartialpost(formDataToObj),
      errors: ["Erro desconhecido"]
    }
  }
}
