import { getAllPublicPosts } from "@/lib/queries_site"
import { PostCard } from "../post-card"
import { formatDate } from "@/utils/format-date"

export async function Postsummary() {
  const posts = await getAllPublicPosts()

  const postSummaryFirst = posts[0]
  const postSummarySecond = posts[1]

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <PostCard
        isSinglePost
        slug={postSummaryFirst.slug}
        imageCover={postSummaryFirst.coverImageUrl}
        title={postSummaryFirst.title}
        date={postSummaryFirst.createdAt.toString()}
        content={postSummaryFirst.content}
      />
      <PostCard
        isSinglePost
        slug={postSummarySecond.slug}
        imageCover={postSummarySecond.coverImageUrl}
        title={postSummarySecond.title}
        date={postSummarySecond.createdAt.toString()}
        content={postSummarySecond.content}
      />
    </section>
  )
}
