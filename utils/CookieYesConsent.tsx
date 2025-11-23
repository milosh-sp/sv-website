'use client'

import { envs } from '@/lib/envs'
import Script from 'next/script'

export function CookieYesConsent() {
  // Don't load CookieYes in development mode
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <Script
      id='cookieyes'
      src={`https://cdn-cookieyes.com/client_data/${envs.COOKIE_YES_CONSENT}/script.js`}
      strategy='afterInteractive'
    />
  )
}
