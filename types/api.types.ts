interface ApiResponse {
  success: boolean
  message?: string
  error?: string
  data?: Record<string, unknown> | null
}

export type { ApiResponse }
