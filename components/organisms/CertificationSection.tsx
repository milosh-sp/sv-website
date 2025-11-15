import { strings } from '@/lib/strings'
import type { CertificationItem } from '@/types/CVPreview.types'
import { Award } from 'lucide-react'
import { SectionList } from '@/components/organisms/SectionList'
import { cn } from '@/lib/utils'
import { Text } from '@/components/atoms/Text'

export function CertificationsSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.certifications}
      icon={Award}
      items={strings.cvSampleData.certifications}
      itemRenderer={(cert: CertificationItem) => (
        <article
          className={cn(
            'bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700'
          )}
          aria-label={`Certification: ${cert.name}`}
        >
          <Text>{cert.name}</Text>
        </article>
      )}
    />
  )
}
