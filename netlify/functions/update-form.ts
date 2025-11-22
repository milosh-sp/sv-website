import { senderGroups } from '@/lib/consts'
import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'
import { detectBot } from '../../lib/netlify/form-validation'
import {
  createBotDetectedResponse,
  createFormSessionExpiredResponse,
  createInvalidJsonResponse,
  createMethodNotAllowedResponse,
  createMissingApiTokenResponse,
  createMissingBodyResponse,
  createOptionsResponse,
  createSenderNetErrorResponse,
  createSenderNetValidationErrorResponse,
  createSuccessResponse,
  createUnexpectedErrorResponse,
} from '../../lib/netlify/response-builder'
import {
  getApiToken,
  logSenderNetError,
  updateSubscriberData,
} from '../../lib/netlify/sender-api'
import type { FormFields, HttpResponse } from '../../types/netlify.types'

export const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
): Promise<HttpResponse> => {
  console.log('Update form function called:', {
    method: event.httpMethod,
    path: event.path,
    hasBody: !!event.body,
  })

  if (event.httpMethod === 'OPTIONS') {
    return createOptionsResponse()
  }

  if (event.httpMethod !== 'PATCH') {
    return createMethodNotAllowedResponse()
  }

  try {
    if (!event.body) {
      return createMissingBodyResponse()
    }

    let requestData: { id: string; fields: Record<string, unknown> }
    try {
      requestData = JSON.parse(event.body)
    } catch (_parseError) {
      return createInvalidJsonResponse()
    }

    const botDetection = detectBot(requestData as FormFields)
    if (botDetection.isBot) {
      console.log('Bot detected:', botDetection.reason)
      if (botDetection.reason === 'Form session expired') {
        return createFormSessionExpiredResponse()
      }
      return createBotDetectedResponse()
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

    const senderResponse = await updateSubscriberData({
      id: requestData.id,
      fields: requestData.fields,
      groups: [senderGroups.active],
      apiToken,
    })

    if (!senderResponse.ok) {
      logSenderNetError(senderResponse.status, '', senderResponse.data)

      if (senderResponse.status === 422) {
        return createSenderNetValidationErrorResponse(
          senderResponse.data.message
        )
      }

      return createSenderNetErrorResponse()
    }

    return createSuccessResponse('TODO:', new Date().toISOString())
  } catch (error) {
    console.error('Unexpected error in update-form function:', error)
    return createUnexpectedErrorResponse()
  }
}
