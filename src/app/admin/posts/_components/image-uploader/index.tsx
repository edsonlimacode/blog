"use client"

import { Button } from "@/components/button"
import { ImageUpIcon, X } from "lucide-react"
import { useRef, useState, useTransition } from "react"
import { toast } from "sonner"
import { uploadImageAction } from "../../_actions/upload-image"

const MAX_SIZE_LIMIT_IN_BYTES = 921600

export function ImageUploaded() {
  const [isPendding, startTransition] = useTransition()
  const [imageUrlPreview, setImageUrlPreview] = useState("")

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
      await new Promise((r) => setTimeout(r, 3000))
      const response = await uploadImageAction(formData)
      if (response.error) {
        toast.error(response.error)
        return
      }
      setImageUrlPreview(response.url)
      toast.success("Enviada com sucesso!")
    })
  }

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text).then(() => {
      toast.info("Url copiada!")
    })
  }

  return (
    <div className="my-4">
      <Button
        type="button"
        disabled={isPendding}
        onClick={handleChooseFile}
        variant="default"
      >
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
      {!!imageUrlPreview && (
        <div className="mt-4 flex flex-col gap-4">
          <strong
            title="Copiar url"
            className="cursor-pointer"
            onClick={() => copyToClipboard(imageUrlPreview)}
          >
            {imageUrlPreview}
          </strong>
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrlPreview}
            className="max-w-[500px] rounded object-cover"
            alt="Preview da imagem"
          />
        </div>
      )}
    </div>
  )
}
