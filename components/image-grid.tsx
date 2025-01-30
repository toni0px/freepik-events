"use client"

import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

type ImageItem = {
  id: number
  height: "small" | "large"
  src: string
  alt: string
  columnIndex: number
  position: "top" | "bottom"
}

const SMALL_HEIGHT = 280
const LARGE_HEIGHT = 400

function getImageHeight(columnIndex: number, position: "top" | "bottom"): "small" | "large" {
  if (columnIndex % 2 === 0) {
    return position === "top" ? "small" : "large"
  }
  return position === "top" ? "large" : "small"
}

// Blur data URLs generados para cada imagen (versión muy pequeña y borrosa de cada imagen)
const images: ImageItem[] = [
  {
    id: 1,
    height: "small",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_01-1-5Gj2UKGzkqjXLUo8duOD7mJSLe6A84.webp",
    alt: "Speaker in black blazer presenting to a full audience in a modern office space with yellow chairs and blue rug",
    columnIndex: 0,
    position: "top",
  },
  {
    id: 2,
    height: "large",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_02-uCOYNq0vIkbIzzFIFo8pTDBIBQdwhr.webp",
    alt: "Audience members sitting on couches during presentation",
    columnIndex: 1,
    position: "top",
  },
  {
    id: 3,
    height: "small",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_03-d6mUga6sRINgH5omjPdBof19L8uzPr.webp",
    alt: "Colorful folding chairs arranged with Freepik banner",
    columnIndex: 2,
    position: "top",
  },
  {
    id: 4,
    height: "large",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_04-1-vSSExPTpN59tBMymDTDA3jUgi4mUv4.webp",
    alt: "Person in orange patterned shirt speaking at event with white built-in shelving and plants",
    columnIndex: 3,
    position: "top",
  },
  {
    id: 5,
    height: "large",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_05-rFm1CjeZsD5gsyL82mEmaaxLPTm5mh.webp",
    alt: "Speaker presenting to audience in modern office space",
    columnIndex: 0,
    position: "bottom",
  },
  {
    id: 6,
    height: "small",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_06-Fz93v2aEhr99Qf3HMojmYDpMlBEaJS.webp",
    alt: "Modern lounge area with blue and yellow armchairs",
    columnIndex: 1,
    position: "bottom",
  },
  {
    id: 7,
    height: "large",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_07-1-4gxDTVlke6Bl0wZrnadLUBdlf9Zu7e.webp",
    alt: "Women in Tech panel discussion about Mastering Difficult Conversations with multiple speakers and audience members",
    columnIndex: 2,
    position: "bottom",
  },
  {
    id: 8,
    height: "small",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall_08-U5jjzdEbzWyNxdIuMxUlKlWgeMr5pl.webp",
    alt: "Group photo of event attendees",
    columnIndex: 3,
    position: "bottom",
  },
]

export function ImageGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const [isMultiColumn, setIsMultiColumn] = useState(false)

  useEffect(() => {
    const checkColumns = () => {
      setIsMultiColumn(window.innerWidth >= 640)
    }

    checkColumns()
    window.addEventListener("resize", checkColumns)

    return () => window.removeEventListener("resize", checkColumns)
  }, [])

  const evenColumnY = useTransform(scrollYProgress, [0, 1], [60, 0])

  const columns = images.reduce(
    (acc, img) => {
      if (!acc[img.columnIndex]) {
        acc[img.columnIndex] = []
      }
      acc[img.columnIndex].push(img)
      return acc
    },
    {} as Record<number, ImageItem[]>,
  )

  return (
    <div className="space-y-16" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="text-center"
      >
        <h3 className="title-h3 leading-tight">
          We help others turn their ideas into great
          <br />
          designs faster, easier and better.
        </h3>
      </motion.div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Object.values(columns).map((columnImages, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col gap-5"
            style={{
              y: isMultiColumn && colIndex % 2 === 0 ? evenColumnY : 0,
            }}
          >
            {columnImages.map((image, imgIndex) => {
              const isPriority = colIndex < 2 && imgIndex === 0 // Prioriza las primeras 4 imágenes (2 columnas x 1 imagen)
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: colIndex * 0.2 + imgIndex * 0.1,
                    ease: [0.21, 0.45, 0.27, 0.9],
                  }}
                  className="overflow-hidden rounded-[24px] relative"
                  style={{
                    height: getImageHeight(image.columnIndex, image.position) === "small" ? SMALL_HEIGHT : LARGE_HEIGHT,
                  }}
                >
                  <Image
                    src={image.src || "assets/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={getImageHeight(image.columnIndex, image.position) === "small" ? SMALL_HEIGHT : LARGE_HEIGHT}
                    className="h-full w-full object-cover bg-[#1C1C1C]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={isPriority}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

