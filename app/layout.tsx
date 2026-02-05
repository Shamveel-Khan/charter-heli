import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500"], // Focus on lighter weights for body
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Son Doong Expeditions — Journey to the World's Largest Cave",
  description:
    "Book a once-in-a-lifetime expedition into Son Doong, the world's largest cave. Discover a lost world of giant stalagmites, underground rivers, and a unique jungle ecosystem.",
  generator: "v0.app",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${cormorantGaramond.variable} antialiased selection:bg-white/20`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
