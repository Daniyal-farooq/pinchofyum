"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  childClassName?: string
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  }
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.12,
  direction = "up",
  childClassName
}: StaggerContainerProps) {
  const customContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={customContainerVariants}
      className={cn(className)}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants[direction]}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={childClassName}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export function StaggerItem({ children, className, direction = "up", delay = 0 }: StaggerItemProps) {
  return (
    <motion.div
      variants={itemVariants[direction]}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
