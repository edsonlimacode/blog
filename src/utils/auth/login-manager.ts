import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const expiresTimeInMiliSeconds = process.env.EXPIRES_IN_MILISECONDS as string

const expiresAt = new Date(Date.now() + Number(expiresTimeInMiliSeconds)) //1dia

export async function createLoginSession(jwt: string) {
  const cookie = await cookies()

  cookie.set("theblog:session", jwt, {
    expires: expiresAt,
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  })
}

export async function getUserLoginSession() {
  const cookie = await cookies()

  const jwt = await cookie.get("theblog:session")?.value

  if (!jwt) {
    redirect("/auth/login")
  }

  return jwt
}


