import { postRepositoryDb } from "@/repositories/PostRepositoryDb"
import { unstable_cache } from "next/cache"

export const getAllPublicPosts = unstable_cache(
  async () => {
    return await postRepositoryDb.findAllPublic()
  },
  ["posts"],
  {
    tags: ["posts"]
  }
)

export const getPostById = (id: string) =>
  unstable_cache(
    async (id: string) => {
      return await postRepositoryDb.findById(id)
    },
    ["post"],
    {
      tags: [`post-${id}`]
    }
  )(id)

export const getPostByslug = (slug: string) =>
  unstable_cache(
    async (slug: string) => {
      return await postRepositoryDb.findBySlug(slug)
    },
    ["post"],
    {
      tags: [`post-${slug}`]
    }
  )(slug)
