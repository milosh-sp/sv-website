import { CVPreview } from '@/components/cv-preview'
import { FAQ } from '@/components/faq'
import { Process } from '@/components/process'
import { HeroSection } from '@/components/hero-section'
import { SignupModal } from '@/components/signup-modal'
import { FloatingSignupButton } from '@/components/floating-signup-button'
import { CompanyDiscovery } from '@/components/company-discovery'
import { TwoSidesExplanation } from '@/components/two-sides-explanation'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TwoSidesExplanation />
      <CompanyDiscovery />
      <Process />
      <CVPreview />
      <FAQ />
      <SignupModal />
      <FloatingSignupButton />
    </>
  )
}
