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
    title: "How to create scenes with multiple shots using Hunyuan",
    excerpt:
      "Video creation just got smarter with Hunyuan V2, one of the latest modes added to Freepik AI Video Generator. If you’re looking for an easy way to add multiple shots to your videos without wasting time or credits, this is definitely the mode for you. Thanks to its New shot feature, Hunyuan helps creators like you produce outstanding videos with multiple cuts more efficiently, maintaining character and scene consistency.",
    date: "January 20, 2025",
    image:
      "https://mediablog.cdnpk.net/sites/9/2025/01/Blog-Cover.jpg",
    category: "AI - Tips and Trends",
    url: "https://www.freepik.com/blog/multiple-shots-with-hunyuan/",
  },
  {
    title: "Your guide to 2025 graphic trends by Freepik",
    excerpt:
      "On 2025, design feels like it’s having a moment. You know, the kind of moment where everything shifts, and suddenly, the way we create isn’t all aesthetics anymore—it’s connection. It’s about making you think and experience. The rules? Tossed out. The possibilities for the next trends? Endless.",
    date: "January 15, 2025",
    image:
      "https://mediablog.cdnpk.net/sites/9/2025/01/Cover.jpg",
      category: "Inspirational - Tips and Trends",
    url: "https://www.freepik.com/blog/2025-graphic-trends/",
  },
  {
    title: "7 style trends to watch in 2025 – Freepik’s take",
    excerpt:
      "So, another year of design madness wraps up. A year packed with jaw-dropping creations and tech doing its thing. And guess what? We’re already gearing up for the next one. AI has been flexing hard—new tools, smarter workflows, and ideas that seemed impossible a year ago suddenly feel like child’s play. But no matter how much the tech levels up; the soul of creation stays untouched. It’s still about you and the message you want to throw out into the world.",
    date: "December 27, 2024",
    image:
      "https://mediablog.cdnpk.net/sites/9/2024/12/COVER_StyleTrends2025_1280x720.png",
    category: "AI - Tips and Trends",
    url: "https://www.freepik.com/blog/2025-style-trends/",
  },
  {
    title: "How to create your character with AI in minutes",
    excerpt:
      "Ever since AI started jumping into the world of image generation and design, these tools just keep leveling up—bringing us features that are smarter and way more useful.",
    date: "December 20, 2024",
    image:
      "https://mediablog.cdnpk.net/sites/9/2024/12/COVERBLOG.jpg",
    category: "AI - Product updates",
    url: "https://www.freepik.com/blog/custom-ai/",
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

