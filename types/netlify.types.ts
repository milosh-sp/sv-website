import type { Handler } from '@netlify/functions'

// ============================================================================
// FORM TYPE DISCRIMINATOR
// ============================================================================

type FormType =
  | 'signup'
  | 'contact'
  | 'candidate'
  | 'hiring-manager'
  | 'verifier'

// ============================================================================
// FORM FIELDS - GENERIC AND TYPE-SPECIFIC
// ============================================================================

interface FormFields {
  linkedin?: string
  githubGitlabUrl?: string
  user_type?: string
  website?: string
  form_start_time?: string
  [key: string]: unknown
}

// Signup form fields
interface SignupFormFields extends FormFields {
  linkedin?: string
  githubGitlabUrl?: string
  user_type?: string
  source?: string
}

// Contact form fields
interface ContactFormFields extends FormFields {
  name?: string
  message?: string
}

// Candidate form fields
interface CandidateFormFields extends FormFields {
  linkedin?: string
  githubGitlabUrl?: string
  skillAreas?: string
  technicalSkills?: string
  professionalStatus?: string
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
interface VerifierFormFields extends FormFields {
  linkedin?: string
  githubGitlabUrl?: string
  skillAreas?: string
  technicalSkills?: string
  yearsOfExperience?: string
  hoursPerWeek?: string
  professionalStatus?: string
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
  fields?: FormFields
}

interface SignupFormSubmission extends BaseFormSubmission {
  formType: 'signup'
  fields?: SignupFormFields
}

interface ContactFormSubmission extends BaseFormSubmission {
  formType: 'contact'
  fields?: ContactFormFields
}

interface CandidateFormSubmission extends BaseFormSubmission {
  formType: 'candidate'
  fields?: CandidateFormFields
}

interface HiringManagerFormSubmission extends BaseFormSubmission {
  formType: 'hiring-manager'
  fields?: HiringManagerFormFields
}

interface VerifierFormSubmission extends BaseFormSubmission {
  formType: 'verifier'
  fields?: VerifierFormFields
}

type UnifiedFormSubmissionData =
  | SignupFormSubmission
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
  FormType,
  FormFields,
  SignupFormFields,
  ContactFormFields,
  CandidateFormFields,
  HiringManagerFormFields,
  VerifierFormFields,
  FormSubmissionData,
  SignupFormSubmission,
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
