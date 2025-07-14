import { Suspense } from "react"
import { PostsList } from "./_components/posts-list"
import { Spinner } from "@/components/spinner"

export const dynamic = "force-dynamic"

export default function Posts() {
  return (
    <Suspense fallback={<Spinner />}>
      <PostsList />
    </Suspense>
  )
}
