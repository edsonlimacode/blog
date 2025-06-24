import { PostCard } from "@/app/(posts)/_components/post-card"
import { getPostByslug } from "@/lib/queries"

export async function SinglePostContent({ slug }: { slug: string }) {
  const post = await getPostByslug(slug)
  return (
    <PostCard
      isSinglePost
      title={post.title}
      imageCover={post.coverImageUrl}
      content={post.content}
      slug={post.slug}
      date={post.createdAt}
    />
  )
}
