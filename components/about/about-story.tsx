"use client"

import Image from "next/image"
import { SlideIn } from "@/components/animations/slide-in"

export function AboutStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=750&fit=crop"
                  alt="Cooking with love"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/50 rounded-2xl -z-10" />
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                A Passion for Delicious Food
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Pinch of Yum by Eesha! What started as a love for cooking and
                  experimenting with flavours has blossomed into a home-based food business
                  dedicated to bringing joy to your table.
                </p>
                <p>
                  Based in Faisalabad, Pakistan, we specialize in creating delectable dishes
                  that satisfy your cravings - whether you are looking for fresh, healthy salads,
                  hearty entrées, or indulgent desserts.
                </p>
                <p>
                  Every dish is prepared with the freshest ingredients and a whole lot of love.
                  Our signature Tres Leches Cake and Sticky Toffee Date Loaf have become customer
                  favorites, perfect for celebrations or simply treating yourself.
                </p>
                <p>
                  We believe good food brings people together. Whether you are ordering for yourself
                  or sending a special package to your loved ones, we are here to make every meal memorable.
                </p>
              </div>
              <div className="pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jmB3EG8QVM43B6kmXhx11Nfaxg88tX.png"
                  alt="Pinch of Yum by Eesha logo"
                  width={120}
                  height={120}
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
