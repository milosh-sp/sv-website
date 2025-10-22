import { strings } from '@/lib/strings'
import type { CertificationItem } from '@/types/CVPreview.types'
import { Award } from 'lucide-react'
import { SectionList } from './SectionList'

export function CertificationsSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.certifications}
      icon={Award}
      items={strings.cvSampleData.certifications}
      itemRenderer={(cert: CertificationItem) => (
        <article
          className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative'
          aria-label={`Certification: ${cert.name}`}
        >
          <h4 className='font-medium text-sm text-slate-800'>{cert.name}</h4>
        </article>
      )}
    />
  )
}
