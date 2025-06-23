import { postRepository } from "@/repositories/PostRepositoryImpl"
import { cache } from "react"

export const getAllPublicPosts = cache(async () => {
  return await postRepository.findAllPublic()
})

export const getPostById = cache(async (id: string) => {
  return await postRepository.findById(id)
})

export const getPostByslug = cache(async (slug: string) => {
  return await postRepository.findBySlug(slug)
})
