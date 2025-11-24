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
import type {
  FormFields,
  FormType,
  HttpResponse,
  UnifiedFormSubmissionData,
} from '../../types/netlify.types'
import {
  detectBot,
  formatFormFields,
  validateUnifiedFormData,
} from '../../lib/netlify/form-validation'
import { senderGroups } from '@/lib/consts'

/**
 * Unified form submission handler
 * Supports all form types: signup, contact, candidate, hiring-manager, verifier
 * Routes to appropriate validation based on formType discriminator
 */
export const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
): Promise<HttpResponse> => {
  console.log('Unified form submit function called:', {
    method: event.httpMethod,
    path: event.path,
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

    let requestData: UnifiedFormSubmissionData
    try {
      requestData = JSON.parse(event.body)
    } catch (_parseError) {
      return createInvalidJsonResponse()
    }

    const { email } = requestData

    const botDetection = detectBot(requestData as FormFields)
    if (botDetection.isBot) {
      console.log('Bot detected:', botDetection.reason)
      if (botDetection.reason === 'Form session expired') {
        return createFormSessionExpiredResponse()
      }
      return createBotDetectedResponse()
    }

    const validationError = validateUnifiedFormData(requestData)
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

    // Format array fields to comma-separated strings for submission
    const formattedData = formatFormFields(requestData as FormFields)
    const subscriberData = buildSubscriberData(email, formattedData, clientIP)

    const groups = [senderGroups.unverified]
    const isPartial = requestData.form_step === 'step1'

    const formType = subscriberData.fields.form_type as FormType

    // Adds to contact us group
    if (formType === 'contact') {
      groups.pop()
      groups.push(senderGroups.contactUsForm)
    }

    if (isPartial && formType !== 'contact') {
      groups.pop()
      groups.push(senderGroups.contactOnly)
    }

    const senderResponse = await submitToSenderNet(
      {
        ...subscriberData,
        groups,
        fields: {
          ...subscriberData.fields,
          email_verified: 'false',
        },
      },
      apiToken
    )

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
    console.log(
      'Successfully added form data, response from sender.net:',
      senderResponse.data
    )

    return createSuccessResponse(email, new Date().toISOString())
  } catch (error) {
    console.error('Unexpected error in submit-form function:', error)
    return createUnexpectedErrorResponse()
  }
}
