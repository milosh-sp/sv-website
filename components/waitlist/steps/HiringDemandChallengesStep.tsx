'use client'

import { Checkbox } from '@/components/ui/Checkbox'
import { RadioButton } from '@/components/ui/RadioButton'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

const ROLES_HIRING_OPTIONS = [
  { value: 'fullstack', label: 'Full-stack engineer' },
  { value: 'backend', label: 'Backend engineer' },
  { value: 'frontend', label: 'Frontend / Web' },
  { value: 'mobile', label: 'Mobile (iOS / Android / Flutter)' },
  { value: 'devops', label: 'DevOps / SRE / Platform' },
  { value: 'ai-ml', label: 'AI / ML / Data' },
  { value: 'product-design', label: 'Product / Design / QA' },
  { value: 'leadership', label: 'Engineering leadership' },
  {
    value: 'squad',
    label:
      'A pre-formed squad (e.g., Full-stack + Engineering leadership + QA)',
  },
]

const SENIORITY_LEVEL_OPTIONS = [
  { value: 'intern', label: 'Intern' },
  { value: 'mid-level', label: 'Mid-level' },
  { value: 'senior', label: 'Senior' },
  { value: 'staff-principal', label: 'Staff / Principal' },
  {
    value: 'generalists',
    label: 'Hands-on startup generalists (wears many hats)',
  },
]

const INTERVIEW_HOURS_OPTIONS = [
  { value: 'less-10', label: 'Less than 10 hours' },
  { value: '10-20', label: '10 - 20 hours' },
  { value: '20-40', label: '20 - 40 hours' },
  { value: '40+', label: "40+ hours (it's a massive drain)" },
  { value: 'dont-know', label: "I don't know" },
]

const HIRING_FRUSTRATIONS_OPTIONS = [
  {
    value: 'wasting-hours',
    label: 'Wasting 10+ hours per candidate with my engineering team.',
  },
  { value: 'bad-hire-cost', label: 'The fear and cost of a bad hire.' },
  { value: 'fake-cvs', label: 'Spam of fake people applying with great CVs' },
  {
    value: 'cv-mismatch',
    label:
      "Massive amount of CVs that don't match the position that I am hiring for",
  },
  {
    value: 'desperate-hiring',
    label:
      "Desperate hiring - we don't know who's actually good, but we hire them to fill the position",
  },
  {
    value: 'talkers-not-doers',
    label: 'Interviewing great "talkers" but average "doers."',
  },
  { value: 'other', label: 'Other:' },
]

const HIRING_FAILURES_OPTIONS = [
  { value: 'bad-interview', label: 'Bad hire that did great on interview' },
  {
    value: 'skill-assessment',
    label: "Unable to assess the candidate's skills accurately",
  },
  {
    value: 'expensive-talent',
    label: 'Senior talent too expensive to experiment on',
  },
  {
    value: 'missed-deadlines',
    label: 'Missed product deadlines due to hiring gap',
  },
  { value: 'other', label: 'Other:' },
]

interface HiringDemandChallengesStepProps
  extends HTMLAttributes<HTMLDivElement> {
  rolesHiring: string // JSON stringified array
  seniorityLevel: string
  hiringInterviewHours: string
  hiringFrustrations: string // JSON stringified array
  hiringFailures: string // JSON stringified array
  errors: Record<string, string>
  isSubmitting: boolean
  onRolesHiringChange: (values: string[]) => void
  onSeniorityLevelChange: (value: string) => void
  onHiringInterviewHoursChange: (value: string) => void
  onHiringFrustrationsChange: (values: string[]) => void
  onHiringFailuresChange: (values: string[]) => void
}

