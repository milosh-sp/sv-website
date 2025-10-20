import { strings } from '@/lib/strings'
import { User } from 'lucide-react'
import { CVSectionHeader } from './CVSectionHeader'

export function ProfileSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.profile}
        icon={User}
      >
        <p className='text-gray-600 text-sm'>
          {strings.cvSampleData.profile.bio}
        </p>
      </CVSectionHeader>
    </div>
  )
}
