import bcrypt from "bcryptjs"

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSaltSync(10)
  const hash = await bcrypt.hash(password, salt)
  const base64 = Buffer.from(hash).toString("base64")
  return base64
}

export async function verifyPassword(password: string, hashPassword: string) {
  const decodeBase64 = Buffer.from(hashPassword, "base64").toString("utf-8")
  const isValid = await bcrypt.compare(password, decodeBase64)
  return isValid
}

;(async () => {
  const pass = "12345"
  const hash = await hashPassword(pass)
  const isValid = await verifyPassword(
    pass,
    "JDJiJDEwJFdxazl6NDFqZmxSaXBSRmQ0eERBNnUvVkxyTlc3TXJuTUZ0TVpMNm9SRE5admZ3Tzh6Nmc2"
  )
})()
