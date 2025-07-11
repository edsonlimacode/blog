import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const postSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: "Titulo deve conter no minimo 3 caracteres" }),
  coverImageUrl: z
    .string()
    .trim()
    .min(3, { message: "Url deve conter no minimo 3 caracteres" }),
  content: z
    .string()
    .trim()
    .min(3, { message: "Conteudo deve conter no minimo 3 caracteres" }),
  excerpt: z
    .string()
    .trim()
    .min(3, { message: "Conteudo deve conter no minimo 3 caracteres" }),
  author: z
    .string()
    .trim()
    .min(3, { message: "Autor deve conter no minimo 3 caracteres" }),
  published: z.boolean()
})

export type PostFormData = z.infer<typeof postSchema>

export function usePostFormHook() {
  return useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      author: "",
      published: false
    }
  })
}
