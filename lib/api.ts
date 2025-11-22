import type { ApiResponse } from '@/types/api.types'
import type { UnifiedFormSubmissionData } from '@/types/netlify.types'
import { convertKeysToSnakeCase } from '@/lib/utils/convertToSnakeCase'

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
 * Supports all form types via discriminated union
 * Converts all camelCase keys to snake_case for backend compatibility
 */
export async function submitUnifiedForm(
  data: UnifiedFormSubmissionData,
  endpoint: string = '/.netlify/functions/submit-form'
): Promise<ApiResponse> {
  try {
    // Convert all keys to snake_case for backend compatibility
    // Filter out empty strings and empty arrays before conversion
    const filteredData = Object.entries(data).reduce(
      (acc, [key, value]) => {
        // Skip empty strings
        if (value === '') {
          return acc
        }

        // Skip empty arrays (both actual arrays and stringified "[]")
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

    // Check if response is JSON
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
          error: `Server returned invalid JSON. Status: ${response.status}`,
        }
      }
    } else {
      // Handle non-JSON responses (HTML error pages, plain text, etc.)
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
        error: `Server error. Status: ${response.status} ${response.statusText}`,
      }
    }

    if (!response.ok) {
      const errorMessage =
        typeof result === 'object' &&
        result !== null &&
        'error' in result &&
        typeof (result as Record<string, unknown>).error === 'string'
          ? (result as Record<string, unknown>).error
          : `HTTP error! status: ${response.status}`

      return {
        success: false,
        error: errorMessage as string,
      }
    }

    // Validate and return the response
    if (isApiResponse(result)) {
      return result
    }

    return {
      success: false,
      error: 'Unexpected error occurred',
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}

export async function updateSubscriberData(
  data: {
    id: string
    fields: Record<string, unknown>
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

    // Check if response is JSON
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
          error: `Server returned invalid JSON. Status: ${response.status}`,
        }
      }
    } else {
      // Handle non-JSON responses
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
        error: `Server error. Status: ${response.status} ${response.statusText}`,
      }
    }

    if (!response.ok) {
      const errorMessage =
        typeof result === 'object' &&
        result !== null &&
        'error' in result &&
        typeof (result as Record<string, unknown>).error === 'string'
          ? (result as Record<string, unknown>).error
          : `HTTP error! status: ${response.status}`

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
      error: 'Unexpected error occurred',
    }
  } catch (error) {
    console.error('Subscriber update error:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}
