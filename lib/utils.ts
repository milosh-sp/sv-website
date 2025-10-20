import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { UserType } from '@/types/FormData.types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get user segment label
export function getUserSegmentLabel(userType: UserType): string {
  switch (userType) {
    case 'member':
      return 'Member'
    case 'guru':
      return 'Guru Member'
    default:
      return 'Unknown'
  }
}
