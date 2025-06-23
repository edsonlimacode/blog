import Image from "next/image"

type PostCardProps = {
  title: string
  imageCover: string
  date: string
  content: string
}

export function PostCard({ title, imageCover, content, date }: PostCardProps) {
  return (
    <article className="w-full">
      <Image
        src={imageCover}
        alt=""
        width={700}
        height={700}
        className="rounded-lg object-cover"
        priority
        quality={100}
      />
      <div className="flex flex-col gap-2 py-2">
        <h2 className="line-clamp-2 text-2xl font-bold text-zinc-900">
          {title}
        </h2>
        <time dateTime={date} className="text-zinc-500">
          {date}
        </time>
        <p className="line-clamp-5 text-zinc-600">{content}</p>
      </div>
    </article>
  )
}
