import { PostList } from "./_components/post-list"
import { Header } from "@/components/header"
import { Postsummary } from "./_components/post-summary"

export default function Home() {
  return (
    <main className="mt-8">
      <Postsummary />
      <PostList />
    </main>
  )
}
