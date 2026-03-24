import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
})

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Pinch of Yum by Eesha | Delicious Homemade Food in Faisalabad',
  description: 'Pinch of Yum by Eesha brings you delectable flavours to satisfy your cravings - sweet or savoury. Order salads, entrees, and desserts in Faisalabad, Pakistan.',
  keywords: ['food delivery', 'homemade food', 'Faisalabad', 'salads', 'desserts', 'Pakistani cuisine', 'catering'],
  authors: [{ name: 'Eesha' }],
  openGraph: {
    title: 'Pinch of Yum by Eesha',
    description: 'Delectable homemade food delivered to your doorstep in Faisalabad',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#faf5d8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
