import { getAllPublicPosts } from "@/lib/queries_site"
import { PostCard, PostContent, PostCover } from "../post-card"
export async function Postsummary() {
  const posts = await getAllPublicPosts()

  const postSummaryFirst = posts[0]
  const postSummarySecond = posts[1]

  if (posts.length <= 0) {
    return null
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <PostCard>
        <PostCover
          width={500}
          height={500}
          className="h-[350px] w-full rounded-lg object-cover"
          priority
          quality={100}
          alt={postSummaryFirst.title}
          src={postSummaryFirst.coverImageUrl}
        />
        <PostContent
          slug={postSummaryFirst.slug}
          title={postSummaryFirst.title}
          date={postSummaryFirst.createdAt.toString()}
          content={postSummaryFirst.content}
        />
      </PostCard>

      <PostCard>
        <PostCover
          width={500}
          height={500}
          className="h-[350px] w-full rounded-lg object-cover"
          priority
          quality={100}
          alt={postSummarySecond.title}
          src={postSummarySecond.coverImageUrl}
        />
        <PostContent
          slug={postSummarySecond.slug}
          title={postSummarySecond.title}
          date={postSummarySecond.createdAt.toString()}
          content={postSummarySecond.content}
        />
      </PostCard>
    </section>
  )
}
