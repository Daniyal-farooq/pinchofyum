import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { MenuPreview } from "@/components/home/menu-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MenuPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
