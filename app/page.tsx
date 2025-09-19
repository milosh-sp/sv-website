import { CVPreview } from "@/components/cv-preview";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { TwoSides } from "@/components/two-sides";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TwoSides />
      <Process />
      <CVPreview />
      <FAQ />
    </main>
  )
}
