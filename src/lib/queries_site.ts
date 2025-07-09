import { postRepository } from "@/repositories/PostRepository"
import { unstable_cache } from "next/cache"
import { cache } from "react"

export const getAllPublicPosts = cache(
  unstable_cache(
    async () => {
      try {
        return await postRepository.findAllPublic()
      } catch (error) {
        return []
      }
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
      return await postRepository.findBySlug(slug)
    },
    [`post-${slug}`],
    {
      tags: [`post-${slug}`]
    }
  )(slug)
})
