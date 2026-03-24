"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChefHat, Clock, Truck } from "lucide-react"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeScale } from "@/components/animations/fade-scale"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNjN2M1YWQiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <SlideIn direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
                <ChefHat size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground/80">Homemade with Love</span>
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
                Delectable Flavours to{" "}
                <span className="text-primary italic">Satisfy</span> Your Cravings
              </h1>
            </SlideIn>

            <SlideIn direction="left" delay={0.3}>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Be it sweet or savoury, Pinch of Yum by Eesha brings you exquisite homemade
                dishes crafted with passion. Try yourself or send a special package to your loved ones.
              </p>
            </SlideIn>

            <SlideIn direction="left" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
                >
                  <Link href="/menu">
                    Explore Menu
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href="https://wa.me/923018641384?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                  </a>
                </Button>
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.5}>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={18} className="text-primary" />
                  <span>Order 1 Day in Advance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck size={18} className="text-primary" />
                  <span>Faisalabad Delivery</span>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Image */}
          <FadeScale delay={0.3}>
            <div className="relative lg:h-150 flex items-center justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
                {/* Decorative circles */}
                <div className="absolute inset-0 bg-secondary/30 rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-secondary/50 rounded-full" />

                {/* Main image container */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
                    alt="Delicious fresh salad with colorful vegetables"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-lg animate-bounce-slow">
                  <div className="text-center">
                    <span className="text-2xl font-serif font-bold text-primary">100+</span>
                    <p className="text-xs text-muted-foreground">Happy Customers</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">🍲</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Fresh Daily</p>
                      <p className="text-xs text-muted-foreground">Made to Order</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeScale>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
