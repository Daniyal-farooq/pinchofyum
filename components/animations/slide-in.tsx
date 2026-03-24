"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface SlideInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  distance?: number
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  }
}

export function SlideIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance
}: SlideInProps) {
  const customVariants = distance
    ? {
        hidden: { opacity: 0, [direction === "left" || direction === "right" ? "x" : "y"]: direction === "up" || direction === "left" ? distance : -distance },
        visible: { opacity: 1, [direction === "left" || direction === "right" ? "x" : "y"]: 0 }
      }
    : variants[direction]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={customVariants}
      transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
