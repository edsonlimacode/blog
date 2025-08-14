"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const RegisterSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, { message: "Nome deve conter no minimo 3 caracteres" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "E-mail é obrigatório" })
      .email({ message: "E-mail inválido" }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Senha deve conter no minimo 6 caracteres" }),
    password2: z
      .string()
      .trim()
      .min(6, { message: "Senha repetida deve conter no minimo 6 caracteres" })
  })
  .refine(
    (data) => {
      return data.password === data.password2
    },
    {
      path: ["password2"],
      message: "Senhas não conferem"
    }
  )
  .transform(({ name, email, password }) => {
    return {
      name,
      email,
      password
    }
  })

export type RegisterFormData = z.infer<typeof RegisterSchema>

export function useRegisterFormHook() {
  return useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })
}
