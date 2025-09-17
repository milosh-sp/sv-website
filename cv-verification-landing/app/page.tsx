import { Hero } from "@/components/hero"
import { TwoSides } from "@/components/two-sides"
import { CVPreview } from "@/components/cv-preview"
import { Process } from "@/components/process"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TwoSides />
      <Process />
      <CVPreview />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
