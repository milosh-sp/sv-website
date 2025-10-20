import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { CompanyDiscoverySection } from '@/components/sections/CompanyDiscoverySection'
import { FaqSection } from '@/components/sections/FaqSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CvPreviewSection } from '@/components/sections/CvPreviewSection'
import { FloatingSignupButton } from '@/components/ui/FloatingSignupButton'
import { SignupModal } from '@/components/ui/SignupModal'
import { SignupModalProvider } from '@/contexts/SignupModalContext'

export default function Home() {
  return (
    <SignupModalProvider>
      <HeroSection />
      <BenefitsSection />
      <CompanyDiscoverySection />
      <ProcessSection />
      <CvPreviewSection />
      <FaqSection />
      <SignupModal />
      <FloatingSignupButton />
    </SignupModalProvider>
  )
}
