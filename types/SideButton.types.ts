/**
 * Types for SideButton component
 */

import type { LucideIcon } from 'lucide-react'

export interface SideTabButtonProps {
  /** Whether the tab is currently active */
  isActive: boolean
  /** Click handler for tab selection */
  onClick: () => void
  /** Lucide icon component to display */
  icon: LucideIcon
  /** Text label for the tab */
  label: string
  /** ID of the panel this tab controls (for ARIA) */
  ariaControls: string
  /** Optional additional CSS classes */
  className?: string
}
