import type { ComponentProps, ReactNode } from 'react'

interface SectionWrapperProps extends ComponentProps<'section'> {
  /** Section ID for scroll targeting and anchor navigation */
  id: string
  /** Content to render inside the section */
  children: ReactNode
  /** Optional additional CSS classes for custom styling */
  className?: string
}

export type { SectionWrapperProps }
