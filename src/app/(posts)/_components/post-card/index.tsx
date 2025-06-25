import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { ShowMarkDown } from "./show-markdown"
import { formatDate } from "@/utils/format-date"

type PostCardProps = {
  title: string
  imageCover: string
  date: string
  content: string
  slug: string
  isSinglePost?: boolean
}

export function PostCard({
  title,
  imageCover,
  content,
  date,
  slug,
  isSinglePost = false
}: PostCardProps) {
  return (
    <article className="w-full">
      <Image
        src={imageCover}
        alt={title}
        width={700}
        height={700}
        className="w-full rounded-lg object-cover"
        priority
        quality={100}
      />
      <div className="flex flex-col gap-2 py-2">
        <Link href={`/post/${slug}`}>
          <h2
            className={clsx("line-clamp-2 text-2xl font-bold text-zinc-900", {
              "text-4xl": isSinglePost
            })}
          >
            {title}
          </h2>
        </Link>
        <time dateTime={date} className="text-zinc-500">
          {formatDate(date)}
        </time>
        <div
          className={clsx("text-zinc-600", {
            "line-clamp-3": !isSinglePost
          })}
        >
          <ShowMarkDown content={content} />
        </div>
      </div>
    </article>
  )
}
