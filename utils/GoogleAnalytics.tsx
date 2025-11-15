import Script from 'next/script'

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
