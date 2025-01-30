"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"

const SLIDE_DURATION = 5000
const TRANSITION_DURATION = 500
const ITEMS_PER_VIEW = 2
const ITEM_WIDTH = 620
const GAP = 20

interface PastEvent {
  title: string
  date: string
  location: string
  image: string
}

const pastEvents: PastEvent[] = [
  {
    title: "Magnetic Presence - The Art of Unshakeable Confidence",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16_Magnetic%20Presence%20-%20The%20Art%20of%20Unshakeable%20Confidence%20and%20Relationship-Building-8GdCWpq281UM8j2M5tfcX7rvpEJtri.webp",
  },
  {
    title: "Gen Battle SF - Make A Short Film with AI Tools",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15_Gen%20Battle%20SF%20Make%20A%20Short%20Film%20with%20AI%20Tools-Mz03Yy2Aa89ZrYQaBeQNYhmIjRQto0.webp",
  },
  {
    title: "ElevenLabs x a16z Conversational AI Meetup",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14_ElevenLabs%20x%20a16z%20Conversational%20AI%20Meetup-lgzJgzyvDcdJFGvBtapSm3YMXzDB05.webp",
  },
  {
    title: "Authentic Authority",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11_Authentic%20Authority-DPv6njdBmgIUeNE2S0VeIKPmRahHVz.webp",
  },
  {
    title: "Project Odyssey Gala",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10_Project%20Odyssey%20Gala-qnwIsel7kUFUSbLoAIvPRWxtwWz3g7.webp",
  },
  {
    title: "Women in Tech Amplified Voices",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09_Women%20in%20Tech%20Amplified%20Voices-zKrUO0AeluJ2qrihEfJgsL4NoTaxwg.webp",
  },
  {
    title: "Become an AI Designer with Freepik",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_Become%20an%20AI%20Designer%20with%20Freepik-ITu25qjX2kJoHiG9t6ZZ1VI8JyVBtm.webp",
  },
  {
    title: "Neighborhood Design by Freepik",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02_Neighborhood%20Design%20by%20Freepik%20(Video)-eESJzw94oQXszODTIcGJ9f3s6wDddi.webp",
  },
  {
    title: "Own Your Reputation + Attract Opportunities",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03_Own%20Your%20Reputation%20+%20Attract%20Opportunities-xrb1KaaxWYI5nRUyWCqM4x3hQX9Bpl.webp",
  },
  {
    title: "Config Conference",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04_Config%20Conference-fdcPiLsP2ntHdHlsoJEaCKwSGOPkEW.webp",
  },
  {
    title: "Next-Gen Narratives - AI's Role in the Future of Film",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05_Next-Gen%20Narratives%20-%20AIs%20Role%20in%20the%20Future%20of%20Film-JGCHOycNYorqOIkCc0hfCuWkFhD1Iq.webp",
  },
  {
    title: "Creatives Meetup: Gaming and AI at GDC",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06_Creatives%20Meetup%20Gaming%20and%20AI%20at%20GDC-SjlJR7XfFvaIlN0UERbt2SHxsoSvgi.webp",
  },
  {
    title: "Redefining Design with AI",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07_Redefining%20Design%20with%20AI-0LIoif7jmIulVIsE4g5zD3mVLH6DSK.webp",
  },
  {
    title: "Defeat the Imposter",
    date: "",
    location: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08_Defeat%20the%20Imposter-23PoIbFZdbkOcQvywxgmAlJ1rQXLeD.webp",
  },
]

export function PastEventsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_VIEW)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()
  const isLooping = useRef(false)

  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-10% 0px",
  })

  const extendedEvents = Array.from({ length: 3 }, () => pastEvents).flat()

  const startAutoPlay = () => {
    stopAutoPlay()
    if (pastEvents.length <= ITEMS_PER_VIEW) return

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

    if (currentIndex >= pastEvents.length + ITEMS_PER_VIEW) {
      isLooping.current = true
      setTimeout(() => {
        setCurrentIndex(ITEMS_PER_VIEW)
      }, TRANSITION_DURATION)
    } else if (currentIndex <= 0) {
      isLooping.current = true
      setTimeout(() => {
        setCurrentIndex(pastEvents.length)
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
      className="relative -mx-4 px-4 md:-mx-8 md:px-8"
      role="region"
      aria-label="Past events slideshow"
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
            {extendedEvents.map((event, index) => (
              <div
                key={`${event.title}-${index}`}
                className="w-[620px] flex-none group"
                role="group"
                aria-roledescription="slide"
                aria-label={`${(index % pastEvents.length) + 1} of ${pastEvents.length}`}
              >
                <div>
                  <div className="mb-4 overflow-hidden rounded-2xl" style={{ height: "450px" }}>
                    <Image
                      src={event.image || "assets/placeholder.svg"}
                      alt={`Photo from ${event.title}`}
                      width={620}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <div className="font-semibold">{event.title}</div>
                    <div className="text-sm text-gray-400">
                      {event.date || event.location ? `${event.date} • ${event.location}` : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {pastEvents.length > ITEMS_PER_VIEW && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12 rounded-full"
              onClick={handlePrevious}
              aria-label="Previous events"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12 rounded-full"
              onClick={handleNext}
              aria-label="Next events"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      <div className="sr-only" aria-live="polite">
        {`Showing events ${Math.ceil(currentIndex / ITEMS_PER_VIEW)} of ${Math.ceil(
          pastEvents.length / ITEMS_PER_VIEW
        )} pages`}
      </div>
    </div>
  )
}

export function PastEventsSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 id="past-events-heading" className="title-h2 leading-tight px-1">
          Past Events
        </h2>
        <p className="text-base text-gray-400 max-w-3xl px-1">A legacy of innovation building a community of creators</p>
      </div>

      <PastEventsSlideshow />
    </div>
  )
}