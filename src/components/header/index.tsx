import { refreshData } from "@/actions/refresh"
import Link from "next/link"
import { RefreshCcw } from "lucide-react"

export function Header() {
  return (
    <header className="flex h-20 items-center">
      <Link href="/" className="text-6xl font-extrabold text-zinc-900">
        The blog
      </Link>
      <form action={refreshData}>
        <button type="submit">
          <RefreshCcw />
        </button>
      </form>
    </header>
  )
}
