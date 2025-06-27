import { getPostByslug } from "@/lib/queries_site"
import { Metadata } from "next"
import { SinglePostContent } from "./_components/single-post-content"
import { Suspense } from "react"
import { SinglePostSkeleton } from "./_components/single-post-content/single-post-skeleton"

export const dynamic = "force-static"

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const post = await getPostByslug(slug)
  return {
    title: post.title,
    description: post.excerpt
  }
}

export default async function SinglePost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <Suspense fallback={<SinglePostSkeleton />}>
      <SinglePostContent slug={slug} />
    </Suspense>
  )
}
