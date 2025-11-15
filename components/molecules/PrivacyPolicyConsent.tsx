import { cn } from '@/lib/utils'
import type { PrivacyPolicyConsentProps } from '@/types/PrivacyPolictConsent.types'
import Link from 'next/link'
import { Text } from '@/components/atoms/Text'

export function PrivacyPolicyConsent({
  prefix,
  linkText,
  href,
  ariaLabel,
  className,
}: PrivacyPolicyConsentProps) {
  return (
    <aside className={cn('text-center', className)}>
      <Text variant='caption' className='text-muted-foreground'>
        {prefix}
        <Link
          href={href}
          aria-label={ariaLabel}
          className={cn(
            `font-semibold text-primary hover:text-primary/80
             hover:underline transition-colors duration-200 focus:outline-none
             focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-1`
          )}
        >
          {linkText}
        </Link>
      </Text>
    </aside>
  )
}
