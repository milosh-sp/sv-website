import { strings } from '@/lib/strings'
import { User } from 'lucide-react'
import { CVSectionHeader } from '@/components/organisms/CVSectionHeader'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type ProfileSectionProps = ComponentProps<'article'>

export function ProfileSection({ className, ...props }: ProfileSectionProps) {
  return (
    <article
      aria-labelledby='profile-section-heading'
      className={cn(className)}
      {...props}
    >
      <CVSectionHeader
        title={strings.cvSampleData.sections.profile}
        icon={User}
      >
        <Text>{strings.cvSampleData.profile.bio}</Text>
      </CVSectionHeader>
    </article>
  )
}
