import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us | Pinch of Yum by Eesha",
  description: "Learn about Pinch of Yum by Eesha - your go-to destination for delicious homemade food in Faisalabad. Discover our story and passion for cooking.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </>
  )
}
