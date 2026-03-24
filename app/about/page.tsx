import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Award, Users, Leaf, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Pinch of Yum by Eesha",
  description: "Learn about Pinch of Yum by Eesha - your go-to destination for delicious homemade food in Faisalabad. Discover our story and passion for cooking.",
}

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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              About Us
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The story behind Pinch of Yum by Eesha
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Browse our menu and place your order today. We deliver across Faisalabad!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
            >
              <Link href="/menu">
                View Our Menu
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
