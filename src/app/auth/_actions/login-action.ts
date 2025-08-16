"use server"

import { createLoginSession } from "@/utils/auth/login-manager"
import { LoginFormData } from "../login/login-use-form-hook"

export async function signIn(formData: LoginFormData) {
  const baseurl = process.env.API_BASEURL as string

  try {
    const response = await fetch(`${baseurl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        errors: result.message
      }
    }
    await createLoginSession(result?.accessToken)
    return result
  } catch (error: any) {
    console.log(error)
    return {
      errors: ["Erro ao tentar se comunicar com o servidor"]
    }
  }
}
