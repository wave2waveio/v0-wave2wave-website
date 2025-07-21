import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wave2Wave.io - Custom Structured Cabling, Data Center & DCIM Solutions",
  description:
    "Wave2Wave.io designs, delivers, and supports the critical physical infrastructure behind tomorrow's networks — combining custom-engineered structured cabling, precision logistics, and digital twin-driven services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
