import { ReactNode } from "react"
import { Menu } from "../_components/menu"
import { requireLoginSessionOrRedirect } from "@/utils/auth/login-manager"

export default async function PostsLayout({
  children
}: {
  children: ReactNode
}) {
  await requireLoginSessionOrRedirect()

  return (
    <>
      <Menu />
      {children}
    </>
  )
}
