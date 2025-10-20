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

export function CvPreviewSection() {
  return (
    <section
      id='cv-preview'
      className='py-20 bg-white'
      aria-label='CV Preview Section'
    >
      <div className='container mx-auto px-4'>
        <HeaderAndDescription
          heading={strings.cvPreview.heading}
          description={strings.cvPreview.description}
          className='mb-12'
        />
        <p className='text-sm text-gray-500 max-w-3xl mx-auto text-center mb-12'>
          {strings.cvPreview.note}
        </p>

        <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden'>
          <CVHeader />

          <div className='grid md:grid-cols-2 gap-8 p-8'>
            {/* Left Column */}
            <div className='space-y-8'>
              <ProfileSection />
              <TechnicalSkillsSection />
              <EducationSection />
              <ExperienceSection />
            </div>

            {/* Right Column */}
            <div className='space-y-8'>
              <ProjectsSection />
              <CertificationsSection />
              <LanguagesSection />
            </div>
          </div>

          <QrCodeSection />
        </div>

        <CvFeaturesList />
      </div>
    </section>
  )
}
