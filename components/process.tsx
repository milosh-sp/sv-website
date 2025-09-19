"use client"

import { useState } from "react"
import { ClipboardList, TestTube, MessageCircle, DollarSign, FileText, Brain, CheckCircle } from "lucide-react"

export function Process() {
  const [activeTab, setActiveTab] = useState("candidate")

  const vetterSteps = [
    {
      icon: ClipboardList,
      title: "1. Apply as a verifier",
      description: "Sign up to the community, submit your traditional CV and areas of expertise for review",
    },
    {
      icon: TestTube,
      title: "2. Interview",
      description: "Demonstrate your expertise and pass the interview to become a verifier",
    },
    {
      icon: MessageCircle,
      title: "3. Start verifying",
      description: "Access our AI-assisted dashboard to easily review candidate submissions",
    },
    {
      icon: DollarSign,
      title: "4. Earn",
      description: "Earn income by selling your credibility. Grow your expertise by learning from candidate feedback.",
    },
  ]

  const candidateSteps = [
    {
      icon: FileText,
      title: "1. Create profile",
      description: "Sign up to the community, upload your traditional CV and select the skills you want to verify",
    },
    {
      icon: Brain,
      title: "2. Complete assignment",
      description:
        "Complete a short take at home assignment that demonstrates your skills. Our take at home assignment are designed to surface your true skills",
    },
    {
      icon: MessageCircle,
      title: "3. Technical discussion",
      description:
        "If your solution is picked by a verifier, you will have a technical discussion with the verifier to validate your skills and knowledge",
    },
    {
      icon: CheckCircle,
      title: "4. Final conclusion",
      description:
        "If you pass the technical discussion, you will receive your verified skill badge and get a chance to rate the verifier",
    },
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How SkillVerdict Works</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-pretty">
            Our process ensures rigorous verification while maintaining flexibility for both tech professionals and
            members. We hand pick our verifiers, you will be assured that your skills are going to be verified in the
            upmost professional manner, unbiased, professional, fast and transparent.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("candidate")}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === "candidate" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Members
            </button>
            <button
              onClick={() => setActiveTab("vetter")}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === "vetter" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Tech professionals
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === "vetter" ? vetterSteps : candidateSteps).map((step, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
