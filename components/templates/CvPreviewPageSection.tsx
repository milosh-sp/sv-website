import { CertificationsSection } from '@/components/organisms/CertificationSection'
import { CVHeader } from '@/components/organisms/CVHeader'
import { CvFeaturesList } from '@/components/organisms/CvFeaturesList'
import { EducationSection } from '@/components/organisms/EducationSection'
import { ExperienceSection } from '@/components/organisms/ExperianceSection'
import { LanguagesSection } from '@/components/organisms/LanguagesSection'
import { ProfileSection } from '@/components/organisms/ProfileSection'
import { ProjectsSection } from '@/components/organisms/ProjectSection'
import { QrCodeSection } from '@/components/organisms/QrCodeSection'
import { TechnicalSkillsSection } from '@/components/organisms/TechnicalSkillsSection'
import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import type { SectionProps } from '@/types/Sections.types'

export function CvPreviewPageSection({ id }: SectionProps) {
  return (
    <SectionWrapper
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
    </SectionWrapper>
  )
}
