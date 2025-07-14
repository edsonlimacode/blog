import { cookies } from "next/headers"
import { jwtSignIn, verifyJwt } from "./jwt-manager"
import { redirect } from "next/navigation"

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

export async function getLoginSession() {
  const cookie = await cookies()

  const jwt = await cookie.get("theblog:session")?.value

  if (!jwt) return

  return await verifyJwt(jwt)
}

export async function verifyLoginSession() {
  const jwtPayload = await getLoginSession()

  if (!jwtPayload) return

  return jwtPayload?.userName === process.env.LOGIN_USERNAME
}

export async function requireLoginSessionOrRedirect() {
  const isAuthenticated = await verifyLoginSession()

  if (!isAuthenticated) {
    redirect("/auth/login")
  }
}

export async function deleteLoginSession() {
  const cookie = await cookies()
  cookie.delete("theblog:session")
}
