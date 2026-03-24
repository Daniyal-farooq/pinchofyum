"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923018641384?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 bg-foreground text-background text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Order on WhatsApp
      </span>
    </a>
  )
}
