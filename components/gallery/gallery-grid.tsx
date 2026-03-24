"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop",
    alt: "Fresh colorful salad",
    category: "Salads",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop",
    alt: "Healthy vegetable bowl",
    category: "Salads",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    alt: "Grilled meat platter",
    category: "Entrées",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop",
    alt: "Decadent dessert",
    category: "Desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop",
    alt: "Gourmet pizza",
    category: "Entrées",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop",
    alt: "Breakfast pancakes",
    category: "Desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=600&fit=crop",
    alt: "Pasta dish",
    category: "Entrées",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop",
    alt: "Fresh salad bowl",
    category: "Salads",
  },
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop",
    alt: "Chocolate cake",
    category: "Desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=600&fit=crop",
    alt: "Asian noodles",
    category: "Entrées",
  },
  {
    src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=600&fit=crop",
    alt: "Fruit dessert",
    category: "Desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=600&fit=crop",
    alt: "Fresh ingredients",
    category: "Salads",
  },
]

const categories = ["All", "Salads", "Entrées", "Desserts"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Filter Buttons */}
        <SlideIn>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </SlideIn>

        {/* Gallery Grid */}
        <StaggerContainer
          direction="up"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          childClassName=""
        >
          {filteredImages.map((image, index) => (
            <StaggerItem key={index} direction="up">
              <div
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-card font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Instagram CTA */}
        <SlideIn delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Follow us on Instagram for more delicious updates!
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              <a
                href="https://www.instagram.com/pinchofyumbyeesha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram size={20} />
                @pinchofyumbyeesha
              </a>
            </Button>
          </div>
        </SlideIn>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-card hover:text-card/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-4xl w-full aspect-square">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
