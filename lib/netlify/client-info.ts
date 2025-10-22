import type { HandlerEvent } from '@netlify/functions'
import type { ClientIPAndCountry } from '../../types/netlify.types'

function extractClientIPAndCountry(event: HandlerEvent): ClientIPAndCountry {
  const forwardedFor = event.headers['x-forwarded-for'] ?? ''
  const country = event.headers['x-country'] ?? ''

  if (forwardedFor) {
    return {
      clientIp: forwardedFor.split(',')[0].trim(),
      country,
    }
  }

  const realIP = event.headers['x-real-ip'] ?? ''
  if (realIP) {
    return {
      clientIp: realIP,
      country,
    }
  }

  return {
    clientIp: forwardedFor?.split(',')[0].trim() ?? realIP,
    country,
  }
}

export { extractClientIPAndCountry }

