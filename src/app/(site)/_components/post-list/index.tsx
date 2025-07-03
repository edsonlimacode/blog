import { getAllPublicPosts } from "@/lib/queries_site"
import { PostCard } from "../post-card"

export async function PostList() {
  const posts = await getAllPublicPosts()

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {posts &&
        posts
          .slice(2)
          .map((post) => (
            <PostCard
              key={post.id}
              imageCover={post.coverImageUrl}
              title={post.title}
              slug={post.slug}
              date={post.createdAt.toString()}
              content={post.content}
            />
          ))}
    </section>
  )
}
