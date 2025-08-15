"use server"

import { createLoginSession } from "@/utils/auth/login-manager"
import { LoginFormData } from "../login/login-use-form-hook"
import { api } from "@/lib/fetch-wrapper"
import { redirect } from "next/navigation"

export async function signIn(formData: LoginFormData) {
  const response = await api("/auth/login", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (response.errors) {
    return response.errors
  }

  await createLoginSession(response.data?.accessToken)
  redirect("/admin/posts")
}
