import { Metadata } from "next"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | Pinch of Yum by Eesha",
  description: "Explore our food gallery featuring delicious salads, entrées, and desserts. See our culinary creations from Pinch of Yum by Eesha.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}
