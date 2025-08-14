export async function api(path: string, options?: RequestInit) {
  const baseurl = process.env.API_BASEURL as string

  try {
    const response = await fetch(`${baseurl}${path}`, {
      ...options
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
