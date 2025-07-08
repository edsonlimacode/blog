"use client"

import { InputCheckBox } from "@/components/input/checkbox"
import { InputField } from "@/components/input/text"
import { MarkdownEditor } from "@/components/markdown-editor"
import { useState } from "react"
import { ImageUploaded } from "../image-uploader"
import { Button } from "@/components/button"

export function PostForm() {
  const [contentValue, setContentValue] = useState("")

  return (
    <form action="">
      <div className="flex flex-col gap-4">
        <ImageUploaded />
        <InputField lableText="Titulo" placeholder="Titulo" />
        <InputCheckBox lableText="Publicado" />
        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />
        <Button
          type="submit"
          variant="default"
          className="flex items-center justify-center bg-emerald-500"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
