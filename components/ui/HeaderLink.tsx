import Link from 'next/link'
import type { HeaderLinkProps } from '@/types/HeaderLink.types'

export function HeaderLink({
  href,
  children,
  variant = 'desktop',
  className = '',
  ...props
}: HeaderLinkProps) {
  // Base classes for all variants
  const baseClasses =
    'text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium cursor-pointer'

  // Variant-specific classes
  const variantClasses =
    variant === 'desktop'
      ? 'py-2 px-1 relative group'
      : 'text-left py-3 px-4 rounded-lg hover:bg-slate-50'

  // Combined classes
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {children}
      {variant === 'desktop' && (
        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full' />
      )}
    </Link>
  )
}
