import type { ApiResponse } from '@/types/api.types'
import type { UnifiedFormSubmissionData } from '@/types/netlify.types'

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
 */
export async function submitUnifiedForm(
  data: UnifiedFormSubmissionData,
  endpoint: string = '/.netlify/functions/submit-form'
): Promise<ApiResponse> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
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
