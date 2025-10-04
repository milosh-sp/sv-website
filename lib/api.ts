/**
 * API utilities for form submissions
 */

// Types for form submission
export interface FormSubmissionData {
  email: string;
  fields?: {
    linkedin?: string;
    user_type?: string;
    pain_point?: string;
    source?: string;
  };
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

/**
 * Submit form data to Netlify function
 */
export async function submitForm(data: FormSubmissionData): Promise<ApiResponse> {
  try {
    const response = await fetch('/.netlify/functions/form-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || `HTTP error! status: ${response.status}`,
      };
    }

    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

/**
 * Convert user type to API format
 */
export function mapUserTypeToApiFormat(userType: string | null): string {
  switch (userType) {
    case 'verify-skills':
      return 'member';
    case 'earn-by-verifying':
      return 'verifier';
    default:
      return 'unknown';
  }
}
