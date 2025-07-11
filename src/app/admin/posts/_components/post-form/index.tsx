"use client"

import { Controller } from "react-hook-form"

import { InputCheckBox } from "@/components/input/checkbox"
import { InputField } from "@/components/input/text"
import { useEffect } from "react"
import { ImageUploaded } from "../image-uploader"
import { Button } from "@/components/button"
import { PostDto } from "../../_dto/dto"
import dynamic from "next/dynamic"
import { updatePostActionTeste } from "../../_actions/update"
import { toast } from "sonner"
import { createPostActionTeste } from "../../_actions/create"
import { PostFormData, usePostFormHook } from "./post-use-form-hook"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false
})

type PostProps = {
  post?: PostDto
}

export function PostForm({ post }: PostProps) {
  const form = usePostFormHook()

  useEffect(() => {
    if (post?.id) {
      form.setValue("title", post.title)
      form.setValue("coverImageUrl", post.coverImageUrl)
      form.setValue("content", post.content)
      form.setValue("author", post.author)
      form.setValue("excerpt", post.excerpt)
      form.setValue("published", post.published)
    }
  }, [post?.id])

  async function onSubmit(formData: PostFormData) {
    if (post?.id) {
      const response = await updatePostActionTeste(post.id, formData)

      if (response.error) {
        toast.error(response.error)
        return
      }

      toast.success(response.success)
    } else {
      const response = await createPostActionTeste(formData)
      if (response.error) {
        toast.error(response.error)
        return
      }
      toast.success(response.success)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <ImageUploaded />

        <InputField
          lableText="URL da capa"
          placeholder="Capa da imagem"
          {...form.register("coverImageUrl")}
        />
        <InputField
          {...form.register("title")}
          lableText="Titulo"
          placeholder="Titulo"
        />
        <InputField
          {...form.register("excerpt")}
          lableText="Resumo"
          placeholder="Resumo"
        />

        <Controller
          name="content"
          control={form.control}
          render={({ field }) => (
            <div data-color-mode="light">
              <label className="text-sm font-semibold" htmlFor="content">
                Conteudo
              </label>
              <MDEditor
                className="whitespace-pre-wrap"
                {...field}
                height={400}
                extraCommands={[]}
                preview="edit"
                hideToolbar={false}
                textareaProps={{
                  id: "content"
                }}
              />
            </div>
          )}
        />
        <InputField
          {...form.register("author")}
          lableText="Autor"
          placeholder="Nome do autor"
        />
        <InputCheckBox {...form.register("published")} lableText="Publicado" />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          variant="default"
          className="flex items-center justify-center !bg-blue-500"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
