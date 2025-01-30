"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Calendar", href: "#upcoming-events" },
  { name: "Speakers", href: "#speakers" },
  { name: "Past Events", href: "#past-events" },
  { name: "News", href: "#latest-news" },
  { name: "Contact", href: "#contact" },
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80 // Adjusted for header height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
        setIsOpen(false) // Close mobile menu after click
      }
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm" role="banner">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6 xl:px-0">
        <Link href="/" className="h-5" aria-label="Freepik - Home">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik_white_logo-Nwtjmx8LjGbKeQZHTFI5CvjvPrlrmW.png"
            alt="Freepik Logo"
            width={85}
            height={22}
            className="h-5 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex space-x-8" role="menubar">
            {navigation.map((item) => (
              <li key={item.name} role="none">
                <Link
                  href={item.href}
                  onClick={handleClick}
                  className="text-sm font-medium text-white transition-colors hover:text-white/70"
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white justify-end" aria-label="Open menu">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95 p-0">
            <nav className="flex h-full flex-col" aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-4 p-6" role="menu">
                {navigation.map((item) => (
                  <li key={item.name} role="none">
                    <Link
                      href={item.href}
                      onClick={handleClick}
                      className="text-lg font-medium text-white transition-colors hover:text-white/70"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

