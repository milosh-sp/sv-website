import { CVPreview } from '@/components/CVPreview'
import { FAQ } from '@/components/FAQ'
import { Process } from '@/components/Process'
import { HeroSection } from '@/components/HeroSection'
import { SignupModal } from '@/components/SignupModal'
import { FloatingSignupButton } from '@/components/FloatingSignupButton'
import { CompanyDiscovery } from '@/components/CompanyDiscovery'
import { TwoSidesExplanation } from '@/components/TwoSidesExplanation'

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
