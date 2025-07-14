import { SignJWT, jwtVerify } from "jose"

const jwtSecrect = process.env.JWT_SECRET as string
const expiresTimeInMiliSeconds = process.env.EXPIRES_IN_MILISECONDS as string

const jwtEncodedKey = new TextEncoder().encode(jwtSecrect)
const expiresAt = new Date(Date.now() + Number(expiresTimeInMiliSeconds)) //1dia

type JwtPayload = {
  userName: string
  expiresAt: Date
}

export async function jwtSignIn(payload: JwtPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(jwtEncodedKey)
}

export async function verifyJwt(jwt: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(jwt, jwtEncodedKey, {
      algorithms: ["HS256"]
    })

    return payload
  } catch (error: any) {
    console.log(error?.message)
    return false
  }
}
