"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeScaleProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  scale?: number
}

export function FadeScale({
  children,
  className,
  delay = 0,
  duration = 0.5,
  scale = 0.9
}: FadeScaleProps) {
  const variants: Variants = {
    hidden: { opacity: 0, scale },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
