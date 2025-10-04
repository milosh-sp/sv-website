import { Twitter, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© 2024 SkillVerdict. All rights reserved.</p>
        <div className="flex justify-center gap-6 mb-6 text-sm">
          <Link href="/privacy-policy" className="text-blue-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-blue-300 hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
