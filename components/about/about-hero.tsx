"use client"

import { SlideIn } from "@/components/animations/slide-in"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <SlideIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              About Us
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The story behind Pinch of Yum by Eesha
            </p>
          </div>
        </SlideIn>
      </div>
    </section>
  )
}
