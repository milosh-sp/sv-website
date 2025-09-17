import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SkillVerdict | Monetize Your Expertise as a Developer",
  description:
    "SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from leading companies verify your skills.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
