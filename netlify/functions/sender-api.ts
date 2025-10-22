import type {
  ClientIPAndCountry,
  FormFields,
  SenderNetErrorResponse,
  SenderNetSubscriber,
} from './form-submit.types'

const SENDER_API_URL = 'https://api.sender.net/v2/subscribers'
const SENDER_API_TIMEOUT_MS = 10000

function getApiToken(): string {
  const token = process.env.SENDER_API_TOKEN

  if (!token) {
    throw new TypeError('SENDER_API_TOKEN environment variable is not set')
  }

  return token
}

function buildSubscriberData(
  email: string,
  fields: FormFields,
  clientIP: ClientIPAndCountry
): SenderNetSubscriber {
  return {
    email,
    fields: {
      ...fields,
      signup_timestamp: new Date().toISOString(),
      client_ip: clientIP.clientIp,
      country: clientIP.country,
    },
  }
}

async function submitToSenderNet(
  subscriberData: SenderNetSubscriber,
  apiToken: string
): Promise<{
  ok: boolean
  status: number
  data: SenderNetErrorResponse
}> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), SENDER_API_TIMEOUT_MS)

  try {
    const response = await fetch(SENDER_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(subscriberData),
      signal: controller.signal,
    })

    const data = await response.json()

    return {
      ok: response.ok,
      status: response.status,
      data,
    }
  } finally {
    clearTimeout(timeoutId)
  }
}

function logSenderNetError(
  status: number,
  statusText: string,
  data: SenderNetErrorResponse
): void {
  console.error('Sender.net API error:', {
    status,
    statusText,
    data,
  })
}

export {
  getApiToken,
  buildSubscriberData,
  submitToSenderNet,
  logSenderNetError,
  SENDER_API_URL,
}
