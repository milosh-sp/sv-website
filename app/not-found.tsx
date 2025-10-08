"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function NotFound() {
  // Set page title for SEO
  useEffect(() => {
    document.title = "Page Not Found | SkillVerdict"
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-600 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to verify your skills.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/" className="block">
            <Button className="w-full" size="lg">
              <Home className="h-4 w-4 mr-2" />
              Back to Homepage
            </Button>
          </Link>
          
          <div className="flex gap-3">
            <Link href="/#how-it-works" className="flex-1">
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                How It Works
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">
            Looking for something specific?
          </p>
          <div className="space-y-2 text-sm">
            <Link 
              href="/#cv-preview" 
              className="block text-blue-600 hover:text-blue-800 transition-colors"
            >
              View CV2.0 Preview
            </Link>
            <Link 
              href="/#faq" 
              className="block text-blue-600 hover:text-blue-800 transition-colors"
            >
              Frequently Asked Questions
            </Link>
            <Link 
              href="/privacy-policy" 
              className="block text-blue-600 hover:text-blue-800 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
