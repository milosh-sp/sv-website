import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'
import {
  buildSubscriberData,
  getApiToken,
  logSenderNetError,
  submitToSenderNet,
} from './sender-api'
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
} from './response-builder'
import { extractClientIPAndCountry } from './client-info'
import type { FormSubmissionData, HttpResponse } from './form-submit.types'
import { detectBot, validateFormData } from './form-validation'

export const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
): Promise<HttpResponse> => {
  console.log('Form submit function called:', {
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

    let requestData: FormSubmissionData
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

    const validationError = validateFormData(requestData)
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

    const subscriberData = buildSubscriberData(email, fields, clientIP)
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
    console.error('Unexpected error in form-submit function:', error)
    return createUnexpectedErrorResponse()
  }
}
