import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EcoFinanceGadgets - Invest in Your Planet and Yourself",
  description:
    "Eco-friendly financial gadgets designed for conscious living. Smart wallets, solar-powered trackers, and sustainable tech for your daily money habits.",
  keywords: ["eco finance", "sustainable gadgets", "solar wallets", "green technology", "financial wellness"],
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
