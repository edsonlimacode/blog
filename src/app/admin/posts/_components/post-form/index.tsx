"use client"

import { InputCheckBox } from "@/components/input/checkbox"
import { InputField } from "@/components/input/text"
import { MarkdownEditor } from "@/components/markdown-editor"
import { useActionState, useEffect, useState } from "react"
import { ImageUploaded } from "../image-uploader"
import { Button } from "@/components/button"
import { makePartialpost, PostDto } from "../../_dto/dto"
import { createPostAction } from "../../_actions/create-post"
import { toast } from "sonner"

type PostProps = {
  postDto?: PostDto
}

export function PostForm({ postDto }: PostProps) {
  const initialValues = {
    formState: makePartialpost(postDto),
    errors: []
  }
  const [state, formAction, isPedding] = useActionState(
    createPostAction,
    initialValues
  )

  useEffect(() => {
    state.errors.forEach((error) => toast.error(error))
  }, [state.errors])

  const { formState } = state

  const [contentValue, setContentValue] = useState(postDto?.content || "")

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <ImageUploaded />
        <InputField
          name="coverImageUrl"
          lableText="URL da capa"
          placeholder="Capa da imagem"
          defaultValue={formState.coverImageUrl}
        />
        <InputField
          name="title"
          lableText="Titulo"
          placeholder="Titulo"
          defaultValue={formState.title}
        />
        <InputField
          name="excerpt"
          lableText="Resumo"
          placeholder="Resumo"
          defaultValue={formState.excerpt}
        />
        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />
        <InputField
          name="author"
          lableText="Autor"
          placeholder="Nome do autor"
          defaultValue={formState.author}
        />
        <InputCheckBox
          name="published"
          defaultChecked={formState.published}
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
