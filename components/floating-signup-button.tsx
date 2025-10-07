"use client"

import { Button } from "@/components/ui/button"
import { UserPlus, Sparkles } from "lucide-react"

export function FloatingSignupButton() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={() => scrollToSection("home")}
        size="lg"
        className="h-14 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full group"
        aria-label="Scroll to hero section to sign up"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <UserPlus className="h-5 w-5 transition-transform group-hover:scale-110" />
            <Sparkles className="h-3 w-3 text-yellow-300 animate-pulse" />
          </div>
          <span className="font-semibold text-base">Sign Up</span>
        </div>
      </Button>
    </div>
  )
}
