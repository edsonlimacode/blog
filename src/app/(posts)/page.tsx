import { PostList } from "./_components/post-list"
import { Postsummary } from "./_components/post-summary"

export default function Home() {
  return (
    <main className="mt-8">
      <Postsummary />
      <PostList />
    </main>
  )
}
