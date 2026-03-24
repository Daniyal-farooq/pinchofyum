"use client"

import { SlideIn } from "@/components/animations/slide-in"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <SlideIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a question or want to place an order? We would love to hear from you!
            </p>
          </div>
        </SlideIn>
      </div>
    </section>
  )
}
