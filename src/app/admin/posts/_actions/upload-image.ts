"use server"

import { verifyLoginSession } from "@/utils/auth/login-manager"
import { mkdir, writeFile } from "fs/promises"
import { extname, resolve } from "path"

type UploadImageResult = {
  url: string
  error: string
}

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageResult> {
  const isAuthenticated = await verifyLoginSession()

  if (!isAuthenticated) {
    return {
      url: "",
      error: "Faça login novamente em outra aba para continuar"
    }
  }

  const imageTypesPermissions = ["image/png", "image/jpg", "image/jpeg"]
  const Response = ({ url = "", error = "" }) => ({ url, error })

  if (!(formData instanceof FormData)) {
    return Response({ error: "Dados inválidos" })
  }

  const file = formData.get("file")

  if (!(file instanceof File)) {
    return Response({ error: "Arquivo inválido" })
  }

  if (!imageTypesPermissions.includes(file.type)) {
    return Response({
      error: "Formato incorreto! apenas os formatos PNG, JPEG e JPG"
    })
  }

  const fileExtension = extname(file.name)
  const fileName = `${Date.now()}${fileExtension}`

  const dirName = "uploads"
  const uploadFullPath = resolve(process.cwd(), "public", dirName)

  await mkdir(uploadFullPath, { recursive: true })

  const fileArrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(fileArrayBuffer)

  const path = resolve(uploadFullPath, fileName)

  await writeFile(path, buffer)

  const url = `${process.env.BASE_URL_SERVER_FILE}/${fileName}`

  return Response({ url })
}
