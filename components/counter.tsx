"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function Counter({ end, duration = 1000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      // Calculate starting point based on number of digits
      const startValue = Math.pow(10, end.toString().length - 1)
      setCount(startValue)

      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime
        }

        const progress = (currentTime - startTime) / duration

        if (progress < 1) {
          const currentCount = Math.floor(startValue + (end - startValue) * progress)
          setCount(currentCount)
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [end, duration, inView])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

