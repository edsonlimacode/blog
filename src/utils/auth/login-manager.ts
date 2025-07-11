import { cookies } from "next/headers"
import { jwtSignIn } from "./jwt-manager"

const expiresTimeInMiliSeconds = process.env.EXPIRES_IN_MILISECONDS as string

const expiresAt = new Date(Date.now() + Number(expiresTimeInMiliSeconds)) //1dia

export async function createLoginSession(userName: string) {
  const loginSession = await jwtSignIn({ userName, expiresAt })
  const cookie = await cookies()

  cookie.set("theblog:session", loginSession, {
    expires: expiresAt,
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  })
}

export async function deleteLoginSession() {
  const cookie = await cookies()
  cookie.delete("theblog:session")
}
