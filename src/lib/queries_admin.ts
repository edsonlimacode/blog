import { postRepository } from "@/repositories/PostRepository"
import { unstable_cache } from "next/cache"

export const getAllPosts = unstable_cache(
  async () => {
    return await postRepository.findAll()
  },
  ["posts"],
  {
    tags: ["posts-admin"]
  }
)

export const getPostById = (id: string) => {
  return unstable_cache(
    async (id: string) => {
      return await postRepository.findById(id)
    },
    ["post"],
    {
      tags: [`post-admin-${id}`]
    }
  )(id)
}
