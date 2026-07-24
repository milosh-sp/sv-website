import type {
  ApiErrorResponse,
  ApiSuccessResponse,
  HttpResponse,
} from '@/types/netlify.types'
import { strings } from '@/lib/strings'
import { envs } from '@/lib/envs'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': envs.WEBSITE_DOMAIN ?? '',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS, PATCH',
  'Access-Control-Max-Age': '86400',
} as const

const JSON_HEADERS = {
  ...CORS_HEADERS,
  'Content-Type': 'application/json',
} as const

function createErrorResponse(statusCode: number, error: string): HttpResponse {
  const body: ApiErrorResponse = {
    success: false,
    error,
  }

  return {
    statusCode,
    headers: JSON_HEADERS,
    body: JSON.stringify(body),
  }
}

function createSuccessResponse(email: string, timestamp: string): HttpResponse {
  const body: ApiSuccessResponse = {
    success: true,
    message: strings.apiResponses.success.subscribed,
    data: {
      email,
      timestamp,
    },
  }

  return {
    statusCode: 200,
    headers: JSON_HEADERS,
    body: JSON.stringify(body),
  }
}

function createOptionsResponse(): HttpResponse {
  return {
    statusCode: 200,
    headers: CORS_HEADERS,
    body: '',
  }
}

function createMethodNotAllowedResponse(): HttpResponse {
  return createErrorResponse(405, strings.apiResponses.errors.methodNotAllowed)
}

function createMissingBodyResponse(): HttpResponse {
  return createErrorResponse(400, strings.apiResponses.errors.missingBody)
}

function createInvalidJsonResponse(): HttpResponse {
  return createErrorResponse(400, strings.apiResponses.errors.invalidJson)
}

function createBotDetectedResponse(): HttpResponse {
  return createErrorResponse(400, strings.apiResponses.errors.botDetected)
}

function createFormSessionExpiredResponse(): HttpResponse {
  return createErrorResponse(
    400,
    strings.apiResponses.errors.formSessionExpired
  )
}

function createValidationErrorResponse(message: string): HttpResponse {
  return createErrorResponse(400, message)
}

function createMissingApiTokenResponse(): HttpResponse {
  return createErrorResponse(500, strings.apiResponses.errors.serverConfigError)
}

function createSenderNetValidationErrorResponse(
  message: string | undefined
): HttpResponse {
  return createErrorResponse(
    400,
    message || strings.apiResponses.errors.validationError
  )
}

function createEmailAlreadySubscribedResponse(): HttpResponse {
  return {
    statusCode: 409,
    headers: JSON_HEADERS,
    body: JSON.stringify({
      success: false,
      error: strings.apiResponses.errors.emailAlreadySubscribed,
    }),
  }
}

function createSenderNetErrorResponse(): HttpResponse {
  return createErrorResponse(
    500,
    strings.apiResponses.errors.subscriptionFailed
  )
}

function createUnexpectedErrorResponse(): HttpResponse {
  return createErrorResponse(500, strings.apiResponses.errors.unexpectedError)
}

export {
  createErrorResponse,
  createSuccessResponse,
  createOptionsResponse,
  createMethodNotAllowedResponse,
  createMissingBodyResponse,
  createInvalidJsonResponse,
  createBotDetectedResponse,
  createFormSessionExpiredResponse,
  createValidationErrorResponse,
  createMissingApiTokenResponse,
  createSenderNetValidationErrorResponse,
  createEmailAlreadySubscribedResponse,
  createSenderNetErrorResponse,
  createUnexpectedErrorResponse,
  CORS_HEADERS,
  JSON_HEADERS,
}
