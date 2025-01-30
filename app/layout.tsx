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
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png' }
    ],
  },
  manifest: '/favicons/site.webmanifest',
  openGraph: {
    title: "Freepik SF - The Future of Creativity",
    description:
      "Join our vibrant community in San Francisco, where AI, design, and creativity converge for networking, collaboration, and learning.",
    type: "website",
    images: [
      {
        url: '/favicons/og-image.jpg', // Asegúrate de tener esta imagen
        width: 1200,
        height: 630,
        alt: 'Freepik SF',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Freepik SF - The Future of Creativity",
    description: "Join our vibrant community in San Francisco, where AI, design, and creativity converge for networking, collaboration, and learning.",
    images: ['/favicons/twitter-image.jpg'], // Asegúrate de tener esta imagen
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Freepik SF",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#8C3FE8',
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
        {/* Meta tags para PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* Color de la barra de Safari */}
        <meta name="theme-color" content="#8C3FE8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#8C3FE8" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

