import { cn } from '@/lib/utils'
import type { CVSectionProps } from '@/types/CVPreview.types'

/**
 * Reusable CV Section Header Component
 * Single Responsibility: Renders section headers with consistent styling
 */
export function CVSectionHeader({
  title,
  icon: Icon,
  children,
  className,
}: CVSectionProps) {
  return (
    <>
      <h3
        className={cn(
          'flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200',
          className
        )}
      >
        <Icon className='h-5 w-5' aria-hidden='true' />
        {title}
      </h3>
      {children}
    </>
  )
}
