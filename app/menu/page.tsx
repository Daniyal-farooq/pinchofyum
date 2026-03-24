import { Metadata } from "next"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuSection } from "@/components/menu/menu-section"
import { menuData } from "@/lib/menu-data"

export const metadata: Metadata = {
  title: "Menu | Pinch of Yum by Eesha",
  description: "Explore our delicious menu featuring fresh salads, hearty entrées, and decadent desserts. Order now for delivery in Faisalabad.",
}

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <div className="py-16 space-y-16">
        {menuData.map((section, index) => (
          <MenuSection
            key={section.category}
            category={section.category}
            items={section.items}
            index={index}
          />
        ))}
      </div>
    </>
  )
}
