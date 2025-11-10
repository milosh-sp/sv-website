import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'
import {
  buildSubscriberData,
  getApiToken,
  logSenderNetError,
  submitToSenderNet,
} from '../../lib/netlify/sender-api'
import {
  createBotDetectedResponse,
  createEmailAlreadySubscribedResponse,
  createFormSessionExpiredResponse,
  createInvalidJsonResponse,
  createMissingApiTokenResponse,
  createMissingBodyResponse,
  createMethodNotAllowedResponse,
  createOptionsResponse,
  createSenderNetErrorResponse,
  createSenderNetValidationErrorResponse,
  createSuccessResponse,
  createUnexpectedErrorResponse,
  createValidationErrorResponse,
} from '../../lib/netlify/response-builder'
import { extractClientIPAndCountry } from '../../lib/netlify/client-info'
import type { HttpResponse } from '../../types/netlify.types'
import type { ContactFormSubmissionData } from '../../types/ContactForm.types'
import {
  detectBot,
  validateContactFormData,
} from '../../lib/netlify/form-validation'

export const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
): Promise<HttpResponse> => {
  console.log('Contact form submit function called:', {
    method: event.httpMethod,
    path: event.path,
    headers: event.headers,
    hasBody: !!event.body,
  })

  if (event.httpMethod === 'OPTIONS') {
    return createOptionsResponse()
  }

  if (event.httpMethod !== 'POST') {
    return createMethodNotAllowedResponse()
  }

  const clientIP = extractClientIPAndCountry(event)

  try {
    if (!event.body) {
      return createMissingBodyResponse()
    }

    let requestData: ContactFormSubmissionData
    try {
      requestData = JSON.parse(event.body)
    } catch (_parseError) {
      return createInvalidJsonResponse()
    }

    const { email, fields = {} } = requestData

    const botDetection = detectBot(fields)
    if (botDetection.isBot) {
      console.log('Bot detected:', botDetection.reason)
      if (botDetection.reason === 'Form session expired') {
        return createFormSessionExpiredResponse()
      }
      return createBotDetectedResponse()
    }

    const validationError = validateContactFormData(requestData)
    if (validationError) {
      return createValidationErrorResponse(validationError.message)
    }

    let apiToken: string
    try {
      apiToken = getApiToken()
    } catch (error) {
      console.error(
        'API token error:',
        error instanceof Error ? error.message : 'Unknown error'
      )
      return createMissingApiTokenResponse()
    }

    // Build subscriber data with contact form fields
    const subscriberData = buildSubscriberData(
      email,
      {
        ...fields,
        form_type: 'contact',
      },
      clientIP
    )

    const senderResponse = await submitToSenderNet(subscriberData, apiToken)

    if (!senderResponse.ok) {
      logSenderNetError(senderResponse.status, '', senderResponse.data)

      if (senderResponse.status === 422) {
        return createSenderNetValidationErrorResponse(
          senderResponse.data.message
        )
      }

      if (senderResponse.status === 409) {
        return createEmailAlreadySubscribedResponse()
      }

      return createSenderNetErrorResponse()
    }

    return createSuccessResponse(email, new Date().toISOString())
  } catch (error) {
    console.error('Unexpected error in contact-submit function:', error)
    return createUnexpectedErrorResponse()
  }
}
