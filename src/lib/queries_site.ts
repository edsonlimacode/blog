import { postRepositoryDb } from "@/repositories/PostRepositoryDb"
import { unstable_cache } from "next/cache"
import { cache } from "react"

export const getAllPublicPosts = cache(
  unstable_cache(
    async () => {
      return await postRepositoryDb.findAllPublic()
    },
    ["posts"],
    {
      tags: ["posts"]
    }
  )
)

export const getPostByslug = cache((slug: string) => {
  return unstable_cache(
    async (slug: string) => {
      return await postRepositoryDb.findBySlug(slug)
    },
    [`post-${slug}`],
    {
      tags: [`post-${slug}`]
    }
  )(slug)
})
