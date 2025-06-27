import Link from "next/link"

export function Header() {
  return (
    <header className="flex h-20 items-center">
      <Link href="/" className="text-6xl font-extrabold text-zinc-900">
        The blog
      </Link>
    </header>
  )
}
