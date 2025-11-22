import type { StepId } from '@/lib/stepIdentifiers'
import type { Handler } from '@netlify/functions'

// ============================================================================
// FORM TYPE DISCRIMINATOR
// ============================================================================

type FormType = 'contact' | 'candidate' | 'hiring-manager' | 'verifier'

// ============================================================================
// FORM FIELDS - GENERIC AND TYPE-SPECIFIC
// ============================================================================

interface FormFields {
  linkedin?: string
  githubGitlabUrl?: string
  user_type?: string
  website?: string
  form_step?: StepId
  form_start_time?: string
  [key: string]: unknown
}

// Contact form fields
interface ContactFormFields extends FormFields {
  contactName?: string
  message?: string
}

// Base fields shared between Candidate and Verifier forms
interface TechnicalProfileFormFields extends FormFields {
  linkedin?: string
  githubGitlabUrl?: string
  skillAreas?: string
  technicalSkills?: string
  professionalStatus?: string
}

// Candidate form fields
interface CandidateFormFields extends TechnicalProfileFormFields {
  techCommunityMembership?: string
  techCommunityDetails?: string
  skillValidationConfidence?: string
  jobSearchChallenges?: string
  jobSearchChallengeOther?: string
  valuableOutcomes?: string
  valuableOutcomeOther?: string
}

// Hiring Manager form fields
interface HiringManagerFormFields extends FormFields {
  managerRole?: string
  fundingStage?: string
  engineeringTeamSize?: string
  rolesHiring?: string
  seniorityLevel?: string
  hiringInterviewHours?: string
  hiringFrustrations?: string
  hiringFailures?: string
}

// Verifier form fields
interface VerifierFormFields extends TechnicalProfileFormFields {
  yearsOfExperience?: string
  hoursPerWeek?: string
  coachingMentoring?: string
  verifierMotivations?: string
  verifierMotivationOther?: string
  professionalFrustration?: string
  professionalFrustrationOther?: string
}

// ============================================================================
// DISCRIMINATED UNION FOR FORM SUBMISSION DATA
// ============================================================================

interface BaseFormSubmission {
  email: string
  referralCode?: string
  referredByReferralCode?: string
}

interface ContactFormSubmission extends BaseFormSubmission, ContactFormFields {
  formType: 'contact'
}

interface CandidateFormSubmission
  extends BaseFormSubmission,
    CandidateFormFields {
  formType: 'candidate'
}

interface HiringManagerFormSubmission
  extends BaseFormSubmission,
    HiringManagerFormFields {
  formType: 'hiring-manager'
  companyUrl: string
}

interface VerifierFormSubmission
  extends BaseFormSubmission,
    VerifierFormFields {
  formType: 'verifier'
}

type UnifiedFormSubmissionData =
  | ContactFormSubmission
  | CandidateFormSubmission
  | HiringManagerFormSubmission
  | VerifierFormSubmission

// Legacy type for backward compatibility
interface FormSubmissionData {
  email: string
  fields?: FormFields
}

interface ClientIPAndCountry {
  country: string
  clientIp: string
}

interface SenderNetSubscriber {
  groups: string[]
  email: string
  fields: Record<string, unknown>
}

interface SenderNetErrorResponse {
  message?: string
  data?: {
    id: string
  }
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
  FormType,
  FormFields,
  ContactFormFields,
  TechnicalProfileFormFields,
  CandidateFormFields,
  HiringManagerFormFields,
  VerifierFormFields,
  FormSubmissionData,
  ContactFormSubmission,
  CandidateFormSubmission,
  HiringManagerFormSubmission,
  VerifierFormSubmission,
  UnifiedFormSubmissionData,
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
