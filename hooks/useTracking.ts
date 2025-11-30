'use client'

import { envs } from '@/lib/envs'
import type { Mixpanel, OverridedMixpanel } from 'mixpanel-browser'
import mixpanel from 'mixpanel-browser'
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
 * Handles cookiebot consent and inits mixpanel for tracking
 */
export function useTracking() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!envs.MIXPANEL_TOKEN) {
      throw new TypeError('Mixpanel token is missing! Check your .env file.')
    }
    mixpanel.init(envs.MIXPANEL_TOKEN, {
      opt_out_tracking_by_default: true,
      record_sessions_percent: 50,
      record_mask_text_selector: '',
      track_pageview: true,
      autocapture: true,
      record_heatmap_data: true,
      api_host: 'https://api-eu.mixpanel.com',

      loaded: (mixpanelIn) => {
        const isConsentedToTrack: boolean =
          // @ts-expect-error
          Cookiebot?.consented &&
          // @ts-expect-error
          Cookiebot?.consent?.marketing
        optInOutTracking(isConsentedToTrack, mixpanelIn)
      },
    })
  }, [])

  // CookieBot event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return

    const onAcceptOrDecline = () => {
      // Mix panel is classified as marketing cookie Needs to be ignored by TS
      // since this comes from the script itself from cookiebot no other way
      // https://www.cookiebot.com/en/developer/
      const consent: boolean =
        // @ts-expect-error
        Cookiebot?.consented &&
        // @ts-expect-error
        Cookiebot?.consent?.marketing

      optInOutTracking(consent, mixpanel)
    }

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
