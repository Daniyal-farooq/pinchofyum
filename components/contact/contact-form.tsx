"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"
import { SlideIn } from "@/components/animations/slide-in"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Create WhatsApp message with form data
    const whatsappMessage = `Hi, I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/923018641384?text=${encodeURIComponent(whatsappMessage)}`

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[500px] text-center">
        <CheckCircle size={64} className="text-primary mb-4" />
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We will get back to you soon!
        </p>
      </div>
    )
  }

  return (
    <SlideIn direction="right">
      <div className="bg-card rounded-2xl p-8 shadow-sm">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your order or inquiry..."
              rows={5}
              required
              className="bg-background border-border focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send size={18} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </SlideIn>
  )
}
