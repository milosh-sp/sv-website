import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SignupModalProvider } from '@/contexts/SignupModalContext'
import {
  defaultMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '@/lib/seo'
import { strings } from '@/lib/strings'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Optimize font loading
  fallback: ['system-ui', 'arial'], // Fallback fonts
})

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang='en' className={`${inter.variable} antialiased`}>
      <head>
        {/* Preconnect to external domains for performance */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
              rel='preconnect'
              href='https://fonts.gstatic.com'
              crossOrigin='anonymous'
            />
          </>
        )}

        {/* Structured Data */}
        <script
          type='application/ld+json'
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: Web schemas require dynamic content for structured data */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type='application/ld+json'
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: Web schemas require dynamic content for structured data */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className='font-sans'>
        {/* Google Analytics 4 - Loads after page is interactive */}
        <GoogleAnalytics />

        {/* Skip to main content for accessibility */}
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all'
        >
          {strings.layout.accessibility.skipToMain}
        </a>

        <SignupModalProvider>
          <Header />
          <main id='main-content'>{children}</main>
          <Footer />
        </SignupModalProvider>
      </body>
    </html>
  )
}
