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
  { title: "AI & Design Summit", date: "October 2024", location: "San Francisco", image: "/placeholder.svg" },
  { title: "Creative Tech Conference", date: "September 2024", location: "San Francisco", image: "/placeholder.svg" },
  { title: "Future of Creativity", date: "August 2024", location: "San Francisco", image: "/placeholder.svg" },
  { title: "Design Systems Workshop", date: "July 2024", location: "San Francisco", image: "/placeholder.svg" },
  { title: "AI Tools Showcase", date: "June 2024", location: "San Francisco", image: "/placeholder.svg" },
  { title: "Creative Innovation Summit", date: "May 2024", location: "San Francisco", image: "/placeholder.svg" },
]

export function PastEventsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  // Add inView detection
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-10% 0px",
  })

  // Duplicate array to create infinite effect
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

  // Update autoplay based on visibility
  useEffect(() => {
    if (isInView) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isInView])

  useEffect(() => {
    if (currentIndex >= pastEvents.length + ITEMS_PER_VIEW) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(ITEMS_PER_VIEW)
      }, TRANSITION_DURATION)
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(pastEvents.length)
      }, TRANSITION_DURATION)
    } else {
      setIsTransitioning(true)
    }
  }, [currentIndex])

  const handlePrevious = () => {
    stopAutoPlay()
    setCurrentIndex((current) => current - 1)
    if (isInView) startAutoPlay()
  }

  const handleNext = () => {
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

  const currentSlide = currentIndex % pastEvents.length
  const itemOffset = ITEM_WIDTH + GAP

  return (
    <div
      ref={ref}
      className="relative overflow-x-hidden"
      role="region"
      aria-label="Past events slideshow"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
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
                className="w-[620px] flex-none"
                role="group"
                aria-roledescription="slide"
                aria-label={`${(index % pastEvents.length) + 1} of ${pastEvents.length}`}
              >
                <div>
                  <div className="mb-4 overflow-hidden rounded-2xl" style={{ height: "450px" }}>
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={`Photo from ${event.title}`}
                      width={620}
                      height={450}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <div className="font-semibold">{event.title}</div>
                    <div className="text-sm text-gray-400">{event.date}</div>
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

            <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Slideshow controls">
              <div className="flex items-center gap-1" role="tablist" aria-label="Slides">
                {pastEvents.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-white" : "bg-gray-600"
                    }`}
                    role="tab"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-selected={currentSlide === index}
                    onClick={() => {
                      stopAutoPlay()
                      setCurrentIndex(index + ITEMS_PER_VIEW)
                      if (isInView) startAutoPlay()
                    }}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="sr-only" aria-live="polite">
        {`Showing events ${currentSlide + 1} to ${Math.min(currentSlide + ITEMS_PER_VIEW, pastEvents.length)} of ${
          pastEvents.length
        }`}
      </div>
    </div>
  )
}

