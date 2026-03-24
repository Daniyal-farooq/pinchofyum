"use client"

import Image from "next/image"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeScale } from "@/components/animations/fade-scale"

export function MenuHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeScale delay={0.1}>
          <div className="text-center max-w-3xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jmB3EG8QVM43B6kmXhx11Nfaxg88tX.png"
              alt="Pinch of Yum by Eesha"
              width={150}
              height={150}
              className="h-32 w-auto mx-auto mb-6"
            />
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Pinch of Yum brings you delectable flavours to satisfy your cravings -
              be it sweet or savoury. Try yourself or send a special package to your loved ones.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Kindly order one day in advance
            </div>
          </div>
        </FadeScale>
      </div>
    </section>
  )
}
