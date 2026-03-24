"use client"

import { MenuItem } from "@/lib/menu-data"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

type MenuSectionProps = {
  category: string
  items: MenuItem[]
  index: number
}

export function MenuSection({ category, items, index }: MenuSectionProps) {
  const isEven = index % 2 === 0

  return (
    <section className={`py-8 ${isEven ? "bg-background" : "bg-card"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Header */}
          <SlideIn direction={isEven ? "left" : "right"}>
            <div className="text-center mb-10">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground italic">
                {category}
              </h2>
              <div className="mt-3 flex items-center justify-center gap-4">
                <span className="h-px w-16 bg-primary/30" />
                <span className="text-primary text-2xl">*</span>
                <span className="h-px w-16 bg-primary/30" />
              </div>
            </div>
          </SlideIn>

          {/* Menu Items */}
          <StaggerContainer
            direction="up"
            className="space-y-6"
            childClassName=""
          >
            {items.map((item, itemIndex) => (
              <StaggerItem key={itemIndex} direction="up">
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-colors duration-300">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.sizes && (
                        <div className="mt-2 flex flex-wrap gap-3">
                          {item.sizes.map((size, sizeIndex) => (
                            <span
                              key={sizeIndex}
                              className="text-sm bg-secondary/30 px-3 py-1 rounded-full text-muted-foreground"
                            >
                              {size.size}: {size.price}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <span className="font-semibold text-primary text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 h-px bg-border/50 group-hover:bg-primary/20 transition-colors" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
