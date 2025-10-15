import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { strings } from "@/lib/strings";

export function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4 text-center">
				<p className="mb-4">{strings.branding.copyright}</p>
				<div className="flex justify-center gap-6 mb-6 text-sm">
					<Link
						href="/privacy-policy"
						className="text-blue-300 hover:text-white transition-colors"
					>
						{strings.footer.links.privacyPolicy}
					</Link>
					<span className="text-gray-500">|</span>
					<Link
						href="/terms-of-service"
						className="text-blue-300 hover:text-white transition-colors"
					>
						{strings.footer.links.termsOfService}
					</Link>
				</div>
				<div className="flex justify-center gap-6">
					<a
						href="/"
						className="text-gray-400 hover:text-white transition-colors"
						aria-label={strings.footer.social.twitter}
					>
						<Twitter className="h-6 w-6" />
					</a>
					<a
						href="/"
						className="text-gray-400 hover:text-white transition-colors"
						aria-label={strings.footer.social.linkedin}
					>
						<Linkedin className="h-6 w-6" />
					</a>
					<a
						href="/"
						className="text-gray-400 hover:text-white transition-colors"
						aria-label={strings.footer.social.github}
					>
						<Github className="h-6 w-6" />
					</a>
				</div>
			</div>
		</footer>
	);
}
