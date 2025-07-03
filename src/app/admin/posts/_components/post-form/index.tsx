"use client"

import { MarkdownEditor } from "@/components/markdown-editor"
import { useState } from "react"

export function PostForm() {
  const [contentValue, setContentValue] = useState("")

  return (
    <form action="">
      <div className="">
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
