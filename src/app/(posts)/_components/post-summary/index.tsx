import { getAllPublicPosts } from "@/lib/queries"
import { PostCard } from "../post-card"

export async function Postsummary() {
  const posts = await getAllPublicPosts()

  const postSummaryFirst = posts[0]
  const postSummarySecond = posts[1]

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <PostCard
        imageCover={postSummaryFirst.coverImageUrl}
        title={postSummaryFirst.title}
        date={postSummaryFirst.createdAt}
        content={postSummaryFirst.content}
      />
      <PostCard
        imageCover={postSummarySecond.coverImageUrl}
        title={postSummarySecond.title}
        date={postSummarySecond.createdAt}
        content={postSummarySecond.content}
      />
    </section>
  )
}
