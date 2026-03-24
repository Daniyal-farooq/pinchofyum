import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Pinch of Yum by Eesha",
  description: "Get in touch with Pinch of Yum by Eesha. Place orders via WhatsApp, Instagram, or Facebook. We deliver in Faisalabad, Pakistan.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
