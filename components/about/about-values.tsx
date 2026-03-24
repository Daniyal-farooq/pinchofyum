"use client"

import { Heart, Award, Users, Leaf } from "lucide-react"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with passion and care, just like homemade food should be.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the freshest ingredients to ensure quality in every bite.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on taste or hygiene, delivering excellence always.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We customize to make you smile.",
  },
]

export function AboutValues() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <SlideIn>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
              What We Stand For
            </h2>
          </div>
        </SlideIn>

        <StaggerContainer
          direction="up"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          childClassName=""
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-background hover:bg-secondary/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
