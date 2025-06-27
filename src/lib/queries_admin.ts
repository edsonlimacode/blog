import { postRepositoryDb } from "@/repositories/PostRepositoryDb"
import { unstable_cache } from "next/cache"

export const getAllPosts = unstable_cache(
  async () => {
    return await postRepositoryDb.findAll()
  },
  ["posts"],
  {
    tags: ["posts-admin"]
  }
)

export const getPostById = (id: string) => {
  return unstable_cache(
    async (id: string) => {
      return await postRepositoryDb.findById(id)
    },
    ["post"],
    {
      tags: [`post-admin-${id}`]
    }
  )(id)
}
