'use client'

import { envs } from '@/lib/envs'

export function GoogleAnalyticsIframe() {
  // Don't load Google Tag Manager in development mode
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${envs.GOOGLE_TAG_MANAGER_ID}`}
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
        title='Google Tag Manager'
      />
    </noscript>
  )
}
