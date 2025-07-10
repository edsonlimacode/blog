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
import { updatePostAction } from "../../_actions/update-post"

type UpdatePostProps = {
  mode: "update"
  formState: PostDto
}
type CreatePostProps = {
  mode: "create"
}

type PostManagerProps = CreatePostProps | UpdatePostProps

export function PostForm(props: PostManagerProps) {
  let publicPost
  if (props.mode === "update") {
    publicPost = props.formState
  }

  const actionMap = {
    create: createPostAction,
    update: updatePostAction
  }

  const initialValues = {
    formState: makePartialpost(publicPost),
    errors: []
  }
  const [state, formAction, isPedding] = useActionState(
    actionMap[props.mode],
    initialValues
  )

  useEffect(() => {
    state.errors.forEach((error) => toast.error(error))
  }, [state.errors])

  const { formState } = state

  const [contentValue, setContentValue] = useState(publicPost?.content || "")

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <ImageUploaded />
        <InputField
          name="id"
          className="hidden"
          lableText=""
          defaultValue={formState.id}
        />
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
          disabled={isPedding}
          variant="default"
          className="flex items-center justify-center !bg-blue-500"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
