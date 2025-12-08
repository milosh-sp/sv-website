import { cn } from '@/lib/utils'
import type { CVHeaderVariant } from '@/types/CVHeader.types'
import { CertificationsSection } from './CertificationSection'
import { CVHeader } from './CVHeader'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperianceSection'
import { LanguagesSection } from './LanguagesSection'
import { ProjectsSection } from './ProjectSection'
import { QrCodeSection } from './QrCodeSection'
import { TechnicalSkillsSectionCv } from './TechnicalSkillsSectionCv'
import type { HeadingLevel } from '@/types/Heading.types'
import { PersonalitySection } from './PersonalititySection'

export function CVPreviewBody({
  variant,
  headingLevel,
}: {
  variant?: CVHeaderVariant
  headingLevel?: HeadingLevel
}) {
  return (
    <main
      className={cn(
        'max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden'
      )}
      aria-label='Sample curriculum vitae document'
    >
      <CVHeader variant={variant ?? 'default'} headingLevel={headingLevel} />

      <section className={cn('grid md:grid-cols-2 gap-8 p-8')}>
        {/* Left Column - Primary Information */}
        <article className={cn('space-y-8')}>
          <TechnicalSkillsSectionCv />
          <EducationSection />
          <ExperienceSection />
        </article>

        {/* Right Column - Supplementary Information */}
        <article className={cn('space-y-8')}>
          <ProjectsSection />
          <PersonalitySection />
          <CertificationsSection />
          <LanguagesSection />
        </article>
      </section>

      <QrCodeSection />
    </main>
  )
}
