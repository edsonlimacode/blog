import { PostModal } from "@/model/PostModal"

export type PostDto = Omit<PostModal, "updatedAt">

export const makePartialpost = (post?: Partial<PostModal>): PostDto => {
  return {
    id: post?.id || null,
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

export const postModelToDto = (post: PostModal): PostDto => {
  return makePartialpost(post)
}
