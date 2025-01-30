"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"

const SLIDE_DURATION = 5000
const TRANSITION_DURATION = 500
const ITEMS_PER_VIEW = 4
const ITEM_WIDTH = 260
const GAP = 20

interface Speaker {
  name: string
  position: string
  company: string
  image: string
}

const speakers: Speaker[] = [
  {
    name: "Adrian Mató",
    position: "Designer and Developer Tool Builder",
    company: "GitHub",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adrian%20Mato-RYHUNPvuhgE12KLe91Eid8uKvWDTaR.webp",
  },
  {
    name: "Emilio Nicolas",
    position: "Co-Founder",
    company: "Magnific AI",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emilio%20Nicolas-7xKR45NCPVmOUoAJeeH1iZ5BlINdWx.webp",
  },
  {
    name: "Grace Ling",
    position: "Founder",
    company: "Design Buddies",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grace%20Ling-aUpFGw7JWqOMGCg5gWJxCT0VjFm14E.webp",
  },
  {
    name: "Javier Lopez",
    position: "Co-Founder",
    company: "Magnific AI",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/javier%20Lopez-xqA1JCiAiE96nwixSMAW7oWwr4lb7s.webp",
  },
  {
    name: "Joaquin Cuenca",
    position: "CEO & Co-founder",
    company: "Freepik Company",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Joaquin_Cuenca-2RTWViVi0AR1kelWNbGGTX45tmSZiT.webp",
  },
  {
    name: "Joshua Soto",
    position: "Co-Founder",
    company: "OpenLicense",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joshua_soto-pHG1M5O7WgJNENFMQgeDhb0IIq6Zyr.webp",
  },
  {
    name: "Justin Hackney",
    position: "Creative Director",
    company: "ElevenLabs",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/justin_hackney-CASqnlZHHMUJTR7RPyF4S7SSwd8tfN.webp",
  },
  {
    name: "Justin Maier",
    position: "Founder & CEO",
    company: "Civitai",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/justin_maier-VnwIh2pMzp2UmyJkbDnLygoYC634cy.webp",
  },
  {
    name: "Lilibeth Bustos",
    position: "Founder",
    company: "SoulDoodles",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lilibeth%20Bustos-iM6atkDM2YwB0AxwDeJIwSeDGSs901.webp",
  },
  {
    name: "Linus Ekenstam",
    position: "Product Designer & Entrepreneur",
    company: "Independent",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linus%20Ekenstam-2z6pRcwFvplpUEdiSyrRNighQDQoY6.webp",
  },
  {
    name: "Mariana",
    position: "Multidisciplinary Artist and Designer",
    company: "Independent",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mariana-oo2WRvAFrtHHtejpJBPhzjS8nzZzjO.webp",
  },
  {
    name: "Matty Shimura",
    position: "Filmmaker and Project Manager",
    company: "Independent",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Shimura-JVUYv2W3nhq4o7eJmsDhsCCZinbsC0.webp",
  },
  {
    name: "Minh Do",
    position: "AI Filmmaker, Educator, Speaker",
    company: "Independent",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minh%20Do-rlePgdHiVGF3Q3PRO9cz6vxbj0SGlX.webp",
  },
  {
    name: "Minta",
    position: "Promptcrafted, Artist, and Illustrator",
    company: "Independent",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minta-wKqEN35Lpg5CAtW3Km1ZJqxj8GhXKV.webp",
  },
  {
    name: "Nima Zeighami",
    position: "Director of Product",
    company: "Leia Inc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nima%20Zeighami-jDe5StoYhyFcmpsIiPlk44YgBdvsQO.webp",
  },
  {
    name: "Sara Anderson",
    position: "Coach",
    company: "Independent",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sara%20Anderson-fxQRAahHKJh2ad385ESQ2nOYiPJReR.webp",
  },
  {
    name: "Stacie Chan",
    position: "Business & Operations Lead",
    company: "Haiper.ai",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stacie%20Chan-DB88swH4xVbJWGMlkhv5lEykfTeeTa.webp",
  },
  {
    name: "Yoko-Li",
    position: "Cartoonist, Engineer",
    company: "Andreessen Horowitz",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yoko-Li-a2hXu3gJbqlGdS0gdxSfEtRyHvqi5Y.webp",
  },
]

export function SpeakersSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_VIEW)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()
  const isLooping = useRef(false)

  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-10% 0px",
  })

  const extendedSpeakers = Array.from({ length: 3 }, () => speakers).flat()

  const startAutoPlay = () => {
    stopAutoPlay()
    if (speakers.length <= ITEMS_PER_VIEW) return

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((current) => current + 1)
    }, SLIDE_DURATION)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  useEffect(() => {
    if (isInView) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isInView])

  useEffect(() => {
    if (isLooping.current) {
      setIsTransitioning(false)
      isLooping.current = false
      return
    }

    setIsTransitioning(true)

    if (currentIndex >= speakers.length + ITEMS_PER_VIEW) {
      isLooping.current = true
      setTimeout(() => {
        setCurrentIndex(ITEMS_PER_VIEW)
      }, TRANSITION_DURATION)
    } else if (currentIndex <= 0) {
      isLooping.current = true
      setTimeout(() => {
        setCurrentIndex(speakers.length)
      }, TRANSITION_DURATION)
    }
  }, [currentIndex])

  const handlePrevious = () => {
    if (isLooping.current) return
    stopAutoPlay()
    setCurrentIndex((current) => current - 1)
    if (isInView) startAutoPlay()
  }

  const handleNext = () => {
    if (isLooping.current) return
    stopAutoPlay()
    setCurrentIndex((current) => current + 1)
    if (isInView) startAutoPlay()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        handlePrevious()
        break
      case "ArrowRight":
        handleNext()
        break
    }
  }

  const itemOffset = ITEM_WIDTH + GAP

  return (
    <div
      ref={ref}
      className="relative overflow-x-hidden"
      role="region"
      aria-label="Speakers slideshow"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={() => isInView && startAutoPlay()}
      tabIndex={0}
    >
      <div className="relative overflow-hidden" ref={sliderRef} aria-live="polite" aria-atomic="true">
        <div
          className="flex transition-transform ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * itemOffset}px)`,
            transition: isTransitioning ? `transform ${TRANSITION_DURATION}ms` : "none",
          }}
          role="presentation"
        >
          <div className="flex gap-5">
            {extendedSpeakers.map((speaker, index) => (
              <div
                key={`${speaker.name}-${index}`}
                className="w-[260px] flex-none group"
                role="group"
                aria-roledescription="slide"
                aria-label={`${(index % speakers.length) + 1} of ${speakers.length}`}
              >
                <div>
                  <div className="mb-4 overflow-hidden rounded-lg" style={{ height: "300px" }}>
                    <Image
                      src={speaker.image || "assets/placeholder.svg"}
                      alt={`Portrait of ${speaker.name}`}
                      width={260}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <div className="font-semibold">{speaker.name}</div>
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">{speaker.company}</span>
                      <br />
                      {speaker.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {speakers.length > ITEMS_PER_VIEW && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12 rounded-full"
              onClick={handlePrevious}
              aria-label="Previous speakers"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12 rounded-full"
              onClick={handleNext}
              aria-label="Next speakers"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      <div className="sr-only" aria-live="polite">
        {`Showing speakers ${Math.ceil(currentIndex / ITEMS_PER_VIEW)} of ${Math.ceil(
          speakers.length / ITEMS_PER_VIEW,
        )} pages`}
      </div>
    </div>
  )
}

