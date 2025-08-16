import { getUserLoginSession } from "@/utils/auth/login-manager"

export async function api(path: string, options?: RequestInit) {
  const baseurl = process.env.API_BASEURL as string

  const jwt = await getUserLoginSession()

  const headers = {
    "Content-Type": "application/json",
    ...options?.headers,
    Authentication: `Bearer ${jwt}` //sobrescreve qualquer authentication header que vinher aqui abaixo do options
  }

  try {
    const response = await fetch(`${baseurl}${path}`, {
      ...options,
      headers
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        errors: result.message
      }
    }

    return {
      data: result
    }
  } catch (error: any) {
    console.log(error)
    return {
      errors: ["Erro ao tentar se comunicar com o servidor"]
    }
  }
}
