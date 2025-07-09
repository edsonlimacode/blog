import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { ShowMarkDown } from "./show-markdown"
import { formatDate } from "@/utils/format-date"
import { ComponentProps } from "react"

type PostCardContentProps = {
  title: string
  date: string
  content: string
  slug: string
  isSinglePost?: boolean
} & ComponentProps<"div">

export function PostCard({ ...props }: ComponentProps<"div">) {
  return <article className="w-full" {...props} />
}

export function PostCover({
  alt,
  width,
  height,
  ...props
}: ComponentProps<typeof Image>) {
  return <Image height={height} width={width} {...props} alt={alt} />
}

export function PostContent({
  title,
  slug,
  content,
  date,
  isSinglePost = false,
  ...props
}: PostCardContentProps) {
  return (
    <div className="flex flex-col gap-2 py-2" {...props}>
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
    </div>
  )
}
