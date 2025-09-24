import { CVPreview } from "@/components/cv-preview";
import { FAQ } from "@/components/faq";
import { Process } from "@/components/process";
import { TwoSides } from "@/components/two-sides";
import { HeroSection } from "@/components/hero-section";
import { SignupModal } from "@/components/signup-modal";
import { FloatingSignupButton } from "@/components/floating-signup-button";
import { CompanyDiscovery } from "@/components/company-discovery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TwoSides />
      <Process />
      <CompanyDiscovery />
      <CVPreview />
      <FAQ />
      <SignupModal />
      <FloatingSignupButton />
    </main>
  )
}
