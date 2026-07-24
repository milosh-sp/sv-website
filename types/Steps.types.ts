import type { LucideIcon } from 'lucide-react'

interface StepItem {
  title: string
  description: string
  icon: LucideIcon
}

interface StepsGridProps {
  /** Array of step items to display */
  steps: readonly StepItem[]
  /** Optional CSS class name for container */
  className?: string
  /** Number of columns for grid layout */
  columns?: 2 | 3 | 4
  /** Color scheme for icon background and color */
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange' | 'companies'
  /** Carousel arrow color */
  controlColor?: 'companies' | 'success'
}

export type { StepItem, StepsGridProps }
