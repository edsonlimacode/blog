import { PostCard } from "@/app/(posts)/_components/post-card"
import { getPostByslug } from "@/lib/queries"

export async function SinglePostContent({ slug }: { slug: string }) {
  const post = await getPostByslug(slug)
  return (
    <div className="prose lg:prose-xl prose-a:text-blue-500 prose-a:hover:text-blue-600 prose-a:hover:underline prose-a:no-underline prose-img:mx-auto prose-img:rounded-lg w-full max-w-none">
      <PostCard
        isSinglePost
        title={post.title}
        imageCover={post.coverImageUrl}
        content={post.content}
        slug={post.slug}
        date={post.createdAt}
      />
    </div>
  )
}
