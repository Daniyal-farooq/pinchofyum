"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SlideIn } from "@/components/animations/slide-in"

export function AboutCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SlideIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Browse our menu and place your order today. We deliver across Faisalabad!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
              >
                <Link href="/menu">
                  View Our Menu
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  )
}
