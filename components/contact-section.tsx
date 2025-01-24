"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="px-4 py-16 bg-black" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Form Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
              className="space-y-3"
            >
              <h3 className="title-h3 leading-tight">Host an Event with Us!</h3>
              <p className="text-base text-gray-400">Connect with us to explore sponsorships and collaborations</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
              className="space-y-4"
              aria-label="Contact form"
            >
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                  aria-required="true"
                  className="h-11 bg-[#1C1C1C] focus:bg-[#1E1E1E] border border-[#4D4D4D] text-gray-300 text-base px-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  className="h-11 bg-[#1C1C1C] focus:bg-[#1E1E1E] border border-[#4D4D4D] text-gray-300 text-base px-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  aria-required="true"
                  className="min-h-[120px] bg-[#1C1C1C] focus:bg-[#1E1E1E] border border-[#4D4D4D] text-gray-300 text-base px-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 rounded-lg bg-[#8C3FE8] hover:bg-white hover:text-black text-sm font-medium text-white"
                aria-label="Send message"
              >
                Send Message
              </Button>
            </motion.form>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.45, 0.27, 0.9] }}
            className="flex items-center justify-center"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact-img-lhBPxqA6RCYtjITSrbCXE91DoYFd37.webp"
              alt="Contact visual"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

