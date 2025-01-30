// Extraer el Footer a su propio componente para mejor mantenibilidad
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { FaPinterest } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="px-6 py-8 bg-black" role="contentinfo">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col space-y-8">
          <div>
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik_white_logo-Nwtjmx8LjGbKeQZHTFI5CvjvPrlrmW.png"
                alt="Freepik Logo"
                width={85}
                height={22}
                className="h-5 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>Made in sunny Málaga ☀️</p>
              <p>Copyright © 2010-2024 Freepik Company S.L. All rights reserved.</p>
            </div>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4">
                <li>
                  <Link href="https://www.facebook.com/Freepik" aria-label="Follow us on Facebook">
                    <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="" aria-label="Follow us on Twitter">
                    <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Follow us on Pinterest">
                    <FaPinterest className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Follow us on Instagram">
                    <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Subscribe to our YouTube channel">
                    <Youtube className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-sm text-gray-400 mb-2 md:mb-0">Freepik company projects</p>
            <nav aria-label="Freepik company projects">
              <ul className="flex flex-wrap gap-4 text-sm text-gray-400">
                <li>
                  <Link href="https://www.freepik.com/" className="hover:text-white transition-colors">
                    Freepik
                  </Link>
                </li>
                <li>
                  <Link href="https://www.flaticon.com/" className="hover:text-white transition-colors">
                    Flaticon
                  </Link>
                </li>
                <li>
                  <Link href="https://slidesgo.com/" className="hover:text-white transition-colors">
                    Slidesgo
                  </Link>
                </li>
                <li>
                  <Link href="https://www.videvo.net/" className="hover:text-white transition-colors">
                    Videvo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

