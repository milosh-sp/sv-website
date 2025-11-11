'use client'

import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { CheckboxGroup } from '@/components/waitlist/ui/CheckboxGroup'
import { cn } from '@/lib/utils'
import type { HiringDemandChallengesStepProps } from '@/types/HiringDemandChallengesStep.types'

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

  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Roles Hiring */}
      <CheckboxGroup
        name='rolesHiring'
        label='Which roles are you looking to hire for in the next 3 months?'
        description='Select all that apply'
        options={ROLES_HIRING_OPTIONS}
        values={parsedRoles}
        onChange={(values) => onRolesHiringChange(values)}
        error={errors.rolesHiring}
        disabled={isSubmitting}
      />

      {/* Seniority Level */}
      <RadioButtonGroup
        name='seniorityLevel'
        label='What is the most critical seniority level you need to hire?'
        options={SENIORITY_LEVEL_OPTIONS}
        value={seniorityLevel}
        onChange={onSeniorityLevelChange}
        error={errors.seniorityLevel}
        disabled={isSubmitting}
      />

      {/* Interview Hours */}
      <RadioButtonGroup
        name='hiringInterviewHours'
        label='On average, how many hours does your team and you spend interviewing per hire?'
        options={INTERVIEW_HOURS_OPTIONS}
        value={hiringInterviewHours}
        onChange={onHiringInterviewHoursChange}
        error={errors.hiringInterviewHours}
        disabled={isSubmitting}
      />

      {/* Hiring Frustrations */}
      <CheckboxGroup
        name='hiringFrustrations'
        label='What are your biggest frustrations with your current hiring process?'
        description='Select all that apply'
        options={HIRING_FRUSTRATIONS_OPTIONS}
        values={parsedFrustrations}
        onChange={(values) => onHiringFrustrationsChange(values)}
        error={errors.hiringFrustrations}
        disabled={isSubmitting}
      />

      {/* Hiring Failures */}
      <CheckboxGroup
        name='hiringFailures'
        label='What hiring failures have you experienced recently?'
        description='Select all that apply'
        options={HIRING_FAILURES_OPTIONS}
        values={parsedFailures}
        onChange={(values) => onHiringFailuresChange(values)}
        error={errors.hiringFailures}
        disabled={isSubmitting}
      />
    </div>
  )
}
