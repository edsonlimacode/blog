import { ReactNode } from "react"
import { Menu } from "../_components/menu"

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}
