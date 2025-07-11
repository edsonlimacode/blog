import { Header } from "@/components/header"
import { ReactNode } from "react"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
