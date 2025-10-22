import type {
  ApiErrorResponse,
  ApiSuccessResponse,
  HttpResponse,
} from '../../types/netlify.types'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
    message: 'Successfully subscribed!',
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
  return createErrorResponse(
    405,
    'Method not allowed. Only POST requests are accepted.'
  )
}

function createMissingBodyResponse(): HttpResponse {
  return createErrorResponse(400, 'Request body is required.')
}

function createInvalidJsonResponse(): HttpResponse {
  return createErrorResponse(400, 'Invalid JSON in request body.')
}

function createBotDetectedResponse(): HttpResponse {
  return createErrorResponse(400, 'Invalid submission detected.')
}

function createFormSessionExpiredResponse(): HttpResponse {
  return createErrorResponse(
    400,
    'Form session expired. Please refresh and try again.'
  )
}

function createValidationErrorResponse(message: string): HttpResponse {
  return createErrorResponse(400, message)
}

function createMissingApiTokenResponse(): HttpResponse {
  return createErrorResponse(
    500,
    'Server configuration error. Please try again later.'
  )
}

function createSenderNetValidationErrorResponse(
  message: string | undefined
): HttpResponse {
  return createErrorResponse(400, message || 'Validation error occurred.')
}

function createEmailAlreadySubscribedResponse(): HttpResponse {
  return {
    statusCode: 409,
    headers: JSON_HEADERS,
    body: JSON.stringify({
      success: false,
      error: 'This email is already subscribed.',
    }),
  }
}

function createSenderNetErrorResponse(): HttpResponse {
  return createErrorResponse(
    500,
    'Failed to subscribe. Please try again later.'
  )
}

function createUnexpectedErrorResponse(): HttpResponse {
  return createErrorResponse(
    500,
    'An unexpected error occurred. Please try again later.'
  )
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

