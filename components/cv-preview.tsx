import type { LucideIcon } from "lucide-react";
import {
	User,
	Code,
	Briefcase,
	GraduationCap,
	Award,
	QrCode,
	Shield,
	Database,
	Link,
	FolderOpen,
	Globe,
} from "lucide-react";
import { strings } from "@/lib/strings";

/**
 * CV Preview Section Component
 * Displays a sample CV with verified skills and achievements
 * Demonstrates the CV2.0 platform capabilities
 */
export function CVPreview() {
	return (
		<section id="cv-preview" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{strings.cvPreview.heading}
					</h2>
					<p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4 text-pretty">
						{strings.cvPreview.description}
					</p>
					<p className="text-sm text-gray-500 max-w-3xl mx-auto">
						{strings.cvPreview.note}
					</p>
				</div>

				<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
					{/* CV Header */}
					<div className="bg-slate-800 text-white p-8">
						<div className="flex flex-col md:flex-row items-center gap-6">
							<div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center">
								<User className="h-12 w-12 text-white" />
							</div>
							<div className="text-center md:text-left">
								<h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
									{strings.cvSampleData.profile.name}
								</h2>
								<p className="text-lg text-slate-200">
									{strings.cvSampleData.profile.title}
								</p>
							</div>
						</div>
					</div>

					{/* CV Body */}
					<div className="grid md:grid-cols-2 gap-8 p-8">
						{/* Left Column */}
						<div className="space-y-8">
							{/* Profile */}
							<div>
								<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
									<User className="h-5 w-5" />
									{strings.cvSampleData.sections.profile}
								</h3>
								<p className="text-gray-600 text-sm">
									{strings.cvSampleData.profile.bio}
								</p>
							</div>

							{/* Technical Skills */}
							<div>
								<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
									<Code className="h-5 w-5" />
									{strings.cvSampleData.sections.technicalSkills}
								</h3>
								<div className="grid grid-cols-2 gap-3">
									{strings.cvSampleData.skills.map((skill, index) => (
										<div
											key={`skill-${skill.name}-${index}`}
											className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative"
										>
											<span className="font-medium text-sm text-slate-800">
												{skill.name}
											</span>
											<span
												className={`text-xs px-2 py-1 rounded-full ${
													skill.verified
														? "bg-green-100 text-green-800"
														: "bg-yellow-100 text-yellow-800"
												}`}
											>
												{skill.verified
													? strings.cvSampleData.statusLabels.verified
													: strings.cvSampleData.statusLabels.pending}
											</span>
											{skill.verified && skill.verifier && (
												<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
													<div className="text-center">
														<div>
															Verified by {skill.verifier.split(" - ")[0]}
														</div>
														<div className="text-slate-300 mt-1">
															{skill.verifier.split(" - ")[1]}
														</div>
													</div>
													<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
												</div>
											)}
										</div>
									))}
								</div>
							</div>

							{/* Education */}
							<div>
								<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
									<GraduationCap className="h-5 w-5" />
									{strings.cvSampleData.sections.education}
								</h3>
								<div className="space-y-4">
									{strings.cvSampleData.education.map((edu, index) => (
										<div
											key={`education-${edu.degree}-${index}`}
											className="relative"
										>
											<div className="flex justify-between items-start mb-1">
												<span className="font-medium text-sm">
													{edu.degree}
												</span>
												<span className="text-xs text-gray-500">
													{edu.year}
												</span>
											</div>
											<div className="text-slate-800 text-sm mb-2">
												{edu.institution}
											</div>
											<span
												className={`absolute top-0 right-0 text-xs px-2 py-1 rounded-full ${
													edu.verified
														? "bg-green-100 text-green-800"
														: "bg-yellow-100 text-yellow-800"
												}`}
											>
												{edu.verified
													? strings.cvSampleData.statusLabels.verified
													: strings.cvSampleData.statusLabels.pending}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Experience */}
							<div>
								<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
									<Briefcase className="h-5 w-5" />
									{strings.cvSampleData.sections.experience}
								</h3>
								<div className="space-y-6">
									{strings.cvSampleData.experience.map((job, index) => (
										<div
											key={`experience-${job.company}-${index}`}
											className="relative pb-4"
										>
											<div className="flex justify-between items-start mb-1">
												<span className="font-medium text-sm">{job.title}</span>
												<span className="text-xs text-gray-500">
													{job.period}
												</span>
											</div>
											<div className="text-slate-800 text-sm mb-2">
												{job.company}
											</div>
											<p className="text-gray-600 text-xs">{job.description}</p>
											<span
												className={`absolute top-0 right-0 text-xs px-2 py-1 rounded-full ${
													job.verified
														? "bg-green-100 text-green-800"
														: "bg-yellow-100 text-yellow-800"
												}`}
											>
												{job.verified
													? strings.cvSampleData.statusLabels.verified
													: strings.cvSampleData.statusLabels.unverified}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Right Column */}
						<div className="space-y-8">
							<div>
								<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
									<FolderOpen className="h-5 w-5" />
									{strings.cvSampleData.sections.projects}
								</h3>
								<div className="space-y-4">
									{strings.cvSampleData.projects.map((project, index) => (
										<div
											key={`project-${project.name}-${index}`}
											className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative"
										>
											<div className="flex items-center justify-between mb-2">
												<span className="font-medium text-sm text-slate-800">
													{project.name}
												</span>
												<span
													className={`text-xs px-2 py-1 rounded-full ${
														project.verified
															? "bg-green-100 text-green-800"
															: "bg-yellow-100 text-yellow-800"
													}`}
												>
													{project.verified
														? strings.cvSampleData.statusLabels.verified
														: strings.cvSampleData.statusLabels.pending}
												</span>
											</div>
											<p className="text-slate-600 text-xs">
												{project.description}
											</p>
											{project.verified && project.verifier && (
												<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
													<div className="text-center">
														<div>
															Verified by {project.verifier.split(" - ")[0]}
														</div>
														<div className="text-slate-300 mt-1">
															{project.verifier.split(" - ")[1]}
														</div>
													</div>
													<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
												</div>
											)}
										</div>
									))}
								</div>
							</div>

							{/* Certifications */}
							<div>
								<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
									<Award className="h-5 w-5" />
									{strings.cvSampleData.sections.certifications}
								</h3>
								<div className="grid grid-cols-1 gap-3">
									{strings.cvSampleData.certifications.map((cert, index) => (
										<div
											key={`cert-${cert.name}-${index}`}
											className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative"
										>
											<span className="font-medium text-sm text-slate-800">
												{cert.name}
											</span>
											<span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
												{strings.cvSampleData.statusLabels.verified}
											</span>
											<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
												<div className="text-center">
													<div>Verified by {cert.verifier.split(" - ")[0]}</div>
													<div className="text-slate-300 mt-1">
														{cert.verifier.split(" - ")[1]}
													</div>
												</div>
												<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Languages */}
							<div>
								<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
									<Globe className="h-5 w-5" />
									{strings.cvSampleData.sections.languages}
								</h3>
								<div className="grid grid-cols-1 gap-3">
									{strings.cvSampleData.languages.map((language, index) => (
										<div
											key={`language-${language.name}-${index}`}
											className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative"
										>
											<div className="flex items-center justify-between mb-1">
												<span className="font-medium text-sm text-slate-800">
													{language.name}
												</span>
												<span
													className={`text-xs px-2 py-1 rounded-full ${
														language.verified === true
															? "bg-green-100 text-green-800"
															: language.verified === "pending"
																? "bg-yellow-100 text-yellow-800"
																: "bg-gray-100 text-gray-800"
													}`}
												>
													{language.verified === true
														? strings.cvSampleData.statusLabels.verified
														: language.verified === "pending"
															? strings.cvSampleData.statusLabels.pending
															: strings.cvSampleData.statusLabels.unverified}
												</span>
											</div>
											<div className="text-slate-600 text-xs">
												{language.level}
											</div>
											{language.verified === true && language.verifier && (
												<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
													<div className="text-center">
														<div>
															Verified by {language.verifier.split(" - ")[0]}
														</div>
														<div className="text-slate-300 mt-1">
															{language.verifier.split(" - ")[1]}
														</div>
													</div>
													<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* QR Section */}
					<div className="bg-gray-50 p-6 text-center border-t">
						<div className="w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
							<QrCode className="h-12 w-12 text-gray-600" />
						</div>
						<p className="text-sm text-gray-600 mb-2">
							{strings.cvSampleData.qrSection.scanText}
						</p>
						<button
							type="button"
							className="text-slate-800 text-sm hover:underline bg-transparent border-none cursor-pointer"
						>
							{strings.cvSampleData.qrSection.viewHistoryLink}
						</button>
					</div>
				</div>

				{/* CV Features */}
				<div className="grid md:grid-cols-4 gap-8 mt-12">
					{strings.cvPreview.features
						.map((feature, index) => {
							const icons: LucideIcon[] = [QrCode, Shield, Database, Link];
							const Icon = icons[index];
							return {
								...feature,
								icon: Icon,
							};
						})
						.map((feature, index) => (
							<div
								key={`feature-${feature.title}-${index}`}
								className="text-center p-6"
							>
								<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<feature.icon className="h-8 w-8 text-slate-800" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600 text-sm">{feature.description}</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
