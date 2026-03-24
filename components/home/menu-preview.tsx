import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

const categories = [
  {
    name: "Salads",
    description: "Fresh & healthy options",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    items: ["Roasted Aubergine", "Thai Chop Salad", "Pasta Salad"],
  },
  {
    name: "Entrées",
    description: "Hearty main courses",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    items: ["Malai Boti Skewers", "Thai Green Curry", "Chicken Shawarma"],
  },
  {
    name: "Desserts",
    description: "Sweet indulgences",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop",
    items: ["Tres Leches Cake", "Skillet Cookie", "Bread Pudding"],
  },
]

export function MenuPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SlideIn>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Menu</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
              Explore Our Categories
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From fresh salads to hearty entrées and decadent desserts, we have something for every craving.
            </p>
          </div>
        </SlideIn>

        <StaggerContainer
          direction="up"
          className="grid md:grid-cols-3 gap-8"
          childClassName=""
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                <h3 className="font-serif text-2xl font-bold mb-1">{category.name}</h3>
                <p className="text-card/80 text-sm mb-3">{category.description}</p>
                <ul className="space-y-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-card/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </StaggerContainer>

        <SlideIn delay={0.3}>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
            >
              <Link href="/menu">
                View Full Menu
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </SlideIn>
      </div>
    </section>
  )
}
