"use client"

import { InputCheckBox } from "@/components/input/checkbox"
import { InputField } from "@/components/input/text"
import { MarkdownEditor } from "@/components/markdown-editor"
import { useState } from "react"

export function PostForm() {
  const [contentValue, setContentValue] = useState("")

  return (
    <form action="">
      <div className="flex flex-col gap-4">
        <InputField lableText="Titulo" placeholder="Titulo" />
        <InputCheckBox lableText="Publicado" />
        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />
      </div>
    </form>
  )
}
