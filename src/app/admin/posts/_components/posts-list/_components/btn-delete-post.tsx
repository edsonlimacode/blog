"use client"

import { Trash2Icon } from "lucide-react"
import { useState, useTransition } from "react"
import { deletePostAction } from "../../../_actions/delete-post-action"
import clsx from "clsx"
import { Dialog } from "@/app/admin/_components/dialog"

type BtnDeletePostProps = {
  id: string | null
}

export function BtnDeletePost({ id }: BtnDeletePostProps) {
  const [isPending, startTransition] = useTransition()
  const [isDialogOpen, setDialogOpen] = useState(false)

  function handleCancel() {
    setDialogOpen(false)
  }

  function handleOpen() {
    setDialogOpen(true)
  }

  function handleDelete() {
    startTransition(async () => {
      if (id) {
        await deletePostAction(id)
        setDialogOpen(false)
      }
    })
  }

  return (
    <>
      <button
        disabled={isPending}
        className="cursor-pointer"
        title="Excluir"
        onClick={handleOpen}
      >
        <Trash2Icon
          className={clsx("text-red-500", {
            "cursor-not-allowed": isPending
          })}
        />
      </button>
      {isDialogOpen && (
        <Dialog
          onCancel={handleCancel}
          onConfirm={handleDelete}
          disabled={isPending}
        />
      )}
    </>
  )
}
