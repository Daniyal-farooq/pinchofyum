import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "0301 8641384",
    href: "tel:03018641384",
  },
  {
    icon: Mail,
    label: "Email",
    value: "eeshaumershafi@hotmail.com",
    href: "mailto:eeshaumershafi@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: null,
  },
  {
    icon: Clock,
    label: "Order Notice",
    value: "Kindly order one day in advance",
    href: null,
  },
]

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/923018641384?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order",
    color: "bg-[#25D366] hover:bg-[#128C7E]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/pinchofyumbyeesha",
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/pinchofyumbyeesha",
    color: "bg-[#1877F2] hover:bg-[#0d6efd]",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Get in Touch</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
          We Would Love to Hear From You
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Ready to place an order or have questions about our menu? Reach out through 
          any of the channels below. We are available on WhatsApp, Instagram, and Facebook 
          for your convenience.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-secondary/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <detail.icon size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="font-medium text-foreground">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Order Via</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
