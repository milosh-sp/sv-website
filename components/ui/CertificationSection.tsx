import { strings } from '@/lib/strings'
import type { CertificationItem } from '@/types/CVPreview.types'
import { Award } from 'lucide-react'
import { CVSectionHeader } from './CVSectionHeader'
import { VerifierTooltip } from './ToolTip'
import { VerificationBadge } from './VerificationBadge'

/**
 * Certifications Section Component
 * Single Responsibility: Displays professional certifications
 */
export function CertificationsSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.certifications}
        icon={Award}
      >
        <div className='grid grid-cols-1 gap-3'>
          {strings.cvSampleData.certifications.map(
            (cert: CertificationItem, index: number) => (
              <div
                key={`cert-${cert.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative'
              >
                <span className='font-medium text-sm text-slate-800'>
                  {cert.name}
                </span>
                <VerificationBadge verified={true} />
                <VerifierTooltip verifier={cert.verifier} />
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}
