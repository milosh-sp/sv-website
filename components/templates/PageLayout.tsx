import { cn } from '@/lib/utils'
import type { PageLayoutProps } from '@/types/PageLayout.types'

/**
 * Consistent page layout wrapper for waitlist form pages
 * Provides unified styling and responsive design
 */
export function PageLayout({ children, className, ...props }: PageLayoutProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-linear-to-b from-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      <div className='container-narrow'>{children}</div>
    </div>
  )
}
