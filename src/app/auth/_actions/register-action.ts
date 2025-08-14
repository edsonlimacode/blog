"use server"

import { api } from "@/lib/fetch-wrapper"
import { RegisterFormData } from "../register/register-use-form-hook"

export async function registerNewUser(formData: RegisterFormData) {
  const response = await api("/user", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return response
}
