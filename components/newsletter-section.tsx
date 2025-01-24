"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="container mx-auto max-w-6xl text-center" ref={ref}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="text-lg md:text-xl text-gray-400 mb-3 block"
      >
        Stay Connected
      </motion.span>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="title-h4 leading-tight mb-8"
      >
        Don't miss out! Enter your email
        <br />
        to stay updated on the latest events.
      </motion.h4>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="space-y-6"
        aria-label="Newsletter subscription form"
      >
        <div className="mx-auto flex max-w-xl gap-4">
          <div className="flex-1">
            <Label htmlFor="newsletter-email" className="sr-only">
              Email address
            </Label>
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="name@email.com"
              required
              aria-required="true"
              className="h-11 rounded-full bg-[#1C1C1C] border border-[#4D4D4D] text-gray-300 text-base px-6 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border focus:bg-[#1E1E1E]"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="px-8 rounded-full bg-[#8C3FE8] hover:bg-white hover:text-black text-sm font-medium whitespace-nowrap text-white"
          >
            Stay Updated
          </Button>
        </div>
        <p className="text-base text-white">
          We care about your data in our{" "}
          <Link href="/privacy" className="text-[#0066FF] hover:underline">
            privacy policy
          </Link>
        </p>
      </motion.form>
    </div>
  )
}

