"use server"

import { getZodErrorMessages } from "@/utils/get-zod-errors-messages"
import { PostCreateSchema } from "../_components/post-form/_validations/validations"
import { makePartialpost, PostDto } from "../_dto/dto"
import { makeSlugFromText } from "@/utils/generate-slug"
import { db } from "@/db/drizzle"
import { postsTable } from "@/db/drizzle/schemas"
import { revalidatePath } from "next/cache"

type CreatePostProps = {
  formState: PostDto
  errors: string[]
}

export async function createPostAction(
  preState: CreatePostProps,
  formData: FormData
): Promise<CreatePostProps> {
  if (!(formData instanceof FormData)) {
    return {
      formState: preState.formState,
      errors: ["Dados inválidos"]
    }
  }

  const formDataToObj = Object.fromEntries(formData.entries())
  const zodParseObj = PostCreateSchema.safeParse(formDataToObj)

  if (!zodParseObj.success) {
    const errors = getZodErrorMessages(zodParseObj.error.format())
    return {
      formState: makePartialpost(formDataToObj),
      errors
    }
  }

  const postData = zodParseObj.data
  const newPost = {
    ...postData,
    slug: makeSlugFromText(postData.title),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  await db.insert(postsTable).values(newPost)
  revalidatePath("/admin/posts")

  return {
    formState: newPost,
    errors: []
  }
}
