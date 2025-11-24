'use client'

import { envs } from '@/lib/envs'

export function GoogleAnalyticsIframe() {
  // Don't load Google Tag Manager in development mode
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <noscript
      // biome-ignore lint/security/noDangerouslySetInnerHtml: google tag manager requires a fragment
      dangerouslySetInnerHTML={{
        __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${envs.GOOGLE_TAG_MANAGER_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
      }}
    />
  )
}
