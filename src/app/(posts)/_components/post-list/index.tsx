import { postRepository } from "@/repositories/PostRepositoryImpl"
import { PostCard } from "../post-card"
import { getAllPublicPosts } from "@/lib/queries"

export async function PostList() {
  const posts = await getAllPublicPosts()

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {posts.slice(2).map((post) => (
        <PostCard
          key={post.id}
          imageCover={post.coverImageUrl}
          title={post.title}
          date={post.createdAt}
          content={post.content}
        />
      ))}
    </section>
  )
}
