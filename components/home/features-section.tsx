import { Utensils, Heart, Sparkles, Award } from "lucide-react"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

const features = [
  {
    icon: Utensils,
    title: "Fresh Ingredients",
    description: "We use only the freshest, highest quality ingredients in all our dishes.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is crafted with passion and care, just like homemade.",
  },
  {
    icon: Sparkles,
    title: "Unique Recipes",
    description: "Our signature recipes blend traditional flavors with modern twists.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "We maintain the highest standards of hygiene and taste in every order.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <SlideIn>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
              What Makes Us Special
            </h2>
          </div>
        </SlideIn>

        <StaggerContainer
          direction="up"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          childClassName=""
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background hover:bg-secondary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
