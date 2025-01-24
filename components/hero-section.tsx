"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative px-4 pt-32 md:pt-40 pb-16 bg-black">
      <div className="container mx-auto max-w-6xl relative overflow-visible">
        <div className="flex flex-col md:flex-row justify-between items-start relative min-h-[400px]">
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.45, 0.27, 0.9],
              }}
            >
              <h1 id="hero-heading" className="mb-6 hero-title font-bold tracking-tight drop-shadow-lg">
                The Future of Creativity
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.21, 0.45, 0.27, 0.9],
              }}
              className="mb-8 text-lg text-gray-200 max-w-xl drop-shadow-lg"
            >
              Join our vibrant community in San Francisco, where AI, design, and creativity converge for networking,
              collaboration, and learning. Connect with industry leaders, gain fresh insights, and build lasting
              relationships that shape the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.21, 0.45, 0.27, 0.9],
              }}
            >
              <Button
                size="lg"
                className="bg-[#8C3FE8] hover:bg-white hover:text-black rounded-[100px] text-white relative overflow-hidden group"
                asChild
              >
                <a href="https://lu.ma/freepik-sf" target="_blank" rel="noreferrer noopener">
                  <span className="relative z-10 group-hover:text-black">Join Our Next Event!</span>
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.21, 0.45, 0.27, 0.9],
            }}
            className="absolute top-[-198px] right-[-200px] w-[903px] h-[160%] z-0 pointer-events-none"
            style={{ transform: "translateZ(0)" }}
            aria-hidden="true"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/000-7ui54sMwygxe843TgPX3RdaQaAq8Nq.png"
              alt="Creative spiral background"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

