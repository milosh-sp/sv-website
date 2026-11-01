'use client'

import { envs } from '@/lib/envs'
import type { Mixpanel, OverridedMixpanel } from 'mixpanel-browser'
import { useEffect } from 'react'

/**
 * Opts in and out (DEFAULT) of tracking depending if GDPR regulations apply
 */
const optInOutTracking = (
  optIn: boolean,
  mixpanelIn: Mixpanel | OverridedMixpanel
) => {
  if (optIn) {
    mixpanelIn.set_config({ ignore_dnt: true })
    mixpanelIn.opt_in_tracking()
  } else {
    mixpanelIn.opt_out_tracking()
  }
}

/**
 * Mixpanel is classified as a marketing cookie. `Cookiebot` is a global
 * injected by the Cookiebot script itself, so TS has to ignore it
 * https://www.cookiebot.com/en/developer/
 */
const hasMarketingConsent = (): boolean =>
  // @ts-expect-error
  Boolean(window.Cookiebot?.consented && window.Cookiebot?.consent?.marketing)

/**
 * Handles cookiebot consent and inits mixpanel for tracking. Mixpanel is only
 * downloaded once the user consents, keeping it off the initial page load.
 */
export function useTracking() {
  useEffect(() => {
    // Disable tracking in development mode
    if (process.env.NODE_ENV === 'development') return

    if (!envs.MIXPANEL_TOKEN) {
      throw new TypeError('Mixpanel token is missing! Check your .env file.')
    }
    const token = envs.MIXPANEL_TOKEN
    let isMixpanelLoaded = false

    const onAcceptOrDecline = async () => {
      const consent = hasMarketingConsent()
      // Nothing to opt out of if mixpanel was never loaded
      if (!consent && !isMixpanelLoaded) return

      const { default: mixpanel } = await import('mixpanel-browser')

      if (!isMixpanelLoaded) {
        isMixpanelLoaded = true
        mixpanel.init(token, {
          opt_out_tracking_by_default: true,
          record_sessions_percent: 50,
          record_mask_text_selector: '',
          track_pageview: true,
          autocapture: true,
          record_heatmap_data: true,
          api_host: 'https://api-eu.mixpanel.com',
        })
      }

      optInOutTracking(consent, mixpanel)
    }

    // Consent may already be resolved before hydration (returning visitor)
    onAcceptOrDecline()

    // The event is triggered if the user accepts the use of cookies.
    // The event is also triggered if the user has consented at an earlier visit to the website.
    window.addEventListener('CookiebotOnAccept', onAcceptOrDecline)
    // The event is triggered if the user declines the use of cookies by clicking the decline-button
    // in the cookie consent dialog.
    // The event is also triggered if the user already has declined at an earlier visit to the website.
    window.addEventListener('CookiebotOnDecline', onAcceptOrDecline)

    return () => {
      window.removeEventListener('CookiebotOnAccept', onAcceptOrDecline)
      window.removeEventListener('CookiebotOnDecline', onAcceptOrDecline)
    }
  }, [])
}
