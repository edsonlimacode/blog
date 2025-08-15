"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const LoginSchema = z.object({
  email: z.string()
    .min(3, { message: "Login deve conter no minimo 3 caracteres" })
    .email({message: "E-mail inválido"}),
  password: z
    .string()
    .trim()
    .min(6, { message: "Senha deve conter no minimo 4 caracteres" })
})

export type LoginFormData = z.infer<typeof LoginSchema>

export function useLoginFormHook() {
  return useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
}
