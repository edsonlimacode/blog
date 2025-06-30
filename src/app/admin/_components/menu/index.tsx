import { File, HomeIcon, LogOut, PlusIcon } from "lucide-react"
import Link from "next/link"

export function Menu() {
  return (
    <nav className="my-8 flex h-10 flex-col items-center gap-2 rounded-lg bg-zinc-900 px-4 text-white md:flex-row md:flex-wrap">
      <Link
        href="/"
        className="flex items-center gap-2 rounded-lg px-2 py-0.5 transition hover:bg-zinc-700"
        target="_blank"
      >
        <HomeIcon className="h-5 w-5" />
        Home
      </Link>
      <Link
        href="/admin/posts"
        className="flex items-center gap-2 rounded-lg px-2 py-0.5 transition hover:bg-zinc-700"
        target="_blank"
      >
        <File className="h-5 w-5" />
        Posts
      </Link>{" "}
      <Link
        href="/admin/posts/new"
        className="flex items-center gap-2 rounded-lg px-2 py-0.5 transition hover:bg-zinc-700"
        target="_blank"
      >
        <PlusIcon className="h-5 w-5" />
        Criar posts
      </Link>{" "}
      <Link
        href="/admin/posts"
        className="flex items-center gap-2 rounded-lg px-2 py-0.5 transition hover:bg-zinc-700"
        target="_blank"
      >
        <LogOut className="h-5 w-5" />
        Sair
      </Link>
    </nav>
  )
}
