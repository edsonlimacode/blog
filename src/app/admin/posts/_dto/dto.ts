import { PostModel } from "@/model/PostModal"

export type PostDto = Omit<PostModel, "updatedAt">

export const makePartialpost = (post?: Partial<PostModel>): PostDto => {
  return {
    id: post?.id || "",
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    author: post?.author || "",
    coverImageUrl: post?.coverImageUrl || "",
    published: post?.published || false,
    createdAt: post?.createdAt || new Date()
  }
}

export const postModelToDto = (post: PostModel): PostDto => {
  return makePartialpost(post)
}
