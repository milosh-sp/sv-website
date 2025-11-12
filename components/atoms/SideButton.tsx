'use client'

import { cn } from '@/lib/utils'
import type { SideTabButtonProps } from '@/types/SideButton.types'
import { Button } from '@/components/atoms/Button'

export function SideTabButton({
  isActive,
  onClick,
  icon: Icon,
  label,
  ariaControls,
  className,
}: SideTabButtonProps) {
  const buttonId = `tab-${ariaControls}`

  return (
    <Button
      id={buttonId}
      type='button'
      onClick={onClick}
      variant='ghost'
      className={cn(
        'flex items-center gap-3 px-8 py-5 rounded-lg font-semibold transition-all duration-300 p-6 text-lg cursor-pointer',
        isActive
          ? 'bg-white text-blue-600 shadow-md border border-blue-100'
          : 'text-slate-600 hover:text-slate-900 hover:bg-white/50',
        className
      )}
      role='tab'
      aria-selected={isActive}
      aria-controls={ariaControls}
      aria-label={`${label} tab${isActive ? ', currently selected' : ''}`}
      tabIndex={isActive ? 0 : -1}
    >
      <Icon className='h-5 w-5' aria-hidden='true' />
      <span>{label}</span>
    </Button>
  )
}
