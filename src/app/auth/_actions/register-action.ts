"use server"

import { RegisterFormData } from "../register/register-use-form-hook"

export async function registerNewUser(formData: RegisterFormData) {
  const baseurl = process.env.API_BASEURL as string

  try {
    const response = await fetch(`${baseurl}/user`, {
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

    return result
  } catch (error: any) {
    console.log(error)
    return {
      errors: ["Erro ao tentar se comunicar com o servidor"]
    }
  }
}
