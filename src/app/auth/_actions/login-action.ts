"use server"

import { LoginFormData } from "../login/login-use-form-hook"

export async function signIn(formData: LoginFormData) {
  console.log(formData)
}
