import { getPostByslug } from "@/lib/queries"
import { PostCard } from "../../_components/post-card"

export default async function SinglePost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

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
