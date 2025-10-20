import { UserType, WaitlistFormData } from '@/types/FormData.types'

// User segmentation categories for analytics and targeting
export const USER_SEGMENTS = {
  MEMBER: 'member',
  TECH_PRO: 'tech-pro',
} as const

// Helper function to get user segment label
export function getUserSegmentLabel(userType: UserType): string {
  switch (userType) {
    case 'member':
      return 'Member'
    case 'tech-pro':
      return 'Guru Member'
    default:
      return 'Unknown'
  }
}

// Helper function to validate form data
export function validateWaitlistForm(data: WaitlistFormData): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (!data.email) {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!data.linkedin) {
    errors.push('LinkedIn profile URL is required')
  } else if (
    !/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(
      data.linkedin
    )
  ) {
    errors.push('Please enter a valid LinkedIn profile URL')
  }

  if (!data.userType) {
    errors.push(
      'Please select whether you want to verify your skills or earn by verifying'
    )
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
