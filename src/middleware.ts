import { NextRequest, NextResponse } from "next/server"
import { verifyJwt } from "./utils/auth/jwt-manager"

export async function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith("/auth/login")
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin")
  const isGetRequest = request.method === "GET"

  const shouldBeAuthenticated = isAdminPage && !isLoginPage
  const shouldRedirect = shouldBeAuthenticated && isGetRequest

  if (!shouldRedirect) {
    return NextResponse.next()
  }

  const jwtToken = request.cookies.get("theblog:session")?.value

  const isValid = await verifyJwt(jwtToken)

  if (!isValid) {
    const loginUrl = new URL("/auth/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*"
}
