import { strings } from '@/lib/strings'
import { CertificationsSection } from '../ui/CertificationSection'
import { CVHeader } from '../ui/CVHeader'
import { EducationSection } from '../ui/EducationSection'
import { ExperienceSection } from '../ui/ExperianceSection'
import { HeaderAndDescription } from '../ui/HeaderAndDescription'
import { LanguagesSection } from '../ui/LanguagesSection'
import { ProfileSection } from '../ui/ProfileSection'
import { ProjectsSection } from '../ui/ProjectSection'
import { QrCodeSection } from '../ui/QrCodeSection'
import { TechnicalSkillsSection } from '../ui/TechnicalSkillsSection'
import { CvFeaturesList } from '../ui/CvFeaturesList'
import type { SectionProps } from '@/types/Sections.types'

export function CvPreviewSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className='py-20 bg-white'
      aria-labelledby='cv-preview-heading'
    >
      <div className='container mx-auto px-4'>
        <HeaderAndDescription
          heading={strings.cvPreview.heading}
          description={strings.cvPreview.description}
          className='mb-12'
          id='cv-preview-heading'
        />
        <p
          className='text-sm text-gray-500 max-w-3xl mx-auto text-center mb-12'
          role='note'
          aria-label='CV preview disclaimer'
        >
          {strings.cvPreview.note}
        </p>

        <article
          className='max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden'
          aria-label='Sample curriculum vitae document'
        >
          <CVHeader />

          <div className='grid md:grid-cols-2 gap-8 p-8'>
            {/* Left Column - Primary Information */}
            <div className='space-y-8'>
              <ProfileSection />
              <TechnicalSkillsSection />
              <EducationSection />
              <ExperienceSection />
            </div>

            {/* Right Column - Supplementary Information */}
            <div className='space-y-8'>
              <ProjectsSection />
              <CertificationsSection />
              <LanguagesSection />
            </div>
          </div>

          <QrCodeSection />
        </article>

        <CvFeaturesList />
      </div>
    </section>
  )
}
