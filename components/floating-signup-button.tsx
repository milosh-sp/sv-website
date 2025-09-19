"use client"

import { Button } from "@/components/ui/button"
import { UserPlus, Sparkles } from "lucide-react"
import { useSignupModal } from "@/contexts/signup-modal-context"

export function FloatingSignupButton() {
  const { openModal } = useSignupModal()

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={openModal}
        size="lg"
        className="h-14 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full group"
        aria-label="Open signup modal to join SkillVerdict"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <UserPlus className="h-5 w-5 transition-transform group-hover:scale-110" />
            <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          </div>
          <span className="font-semibold text-base">Sign Up</span>
        </div>
      </Button>
    </div>
  )
}
