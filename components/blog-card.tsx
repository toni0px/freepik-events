"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  url: string // Ahora esta propiedad es requerida
}

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link href={post.url} target="_blank" rel="noopener noreferrer" className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.21, 0.45, 0.27, 0.9],
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="group h-full"
      >
        <Card className="bg-[#1C1C1C] border-0 overflow-hidden transition-colors duration-200 hover:bg-[#1E1E1E] h-full flex flex-col">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden flex-shrink-0">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-sm bg-black/50 backdrop-blur-sm rounded-full text-white">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <time className="text-sm text-gray-400 mb-3">{post.date}</time>
              <h3 className="text-xl font-semibold line-clamp-2 text-white group-hover:text-gray-200 mb-3 tracking-wide">
                {post.title}
              </h3>
              <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}