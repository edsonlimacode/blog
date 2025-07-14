"use client"

import clsx from "clsx"
import { Trash2Icon } from "lucide-react"
import { useState, useTransition } from "react"
import { deletePostAction } from "../../../_actions/delete"
import { Dialog } from "@/app/admin/_components/dialog"
import { toast } from "sonner"

type BtnDeletePostProps = {
  id: string | undefined
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
        const response = await deletePostAction(id)
        if (response.data) {
          setDialogOpen(false)
          toast.success(response.data)
        }
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
