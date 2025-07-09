import { getAllPublicPosts } from "@/lib/queries_site"
import { PostCard, PostContent, PostCover } from "../post-card"

export async function PostList() {
  const posts = await getAllPublicPosts()

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {posts &&
        posts.slice(2).map((post) => (
          <PostCard key={post.id}>
            <PostCover
              width={500}
              height={500}
              className="w-full rounded-lg object-cover"
              priority
              quality={100}
              alt={post.title}
              src={post.coverImageUrl}
            />
            <PostContent
              slug={post.slug}
              title={post.title}
              date={post.createdAt.toString()}
              content={post.content}
            />
          </PostCard>
        ))}
    </section>
  )
}
