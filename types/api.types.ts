// Types for form submission
interface FormSubmissionData {
  email: string
  fields?: {
    linkedin?: string
    github?: string
    user_type?: string
    source?: string
    website?: string // Honeypot field
    form_start_time?: string // For timing validation
  }
}

interface ApiResponse {
  success: boolean
  message?: string
  error?: string
  data?: Record<string, unknown> | null
}

export type { FormSubmissionData, ApiResponse }
