import { postRepository } from "@/repositories/PostRepository"
import { notFound } from "next/navigation"
import { PostForm } from "../../_components/post-form"
import { postModelToDto } from "../../_dto/dto"

type SingleProps = {
  params: Promise<{ id: string }>
}

export default async function Single({ params }: SingleProps) {
  const { id } = await params

  const post = await postRepository.findById(id)

  if (!post) notFound()

  const postDto = postModelToDto(post)

  return (
    <div>
      <PostForm postDto={postDto} />
    </div>
  )
}
