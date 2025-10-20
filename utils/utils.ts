import type { UserType } from '@/types/FormData.types'

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
