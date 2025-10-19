import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SideTabButtonProps {
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

/**
 * Reusable side tab button with icon and label
 * Implements WCAG 2.1 AA accessibility standards
 */
export function SideTabButton({
  isActive,
  onClick,
  icon: Icon,
  label,
  ariaControls,
  className,
}: SideTabButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer',
        isActive
          ? 'bg-white text-blue-600 shadow-md border border-blue-100'
          : 'text-slate-600 hover:text-slate-900 hover:bg-white/50',
        className
      )}
      role='tab'
      aria-selected={isActive}
      aria-controls={ariaControls}
    >
      <Icon className='h-5 w-5' aria-hidden='true' />
      {label}
    </button>
  )
}
