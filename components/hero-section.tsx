"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, UserCheck } from "lucide-react"
import { useSignupModal } from "@/contexts/signup-modal-context"

export function HeroSection() {
  const { openModal } = useSignupModal()

  return (
    <section
      id="home"
      className="section-padding gradient-hero min-h-screen flex items-center"
      role="banner"
      aria-label="Hero section"
    >
      <div className="container-narrow">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-display-1 text-slate-900 mb-6 text-balance">
            Don't let your CV be ignored by AI and HR, get your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CV2.0</span>{" "}
            today
          </h1>

          <p className="text-body-large text-slate-600 mb-8 max-w-4xl mx-auto text-pretty">
            SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from
            leading companies verify your skills. Replace empty resume claims with proven endorsements, build your CV2.0
            and get hired faster, or earn income by selling your own credibility as a tech professional
          </p>

          <p className="text-lg text-slate-700 mb-8 font-medium">
            Choose your path to get started:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => openModal('member')}
              size="lg"
              className="h-16 px-12 text-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg font-medium"
              aria-label="Open signup modal to verify your skills"
            >
              Verify my skills
            </Button>
            <Button
              onClick={() => openModal('tech-pro')}
              size="lg"
              className="h-16 px-12 text-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg font-medium"
              aria-label="Open signup modal to earn by verifying skills"
            >
              Earn by verifying
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20">
              <Shield className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              <span className="font-medium text-slate-700">100% Secure & transparent</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20">
              <Clock className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              <span className="font-medium text-slate-700">No time commitment</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20">
              <UserCheck className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              <span className="font-medium text-slate-700">Verified by world's top talent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
