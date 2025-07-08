"use client"

import { Button } from "@/components/button"
import { ImageUpIcon } from "lucide-react"
import { useRef, useTransition } from "react"
import { toast } from "sonner"
import { uploadImageAction } from "../../_actions/upload-image"

const MAX_SIZE_LIMIT_IN_BYTES = 921600

export function ImageUploaded() {
  const [isPendding, startTransition] = useTransition()

  const ref = useRef<HTMLInputElement>(null)

  function handleChooseFile() {
    if (!ref.current) return
    ref.current.click()
  }

  function handleUploadFile() {
    const file = ref.current?.files?.item(0)

    if (!file) return

    if (file.size > MAX_SIZE_LIMIT_IN_BYTES) {
      toast.error(
        `Tamanho máximo da imagem é de ${MAX_SIZE_LIMIT_IN_BYTES / 1024}KB`
      )
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    startTransition(async () => {
      const response = await uploadImageAction(formData)
      if (response.error) {
        toast.error(response.error)
        return
      }

      toast.success(response.url)
    })
  }

  return (
    <div className="my-4">
      <Button type="button" onClick={handleChooseFile} variant="default">
        <ImageUpIcon />
        Enviar imagem
      </Button>
      <input
        type="file"
        ref={ref}
        onChange={handleUploadFile}
        className="hidden"
        accept="image/*"
      />
    </div>
  )
}
