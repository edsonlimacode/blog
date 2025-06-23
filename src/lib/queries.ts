import { postRepository } from "@/repositories/PostRepositoryImpl"
import { cache } from "react"

export const getAllPublicPosts = cache(async () => {
  return await postRepository.findAllPublic()
})
