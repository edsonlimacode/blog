import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Toaster } from "sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "The blog",
  description: "Todas as noticias da região e do mundo"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
          <Toaster richColors position="top-center" expand />
          <Header />
          {children}
          <footer className="mt-auto">
            @copyright {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  )
}