export function HiringDemandChallengesStep({
  rolesHiring,
  seniorityLevel,
  hiringInterviewHours,
  hiringFrustrations,
  hiringFailures,
  errors,
  isSubmitting,
  onRolesHiringChange,
  onSeniorityLevelChange,
  onHiringInterviewHoursChange,
  onHiringFrustrationsChange,
  onHiringFailuresChange,
  className,
  ...props
}: HiringDemandChallengesStepProps) {
  const parsedRoles = (() => {
    try {
      return JSON.parse(rolesHiring)
    } catch {
      return []
    }
  })()

  const parsedFrustrations = (() => {
    try {
      return JSON.parse(hiringFrustrations)
    } catch {
      return []
    }
  })()

  const parsedFailures = (() => {
    try {
      return JSON.parse(hiringFailures)
    } catch {
      return []
    }
  })()

  const handleRoleToggle = (value: string) => {
    const updated = parsedRoles.includes(value)
      ? parsedRoles.filter((v: string) => v !== value)
      : [...parsedRoles, value]
    onRolesHiringChange(updated)
  }

  const handleFrustrationToggle = (value: string) => {
    const updated = parsedFrustrations.includes(value)
      ? parsedFrustrations.filter((v: string) => v !== value)
      : [...parsedFrustrations, value]
    onHiringFrustrationsChange(updated)
  }

  const handleFailureToggle = (value: string) => {
    const updated = parsedFailures.includes(value)
      ? parsedFailures.filter((v: string) => v !== value)
      : [...parsedFailures, value]
    onHiringFailuresChange(updated)
  }

  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Roles Hiring */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          Which roles are you looking to hire for in the next 3 months?
        </h3>
        <p className='text-xs text-slate-500'>Select all that apply</p>
        <div className='space-y-2'>
          {ROLES_HIRING_OPTIONS.map((option) => (
            <Checkbox
              key={option.value}
              id={`roles-hiring-${option.value}`}
              name='rolesHiring'
              value={option.value}
              label={option.label}
              checked={parsedRoles.includes(option.value)}
              onChange={() => handleRoleToggle(option.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.rolesHiring ? 'rolesHiring-error' : undefined
              }
              aria-invalid={!!errors.rolesHiring}
            />
          ))}
        </div>
        {errors.rolesHiring && (
          <p
            id='rolesHiring-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.rolesHiring}
          </p>
        )}
      </div>

      {/* Seniority Level */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          What is the most critical seniority level you need to hire?
        </h3>
        <div className='space-y-2'>
          {SENIORITY_LEVEL_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              id={`seniority-level-${option.value}`}
              name='seniorityLevel'
              value={option.value}
              label={option.label}
              checked={seniorityLevel === option.value}
              onChange={(e) => onSeniorityLevelChange(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.seniorityLevel ? 'seniorityLevel-error' : undefined
              }
              aria-invalid={!!errors.seniorityLevel}
            />
          ))}
        </div>
        {errors.seniorityLevel && (
          <p
            id='seniorityLevel-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.seniorityLevel}
          </p>
        )}
      </div>

      {/* Interview Hours */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          On average, how many hours does your team and you spend interviewing
          per hire?
        </h3>
        <div className='space-y-2'>
          {INTERVIEW_HOURS_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              id={`interview-hours-${option.value}`}
              name='hiringInterviewHours'
              value={option.value}
              label={option.label}
              checked={hiringInterviewHours === option.value}
              onChange={(e) => onHiringInterviewHoursChange(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.hiringInterviewHours
                  ? 'hiringInterviewHours-error'
                  : undefined
              }
              aria-invalid={!!errors.hiringInterviewHours}
            />
          ))}
        </div>
        {errors.hiringInterviewHours && (
          <p
            id='hiringInterviewHours-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.hiringInterviewHours}
          </p>
        )}
      </div>

      {/* Hiring Frustrations */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          What are your biggest frustrations with your current hiring process?
        </h3>
        <p className='text-xs text-slate-500'>Select all that apply</p>
        <div className='space-y-2'>
          {HIRING_FRUSTRATIONS_OPTIONS.map((option) => (
            <Checkbox
              key={option.value}
              id={`hiring-frustrations-${option.value}`}
              name='hiringFrustrations'
              value={option.value}
              label={option.label}
              checked={parsedFrustrations.includes(option.value)}
              onChange={() => handleFrustrationToggle(option.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.hiringFrustrations
                  ? 'hiringFrustrations-error'
                  : undefined
              }
              aria-invalid={!!errors.hiringFrustrations}
            />
          ))}
        </div>
        {errors.hiringFrustrations && (
          <p
            id='hiringFrustrations-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.hiringFrustrations}
          </p>
        )}
      </div>

      {/* Hiring Failures */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          What hiring failures have you experienced recently?
        </h3>
        <p className='text-xs text-slate-500'>Select all that apply</p>
        <div className='space-y-2'>
          {HIRING_FAILURES_OPTIONS.map((option) => (
            <Checkbox
              key={option.value}
              id={`hiring-failures-${option.value}`}
              name='hiringFailures'
              value={option.value}
              label={option.label}
              checked={parsedFailures.includes(option.value)}
              onChange={() => handleFailureToggle(option.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.hiringFailures ? 'hiringFailures-error' : undefined
              }
              aria-invalid={!!errors.hiringFailures}
            />
          ))}
        </div>
        {errors.hiringFailures && (
          <p
            id='hiringFailures-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.hiringFailures}
          </p>
        )}
      </div>
    </div>
  )
}
