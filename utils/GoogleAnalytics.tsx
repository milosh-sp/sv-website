'use client'

import Script from 'next/script'
import { envs } from '@/lib/envs'

export function GoogleAnalytics() {
  // Don't load Google Tag Manager in development mode
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <>
      <Script
        id='google-tag-manager'
        strategy='afterInteractive'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Tag Manager requires a fragment
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${envs.GOOGLE_TAG_MANAGER_ID}');
          `,
        }}
      />
      <Script
        id='gtm-script'
        src={`https://www.googletagmanager.com/gtm.js?id=${
          envs.GOOGLE_TAG_MANAGER_ID
        }`}
        strategy='afterInteractive'
      />
    </>
  )
}
