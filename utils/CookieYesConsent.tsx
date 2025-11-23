'use client'

import Script from 'next/script'

export function CookieYesConsent() {
  return (
    <Script
      id='cookieyes'
      src={`https://cdn-cookieyes.com/client_data/${process.env.NEXT_PUBLIC_COOKIEYES_ID}/script.js`}
      strategy='afterInteractive'
    />
  )
}
