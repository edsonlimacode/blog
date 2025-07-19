"use client"
import { Button } from "@/components/button"
import { InputField } from "@/components/input/text"
import { toast } from "sonner"
import { RegisterFormData, useRegisterFormHook } from "./register-use-form-hook"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"
import { registerNewUser } from "../_actions/register-action"
import { useEffect } from "react"

export default function Register() {
  const form = useRegisterFormHook()

  useEffect(() => {
    console.log(form.formState.errors)
  }, [form.formState.errors])

  async function onSubmit(formData: RegisterFormData) {
    const response = await registerNewUser(formData)
    if (response?.error) {
      for (const erro of response.error) {
        toast.error(erro)
      }
    }

    console.log(response.data)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center">
      <h1 className="mb-8 text-2xl font-bold">Registre-se</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          lableText="Nome"
          className="mt-2"
          {...form.register("name")}
          placeholder="Digite seu nome"
        />
        <InputField
          lableText="E-mail"
          className="mt-2"
          {...form.register("email")}
          placeholder="Digite seu email"
        />
        <InputField
          type="password"
          {...form.register("password")}
          lableText="Senha"
          className="mt-2"
          placeholder="Digite sua senha"
        />
        <InputField
          type="password"
          {...form.register("password2")}
          lableText="Repetir Senha"
          className="mt-2"
          placeholder="Repita sua senha"
        />
        <Button
          disabled={form.formState.isSubmitting}
          variant="default"
          className="mt-2 flex h-11 w-full justify-center"
        >
          Entrar
        </Button>
      </form>
      <Link
        href="/auth/login"
        className="mt-4 flex gap-0.5 self-start font-semibold"
      >
        <ArrowLeftIcon /> Voltar
      </Link>
    </div>
  )
}
