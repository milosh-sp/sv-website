import type { Handler } from '@netlify/functions'

interface FormFields {
  linkedin?: string
  github?: string
  user_type?: string
  website?: string
  form_start_time?: string
}

interface FormSubmissionData {
  email: string
  fields?: FormFields
}

interface ClientIPAndCountry {
  country: string
  clientIp: string
}

interface SenderNetSubscriber {
  email: string
  fields: Record<string, unknown>
}

interface SenderNetErrorResponse {
  message?: string
  [key: string]: unknown
}

interface ApiErrorResponse {
  success: false
  error: string
}

interface ApiSuccessResponse {
  success: true
  message: string
  data: {
    email: string
    timestamp: string
  }
}

type ApiResponse = ApiSuccessResponse | ApiErrorResponse

interface HttpResponse {
  statusCode: number
  headers: Record<string, string>
  body: string
}

interface ValidationError {
  field: string
  message: string
}

interface BotDetectionResult {
  isBot: boolean
  reason?: string
}

export type {
  FormFields,
  FormSubmissionData,
  ClientIPAndCountry,
  SenderNetSubscriber,
  SenderNetErrorResponse,
  ApiErrorResponse,
  ApiSuccessResponse,
  ApiResponse,
  HttpResponse,
  ValidationError,
  BotDetectionResult,
  Handler,
}

