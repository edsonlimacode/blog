"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const LoginSchema = z.object({
  login: z
    .string()
    .min(3, { message: "Login deve conter no minimo 3 caracteres" }),
  password: z
    .string()
    .min(4, { message: "Senha deve conter no minimo 3 caracteres" })
})

export type LoginFormData = z.infer<typeof LoginSchema>

export function useLoginFormHook() {
  return useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      login: "",
      password: ""
    }
  })
}
