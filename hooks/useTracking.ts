//Import Mixpanel SDK
import mixpanel from 'mixpanel-browser'
import { useEffect, useEffectEvent } from 'react'
import { envs } from '@/lib/envs'
const { MIXPANEL_TOKEN } = envs

export const useTracking = () => {
  const initMixpanel = useEffectEvent(() => {
    if (!MIXPANEL_TOKEN) {
      console.warn('Mixpanel token is missing! Check your .env file.')
      return
    }

    // Create an instance of the Mixpanel object, your token is already added to
    // this snippet
    mixpanel.init(MIXPANEL_TOKEN, {
      opt_out_tracking_by_default: true,
      ignore_dnt: true,
      autocapture: true,
      record_sessions_percent: 100,
      track_pageview: true,
    })
  })

  useEffect(() => {
    initMixpanel()

    const onAcceptOrDecline = () => {
      // since this comes from the script itself from cookiebot no other way
      // https://www.cookiebot.com/en/developer/
      const consent: boolean =
        // @ts-expect-error
        Cookiebot?.consented &&
        // @ts-expect-error
        Cookiebot?.consent?.marketing

      if (consent) {
        mixpanel.opt_in_tracking()
      } else {
        mixpanel.opt_out_tracking()
      }
    }

    // The event is triggered if the user accepts the use of cookies.
    // The event is also triggered if the user has consented at an earlier visit to the website.
    window.addEventListener('CookiebotOnAccept', onAcceptOrDecline)
    // The event is triggered if the user declines the use of cookies by clicking the decline-button
    // in the cookie consent dialog.
    // The event is also triggered if the user already has declined at an earlier visit to the website.
    window.addEventListener('CookiebotOnDecline', onAcceptOrDecline)
    // Fires when the cookie consent banner is displayed to the end user.

    return () => {
      window.removeEventListener('CookiebotOnAccept', onAcceptOrDecline)
      window.removeEventListener('CookiebotOnDecline', onAcceptOrDecline)
    }
  }, [])
}
