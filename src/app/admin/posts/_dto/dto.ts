import { PostModal } from "@/model/PostModal"

export type PostDto = Omit<PostModal, "updatedAt">

export const postModelToDto = (post: PostModal): PostDto => {
  return {
    id: post.id || null,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    author: post.author,
    coverImageUrl: post.coverImageUrl,
    published: post.published || null,
    createdAt: post.createdAt
  }
}
