import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith("/auth/login")
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin")
    const isGetRequest = request.method === "GET"

  const shouldBeAuthenticated = isAdminPage && !isLoginPage
  const shouldRedirect = shouldBeAuthenticated && isGetRequest

  if (!shouldRedirect) {
    return NextResponse.next()
  }

  const isValid = request.cookies.get("theblog:session")?.value

  if (!isValid) {
    const loginUrl = new URL("/auth/login", request.url)
    return NextResponse.redirect(loginUrl)
  } 

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*"
}
