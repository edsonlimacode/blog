"use server"

import { RegisterFormData } from "../register/register-use-form-hook"

export async function registerNewUser(formData: RegisterFormData) {
  const baseurl = process.env.API_BASEURL as string

  try {
    const response = await fetch(`${baseurl}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        error: result.message
      }
    }

    return {
      data: result
    }
  } catch (error: any) {
    console.log(error)
    return {
      error: "Erro ao tentar se comunicar com o servidor"
    }
  }
}
