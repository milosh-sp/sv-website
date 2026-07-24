import type { ApiResponse } from '@/types/api.types'
import type { UnifiedFormSubmissionData } from '@/types/netlify.types'
import { convertKeysToSnakeCase } from '@/lib/utils/convertToSnakeCase'
import { strings } from '@/lib/strings'

const clientErrors = strings.apiResponses.client

function formatClientMessage(
  template: string,
  values: Record<string, string>
): string {
  return Object.entries(values).reduce(
    (message, [key, value]) => message.replaceAll(`{${key}}`, value),
    template
  )
}

/**
 * Type guard to validate ApiResponse structure
 */
function isApiResponse(value: unknown): value is ApiResponse {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const obj = value as Record<string, unknown>
  return typeof obj.success === 'boolean'
}

/**
 * Submit form data to unified Netlify function
 */
export async function submitUnifiedForm(
  data: UnifiedFormSubmissionData,
  endpoint: string = '/.netlify/functions/submit-form'
): Promise<ApiResponse> {
  try {
    const filteredData = Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (value === '') {
          return acc
        }

        if (Array.isArray(value) && value.length === 0) {
          return acc
        }
        if (value === '[]') {
          return acc
        }

        acc[key] = value
        return acc
      },
      {} as Record<string, unknown>
    )

    const snakeCaseData = convertKeysToSnakeCase(filteredData)

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(snakeCaseData),
    })

    const contentType = response.headers.get('content-type')
    const isJson = contentType?.includes('application/json')

    let result: unknown

    if (isJson) {
      try {
        result = await response.json()
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError)
        return {
          success: false,
          error: formatClientMessage(clientErrors.invalidJson, {
            status: String(response.status),
          }),
        }
      }
    } else {
      const textResponse = await response.text()
      console.error('Non-JSON response received:', {
        status: response.status,
        statusText: response.statusText,
        contentType,
        body:
          textResponse.substring(0, 200) +
          (textResponse.length > 200 ? '...' : ''),
      })

      return {
        success: false,
        error: formatClientMessage(clientErrors.serverError, {
          status: String(response.status),
          statusText: response.statusText,
        }),
      }
    }

    if (!response.ok) {
      const errorMessage =
        typeof result === 'object' &&
        result !== null &&
        'error' in result &&
        typeof (result as Record<string, unknown>).error === 'string'
          ? (result as Record<string, unknown>).error
          : formatClientMessage(clientErrors.httpError, {
              status: String(response.status),
            })

      return {
        success: false,
        error: errorMessage as string,
      }
    }

    if (isApiResponse(result)) {
      return result
    }

    return {
      success: false,
      error: clientErrors.unexpectedError,
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      error: clientErrors.networkError,
    }
  }
}

export async function updateSubscriberData(
  data: {
    id?: string
    email?: string
    fields: Record<string, unknown>
    groups?: string[]
  },
  endpoint: string = '/.netlify/functions/update-form'
): Promise<ApiResponse> {
  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const contentType = response.headers.get('content-type')
    const isJson = contentType?.includes('application/json')

    let result: unknown

    if (isJson) {
      try {
        result = await response.json()
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError)
        return {
          success: false,
          error: formatClientMessage(clientErrors.invalidJson, {
            status: String(response.status),
          }),
        }
      }
    } else {
      const textResponse = await response.text()
      console.error('Non-JSON response received:', {
        status: response.status,
        statusText: response.statusText,
        contentType,
        body:
          textResponse.substring(0, 200) +
          (textResponse.length > 200 ? '...' : ''),
      })

      return {
        success: false,
        error: formatClientMessage(clientErrors.serverError, {
          status: String(response.status),
          statusText: response.statusText,
        }),
      }
    }

    if (!response.ok) {
      const errorMessage =
        typeof result === 'object' &&
        result !== null &&
        'error' in result &&
        typeof (result as Record<string, unknown>).error === 'string'
          ? (result as Record<string, unknown>).error
          : formatClientMessage(clientErrors.httpError, {
              status: String(response.status),
            })

      return {
        success: false,
        error: errorMessage as string,
      }
    }

    if (isApiResponse(result)) {
      return result
    }

    return {
      success: false,
      error: clientErrors.unexpectedError,
    }
  } catch (error) {
    console.error('Subscriber update error:', error)
    return {
      success: false,
      error: clientErrors.networkError,
    }
  }
}
