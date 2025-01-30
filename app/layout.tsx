import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

// Optimizar la carga de fuentes
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Freepik SF - The Future of Creativity",
  description:
    "Join our vibrant community in San Francisco, where AI, design, and creativity converge for networking, collaboration, and learning.",
  metadataBase: new URL("https://freepik-sf.com"),
  openGraph: {
    title: "Freepik SF - The Future of Creativity",
    description:
      "Join our vibrant community in San Francisco, where AI, design, and creativity converge for networking, collaboration, and learning.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark scroll-smooth overflow-x-hidden ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yte8qop.css" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

