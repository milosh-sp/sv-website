import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { UserType } from '@/types/FormData.types'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get user segment label
function getUserSegmentLabel(userType: UserType): string {
  switch (userType) {
    case 'member':
      return 'Member'
    case 'guru':
      return 'Guru Member'
    default:
      return 'Unknown'
  }
}

/**
 * Scrolls to a section with smooth animation
 * Uses scrollIntoView with scroll-padding-top CSS for proper offset
 * Respects prefers-reduced-motion for accessibility
 *
 * @param sectionId - The ID of the element to scroll to
 */
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`)
    return
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  // Use scrollIntoView with smooth behavior
  // The scroll-padding-top CSS handles the fixed header offset
  element.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}

export { cn, scrollToSection, getUserSegmentLabel }
