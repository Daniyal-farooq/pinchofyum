import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ayesha K.",
    text: "The Tres Leches Cake was absolutely divine! Perfect for our family gathering. Will definitely order again.",
    rating: 5,
  },
  {
    name: "Fatima S.",
    text: "Best homemade food in Faisalabad! The Thai Green Curry was authentic and delicious. Highly recommended!",
    rating: 5,
  },
  {
    name: "Zara M.",
    text: "Ordered the grazing platter for my party - everyone loved it! Beautiful presentation and amazing taste.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote size={40} className="absolute top-4 right-4 text-secondary" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">{`"${testimonial.text}"`}</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                </div>
                <span className="font-medium text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
