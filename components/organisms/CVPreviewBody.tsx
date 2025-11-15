import { cn } from '@/lib/utils'
import type { CVHeaderVariant } from '@/types/CVHeader.types'
import { CertificationsSection } from './CertificationSection'
import { CVHeader } from './CVHeader'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperianceSection'
import { LanguagesSection } from './LanguagesSection'
import { ProfileSection } from './ProfileSection'
import { ProjectsSection } from './ProjectSection'
import { QrCodeSection } from './QrCodeSection'
import { TechnicalSkillsSectionCv } from './TechnicalSkillsSectionCv'

export function CVPreviewBody({ variant }: { variant?: CVHeaderVariant }) {
  return (
    <article
      className={cn(
        'max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden'
      )}
      aria-label='Sample curriculum vitae document'
    >
      <CVHeader variant={variant ?? 'default'} />

      <ProfileSection className={cn('pl-8 pr-8 pt-2')} />

      <div className={cn('grid md:grid-cols-2 gap-8 p-8')}>
        {/* Left Column - Primary Information */}
        <div className={cn('space-y-8')}>
          <TechnicalSkillsSectionCv />
          <EducationSection />
          <ExperienceSection />
        </div>

        {/* Right Column - Supplementary Information */}
        <div className={cn('space-y-8')}>
          <ProjectsSection />
          <CertificationsSection />
          <LanguagesSection />
        </div>
      </div>

      <QrCodeSection />
    </article>
  )
}
