"use server"

import { verifyPassword } from "@/utils/auth/bcrypt-password"
import { LoginFormData } from "../login/login-use-form-hook"
import { redirect } from "next/navigation"
import { createLoginSession } from "@/utils/auth/login-manager"

export async function signIn(formData: LoginFormData) {
  const username = process.env.LOGIN_USERNAME as string
  const password = process.env.PASSWORD as string

  if (formData.login != username) {
    return {
      error: "E-mail ou senha inválidos"
    }
  }

  const isPasswordValid = await verifyPassword(formData.password, password)

  if (formData.login === username && !isPasswordValid) {
    return {
      error: "E-mail ou senha inválidos"
    }
  }

  await createLoginSession(username)
  redirect("/admin/posts")
}
