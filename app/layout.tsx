import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Open_Sans } from 'next/font/google'

import '../styles/globals.css'
import '../styles/embla.css'

import { Header } from '@/components/templates/Navigation'
import { Footer } from '@/components/templates/Footer'
import {
  defaultMetadata,
  generateOrganizationSchema,
  generateServiceSchema,
  generateWebsiteSchema,
} from '@/lib/seo'
import { strings } from '@/lib/strings'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Optimize font loading
  fallback: ['system-ui', 'arial'], // Fallback fonts
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
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
  const serviceSchema = generateServiceSchema()

  return (
    <html
      lang='en'
      className={`${inter.variable} ${openSans.variable} antialiased`}
    >
      <head>
        {/* Meta Pixel Code */}
        <Script
          id='meta-pixel'
          strategy='afterInteractive'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: needs to be like
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '902278969191076');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
        <Script
          strategy='beforeInteractive'
          id='Cookiebot'
          src='https://consent.cookiebot.eu/uc.js?cbid=d1c8b3c5-f11b-4020-ba46-349a7a015efa'
          data-blockingmode='auto'
          type='text/javascript'
        />
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
        <Script
          type='application/ld+json'
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: Web schemas require dynamic content for structured data */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          type='application/ld+json'
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: Web schemas require dynamic content for structured data */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          type='application/ld+json'
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: Web schemas require dynamic content for structured data */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className='font-sans'>
        {/* Skip to main content for accessibility */}
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all'
        >
          {strings.layout.accessibility.skipToMain}
        </a>

        <Header />
        {/* Main content wrapper with top padding to account for fixed header (80px) */}
        <main id='main-content' className='pt-20'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
