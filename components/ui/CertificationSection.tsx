import { strings } from '@/lib/strings'
import type { CertificationItem } from '@/types/CVPreview.types'
import { Award } from 'lucide-react'
import { SectionList } from './SectionList'

/**
 * Certifications Section Component
 * Single Responsibility: Displays professional certifications
 */
export function CertificationsSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.certifications}
      icon={Award}
      items={strings.cvSampleData.certifications}
      itemRenderer={(cert: CertificationItem) => (
        <div className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative'>
          <span className='font-medium text-sm text-slate-800'>
            {cert.name}
          </span>
        </div>
      )}
    />
  )
}
