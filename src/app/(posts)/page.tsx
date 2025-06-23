import { PostList } from "./_components/post-list"
import { Header } from "@/components/header"
import { Postsummary } from "./_components/post-summary"

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <Header />
      <main className="mt-8">
        <Postsummary />
        <PostList />
      </main>
      <footer>@copyright {new Date().getFullYear()}</footer>
    </div>
  )
}
