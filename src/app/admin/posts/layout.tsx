import { ReactNode } from "react"
import { Menu } from "../_components/menu"
import { getUserLoginSession } from "@/utils/auth/login-manager"

export default async function PostsLayout({
  children
}: {
  children: ReactNode
}) {
  await getUserLoginSession()

  return (
    <>
      <Menu />
      {children}
    </>
  )
}
