import type { WaitlistStepConfig } from '@/types/WaitlistStep.types'

/**
 * Candidate form step configuration
 * 4 steps: Contact Information → Skills Profile → Profile → Motivation & Challenges
 */
export const CANDIDATE_STEP_CONFIG: WaitlistStepConfig[] = [
  {
    stepNumber: 1,
    title: 'Contact Information',
    description: 'Let us know how to reach you',
    fields: ['email', 'linkedIn', 'github', 'newsletterOptIn'],
  },
  {
    stepNumber: 2,
    title: 'Skills Profile',
    description: 'Tell us about your skills',
    fields: ['skillAreas', 'technicalSkills'],
  },
  {
    stepNumber: 3,
    title: 'Your Candidate Profile',
    description: 'Tell us about your professional background',
    fields: [
      'professionalStatus',
      'techCommunityMembership',
      'techCommunityDetails',
      'githubGitlabUrl',
    ],
  },
  {
    stepNumber: 4,
    title: 'Motivation & Challenges',
    description: 'Help us understand your goals',
    fields: [
      'skillValidationConfidence',
      'jobSearchChallenges',
      'jobSearchChallengeOther',
      'valuableOutcomes',
      'valuableOutcomeOther',
    ],
  },
]

/**
 * Verifier form step configuration
 * 4 steps: Contact Information → Skills Profile → Profile → Motivation & Challenges
 */
export const VERIFIER_STEP_CONFIG: WaitlistStepConfig[] = [
  {
    stepNumber: 1,
    title: 'Contact Information',
    description: 'Let us know how to reach you',
    fields: ['email', 'linkedIn', 'github', 'newsletterOptIn'],
  },
  {
    stepNumber: 2,
    title: 'Skills Profile',
    description: 'Tell us about your skills',
    fields: ['skillAreas', 'technicalSkills'],
  },
  {
    stepNumber: 3,
    title: 'Your Verification Profile',
    description: 'Share your professional experience',
    fields: [
      'yearsOfExperience',
      'hoursPerWeek',
      'professionalStatus',
      'coachingMentoring',
      'githubGitlabUrl',
    ],
  },
  {
    stepNumber: 4,
    title: 'Your Motivation',
    description: 'Help us understand your goals',
    fields: [
      'verifierMotivations',
      'verifierMotivationOther',
      'professionalFrustration',
      'professionalFrustrationOther',
    ],
  },
]

/**
 * Hiring Manager form step configuration
 * 4 steps: Contact Information → Company Profile → Hiring Demand → Hiring Challenges
 */
export const HIRING_MANAGER_STEP_CONFIG: WaitlistStepConfig[] = [
  {
    stepNumber: 1,
    title: 'Contact Information',
    description: 'Let us know how to reach you',
    fields: ['email', 'newsletterOptIn'],
  },
  {
    stepNumber: 2,
    title: 'Your Company Profile',
    description: 'Tell us about your company',
    fields: ['managerRole', 'fundingStage', 'engineeringTeamSize'],
  },
  {
    stepNumber: 3,
    title: 'Hiring Demand',
    description: 'Share your hiring needs',
    fields: ['rolesHiring', 'seniorityLevel', 'hiringInterviewHours'],
  },
  {
    stepNumber: 4,
    title: 'Hiring Challenges',
    description: 'Tell us about your challenges',
    fields: ['hiringFrustrations', 'hiringFailures'],
  },
]

/**
 * Get step configuration by persona and step number
 * Enables dynamic step rendering
 */
export function getStepConfig(
  persona: 'candidate' | 'verifier' | 'hiring-manager',
  stepNumber: number
): WaitlistStepConfig | undefined {
  const configs = {
    candidate: CANDIDATE_STEP_CONFIG,
    verifier: VERIFIER_STEP_CONFIG,
    'hiring-manager': HIRING_MANAGER_STEP_CONFIG,
  }

  return configs[persona].find((step) => step.stepNumber === stepNumber)
}

/**
 * Get all step configurations for a persona
 */
export function getPersonaStepConfigs(
  persona: 'candidate' | 'verifier' | 'hiring-manager'
): WaitlistStepConfig[] {
  const configs = {
    candidate: CANDIDATE_STEP_CONFIG,
    verifier: VERIFIER_STEP_CONFIG,
    'hiring-manager': HIRING_MANAGER_STEP_CONFIG,
  }

  return configs[persona]
}

/**
 * Get total number of steps for a persona
 */
export function getTotalStepsForPersona(
  persona: 'candidate' | 'verifier' | 'hiring-manager'
): number {
  return getPersonaStepConfigs(persona).length
}
