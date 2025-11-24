import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { CVHeaderProps } from '@/types/CVHeader.types'
import { Text } from '@/components/atoms/Text'
import { Heading } from '@/components/atoms/Heading'
import { User } from 'lucide-react'

export function CVHeader({
  variant = 'default',
  className,
  ...props
}: CVHeaderProps) {
  const isCompact = variant === 'compact'

  const headerClasses = cn(
    'bg-slate-800 text-white',
    isCompact ? 'p-4' : 'p-8',
    className
  )

  const avatarClasses = cn(
    'bg-slate-700 rounded-full flex items-center justify-center w-full',
    isCompact ? 'w-16 h-16' : 'w-24 h-24'
  )

  const avatarIconClasses = isCompact ? 'h-8 w-8' : 'h-12 w-12'

  const nameClasses = cn(
    'font-bold mb-2 text-white',
    isCompact ? 'text-lg' : 'text-2xl md:text-3xl'
  )

  const titleClasses = cn('text-slate-200', isCompact ? 'text-sm' : 'text-lg')

  const containerClasses = cn(
    'flex flex-col md:flex-row items-center ',
    isCompact ? 'gap-3' : 'gap-10'
  )

  const textContainerClasses = cn(
    isCompact ? 'text-center md:text-left' : 'text-center md:text-left flex-1'
  )

  return (
    <header className={headerClasses} {...props}>
      <div className={containerClasses}>
        <div
          className={avatarClasses}
          role='img'
          aria-label={`Profile picture for ${strings.cvSampleData.profile.name}`}
        >
          <User
            className={cn(avatarIconClasses, 'text-white')}
            aria-hidden='true'
          />
        </div>
        <div className={textContainerClasses}>
          <Heading level={4} size='md' className={nameClasses}>
            {strings.cvSampleData.profile.name}
          </Heading>
          <Text className={titleClasses} role='doc-subtitle'>
            {strings.cvSampleData.profile.title}
          </Text>
          {!isCompact && <Text>{strings.cvSampleData.profile.bio}</Text>}
        </div>
      </div>
    </header>
  )
}
