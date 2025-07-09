"use server"

import { PostDto } from "../_dto/dto"

type CreatePostProps = {
  formState: PostDto
  errors: string[]
}

export async function createPostAction(
  preState: CreatePostProps,
  formData: FormData
): Promise<CreatePostProps> {
  const title = formData.get("title")?.toString() || ""

  return {
    formState: { ...preState.formState, title },
    errors: []
  }
}
