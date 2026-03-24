import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jmB3EG8QVM43B6kmXhx11Nfaxg88tX.png"
              alt="Pinch of Yum by Eesha"
              width={120}
              height={120}
              className="h-24 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delectable flavours to satisfy your cravings - be it sweet or savoury. 
              Try yourself or send a special package to your loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Menu", "Gallery", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:03018641384" className="hover:text-foreground transition-colors">
                  0301 8641384
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:eeshaumershafi@hotmail.com" className="hover:text-foreground transition-colors">
                  eeshaumershafi@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Faisalabad, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pinchofyumbyeesha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/pinchofyumbyeesha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Order via WhatsApp, Instagram, or Facebook
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pinch of Yum by Eesha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
