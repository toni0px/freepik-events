"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Counter } from "@/components/counter"

interface Metric {
  value: number
  label: string
  suffix?: string
}

const metrics: Metric[] = [
  { value: 32, label: "Number of Events" },
  { value: 34, label: "Number of Speakers" },
  { value: 1164, label: "Number of Attendees" },
]

export function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="space-y-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="text-center"
      >
        <h3 className="title-h3 leading-tight">
          The Numbers Speak
          <br />
          For Themselves
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative py-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.21, 0.45, 0.27, 0.9],
            }}
            className="relative space-y-2"
          >
            <div className="font-['degular'] font-semibold title-h2">
              <Counter end={metric.value} suffix={metric.suffix} />
            </div>
            <div className="text-sm text-gray-400">{metric.label}</div>
            {index < metrics.length - 1 && (
              <div className="hidden md:block absolute right-[-16px] top-1/2 -translate-y-1/2 h-16">
                <div className="w-px h-full bg-gray-700"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

