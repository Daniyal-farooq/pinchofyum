import { Button } from "@/components/ui/button"
import { Phone, Instagram, Facebook } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Order?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Place your order at least one day in advance via WhatsApp, Instagram, or Facebook. 
              We deliver across Faisalabad!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8"
              >
                <a
                  href="https://wa.me/923018641384?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone size={18} />
                  Order via WhatsApp
                </a>
              </Button>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/pinchofyumbyeesha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/pinchofyumbyeesha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            <p className="text-primary-foreground/60 text-sm mt-6">
              Contact: 0301 8641384 | eeshaumershafi@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
