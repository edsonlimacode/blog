import { postRepositoryDb } from "@/repositories/PostRepositoryDb"
import { cache } from "react"

export const getAllPublicPosts = cache(async () => {
  return await postRepositoryDb.findAllPublic()
})

export const getPostById = cache(async (id: string) => {
  return await postRepositoryDb.findById(id)
})

export const getPostByslug = cache(async (slug: string) => {
  return await postRepositoryDb.findBySlug(slug)
})
