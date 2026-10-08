import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { displayName, portfolioTitle, siteConfig } from '@/config/site'
import './globals.css'

const metadataBase = siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined
const socialImage = metadataBase
  ? new URL(siteConfig.showreel.posterSrc, metadataBase).toString()
  : undefined

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: portfolioTitle,
    template: `%s — ${displayName}`,
  },
  description: siteConfig.description,
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    title: portfolioTitle,
    description: siteConfig.description,
    ...(socialImage
      ? {
          images: [
            {
              url: socialImage,
              alt: 'Generated placeholder poster for the showreel',
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioTitle,
    description: siteConfig.description,
    ...(socialImage ? { images: [socialImage] } : {}),
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080a0c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
