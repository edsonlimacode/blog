"use client"
import { Button } from "@/components/button"
import { InputField } from "@/components/input/text"
import { LoginFormData, useLoginFormHook } from "./login-use-form-hook"
import { signIn } from "../_actions/login-action"
import { toast } from "sonner"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignIn() {
  const form = useLoginFormHook()
  const router = useRouter()

  async function onSubmit(formData: LoginFormData) {
    const response = await signIn(formData)

    if(response?.errors){
      for(const erro of response.errors){
        toast.error(erro)
      }
    }

    router.push("/admin/posts")
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md items-center justify-center">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          lableText="Login"
          className="mt-2"
          {...form.register("email")}
          placeholder="Digite seu login"
        />
        <InputField
          type="password"
          {...form.register("password")}
          lableText="Senha"
          className="mt-2"
          placeholder="Digite sua senha"
        />
        <Button
          variant="default"
          className="mt-2 flex h-11 w-full justify-center"
        >
          Entrar
        </Button>
        <Link href="/auth/register" className="mt-4 self-start font-semibold">
          Registre-se
        </Link>
      </form>
    </div>
  )
}
