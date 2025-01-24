"use client"

import { BlogCard } from "./blog-card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Comparing Flux on Freepik and MidJourney: Which AI Image Generator Is Right for You?",
    excerpt:
      "In the rapidly evolving world of AI-powered image generation, both Flux on Freepik and MidJourney stand out as leading tools for creators. Each has its unique strengths, but understanding which one aligns best with your needs can be tricky.",
    date: "January 16, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog_CoverENG.jpg-6nwsNRbiBkfMzhD7mI0r9ipomBaIT9.jpeg",
    category: "Technology Launches",
  },
  {
    title: "Flux 1.1 Pro: Try the newest AI generation mode first on Freepik",
    excerpt:
      "The wait is over—FLUX 1.1 Pro, developed by Black Forest Labs, is officially live! This release takes everything you love about generative AI and cranks it up to eleven.",
    date: "January 15, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-4565458-1-vbq8TZp5FkVhJfJ3C6rznYcJAGTkCO.jpeg",
    category: "Technology Launches",
  },
  {
    title: "AI video generator: Stunning visuals from text or image",
    excerpt:
      "You know what they say: a picture is worth a thousand words. But, what about a video? A video is worth everything. They captivate, tell stories, and immerse your audience in a way no other medium can.",
    date: "January 12, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLOG_COVER_1280x720_EN-x2.png-hRuhJR2Rym8vH0DTevKwSP13D8IhtS.jpeg",
    category: "AI Tools",
  },
  {
    title: "Beats that sleigh: Royalty-free Christmas music",
    excerpt:
      "One of Freepik's latest additions, Freepik Tunes, is ringing the bells — it's time to grab some hot chocolate and embrace the festive ho-ho-ho spirit.",
    date: "January 10, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beats-that-sleigh-3-1.png-1dYvqJR11Zx0TqOvBTpy4n6HV4aUKb.jpeg",
    category: "AI Tools",
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="space-y-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="space-y-4"
      >
        <h2 className="title-h2 leading-tight">Latest News</h2>
        <p className="text-base text-gray-400 max-w-3xl">
          Empowering designers, creatives, and professionals
          <br />
          to bring their vision to life.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3 auto-rows-fr">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}

