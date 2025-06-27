"use client"

import { Trash2Icon } from "lucide-react"

type BtnDeletePostProps = {
  id: string | null
}

export function BtnDeletePost({ id }: BtnDeletePostProps) {
  function handleDelete() {
    alert(id)
  }

  return (
    <button className="cursor-pointer" title="Excluir" onClick={handleDelete}>
      <Trash2Icon className="text-red-500" />
    </button>
  )
}
