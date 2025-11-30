'use client'

import { useTracking } from '@/hooks/useTracking'
import { useEffectEvent, useLayoutEffect } from 'react'

export function Cookiebot() {
  const loadScript = useEffectEvent(() => {
    const script = document.createElement('script')
    script.src =
      'https://consent.cookiebot.eu/uc.js?cbid=d1c8b3c5-f11b-4020-ba46-349a7a015efa'
    script.async = true
    script.type = 'text/javascript'
    script.setAttribute('data-blockingmode', 'auto')
    document.head.appendChild(script)

    return script
  })

  useLayoutEffect(() => {
    const script = loadScript()

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  useTracking()

  return <></>
}
