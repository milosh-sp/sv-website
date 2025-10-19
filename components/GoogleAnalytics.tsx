import Script from 'next/script'

/**
 * Google Analytics 4 Component
 *
 * This component implements Google Analytics 4 (GA4) tracking for Next.js 15
 * using the next/script component with afterInteractive strategy for optimal performance.
 *
 * Setup Instructions:
 * 1. Create a .env.local file in the project root
 * 2. Add your GA4 measurement ID: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. Replace G-XXXXXXXXXX with your actual Google Analytics measurement ID
 *
 * The NEXT_PUBLIC prefix makes the environment variable accessible on the client side.
 * The .env.local file is already included in .gitignore to keep your credentials safe.
 */

// Extend the Window interface to include gtag types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: Array<unknown>
  }
}

export function GoogleAnalytics() {
  // Get the measurement ID from environment variables
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  // Don't render analytics in development or if no measurement ID is set
  if (!measurementId || process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Load the gtag.js script with afterInteractive strategy */}
      {/* afterInteractive ensures the script loads after the page is interactive */}
      {/* This prevents blocking the initial page render */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      {/* Initialize the data layer and configure GA4 */}
      <Script
        id='google-analytics-init'
        strategy='afterInteractive'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for Google Analytics 4 initialization
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              // Optional: Enable enhanced measurement features
              send_page_view: true,
              // Optional: Configure cookie settings
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
}

/**
 * Helper function to send custom events to Google Analytics
 *
 * Usage example:
 * import { sendGAEvent } from '@/components/google-analytics'
 *
 * sendGAEvent('button_click', {
 *   category: 'engagement',
 *   label: 'signup_button'
 * })
 */
export function sendGAEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * Helper function to track page views manually
 * Useful for custom routing scenarios
 *
 * Usage example:
 * import { trackPageView } from '@/components/google-analytics'
 *
 * trackPageView('/custom-page')
 */
export function trackPageView(url: string) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (typeof window !== 'undefined' && window.gtag && measurementId) {
    window.gtag('config', measurementId, {
      page_path: url,
    })
  }
}
