'use client'

import Script from 'next/script'
import { envs } from '@/lib/envs'

export function CookiePolicy() {
  // Don't load CookieYes in development mode
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <Script
      id='cky-cookie-policy'
      src={`https://cdn-cookieyes.com/client_data/${envs.COOKIE_YES_CONSENT}/cookie-policy/script.js`}
      strategy='afterInteractive'
    />
  )
}
