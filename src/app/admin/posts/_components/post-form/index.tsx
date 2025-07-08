"use client"

import { InputCheckBox } from "@/components/input/checkbox"
import { InputField } from "@/components/input/text"
import { MarkdownEditor } from "@/components/markdown-editor"
import { useActionState, useState } from "react"
import { ImageUploaded } from "../image-uploader"
import { Button } from "@/components/button"
import { PostDto } from "../../_dto/dto"
import { createPostAction } from "../../_actions/create-post"

type PostProps = {
  postDto?: PostDto
}

export function PostForm({ postDto }: PostProps) {
  const [contentValue, setContentValue] = useState(postDto?.content || "")

  const [state, formAction] = useActionState(createPostAction, 0)

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <ImageUploaded />
        <InputField
          name="coverImageUrl"
          lableText="URL da capa"
          placeholder="Capa da imagem"
          defaultValue={postDto?.coverImageUrl || ""}
        />
        <InputField
          name="title"
          lableText="Titulo"
          placeholder="Titulo"
          defaultValue={postDto?.title || ""}
        />
        <InputField
          name="excerpt"
          lableText="Resumo"
          placeholder="Resumo"
          defaultValue={postDto?.excerpt || ""}
        />
        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />
        <InputField
          name="string"
          lableText="Autor"
          placeholder="Nome do autor"
          defaultValue={postDto?.author || ""}
        />
        <InputCheckBox
          name="published"
          defaultChecked={postDto?.published || false}
          lableText="Publicado"
        />
        <Button
          type="submit"
          variant="default"
          className="flex items-center justify-center !bg-blue-500"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
