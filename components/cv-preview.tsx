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
} from 'lucide-react'
import { structuredData } from '@/lib/seo-config'

export function CVPreview() {
  return (
    <section id="cv-preview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Digital CV2.0 - Verified by the Community
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4 text-pretty">
            See what makes our verified CV different from traditional resumes.
            Our flexible CV2.0 platform lets you showcase your verified skills
            in a format that best represents your expertise and achievements.
            You can hide your community status or display it proudly, you can
            hide skills badges and other tons of customizations. This is just
            one of many CV2.0 templates used to display your verified skills
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            Note: This is not going to be the final version, our CV2.0 platform
            is heavily in development and is going to be much more advanced and
            customizable.
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
                  Alex Johnson
                </h2>
                <p className="text-lg text-slate-200">
                  Senior Full Stack Developer
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
                  Profile
                </h3>
                <p className="text-gray-600 text-sm">
                  Full stack developer with 8+ years of experience building
                  scalable web applications. Passionate about clean code and
                  innovative solutions.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                  <Code className="h-5 w-5" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: 'JavaScript',
                      verified: true,
                      verifier: 'Sarah Chen - Senior Developer at Google',
                    },
                    {
                      name: 'React',
                      verified: true,
                      verifier: 'Michael Rodriguez - Engineering Lead at Meta',
                    },
                    { name: 'Node.js', verified: false },
                    {
                      name: 'Python',
                      verified: true,
                      verifier: 'James Wilson - Principal Engineer at Netflix',
                    },
                    {
                      name: 'AWS',
                      verified: true,
                      verifier: 'Emily Zhang - Cloud Architect at Amazon',
                    },
                    { name: 'Docker', verified: false },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative"
                    >
                      <span className="font-medium text-sm text-slate-800">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          skill.verified
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {skill.verified ? '✓ Verified' : '⏱ Pending'}
                      </span>
                      {skill.verified && skill.verifier && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
                          <div className="text-center">
                            <div>
                              Verified by {skill.verifier.split(' - ')[0]}
                            </div>
                            <div className="text-slate-300 mt-1">
                              {skill.verifier.split(' - ')[1]}
                            </div>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
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
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-sm">
                        MSc Computer Science
                      </span>
                      <span className="text-xs text-gray-500">2016</span>
                    </div>
                    <div className="text-slate-800 text-sm mb-2">
                      Stanford University
                    </div>
                    <span className="absolute top-0 right-0 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      ⏱ Pending
                    </span>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-sm">
                        BSc Software Engineering
                      </span>
                      <span className="text-xs text-gray-500">2014</span>
                    </div>
                    <div className="text-slate-800 text-sm mb-2">
                      UC Berkeley
                    </div>
                    <span className="absolute top-0 right-0 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                  <Briefcase className="h-5 w-5" />
                  Experience
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Senior Developer',
                      company: 'TechInnovate Inc.',
                      period: '2020 - Present',
                      verified: false,
                    },
                    {
                      title: 'Full Stack Developer',
                      company: 'WebSolutions LLC',
                      period: '2017 - 2020',
                      verified: true,
                    },
                    {
                      title: 'Junior Developer',
                      company: 'DigitalCreations',
                      period: '2015 - 2017',
                      verified: false,
                    },
                  ].map((job, index) => (
                    <div key={index} className="relative pb-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-sm">{job.title}</span>
                        <span className="text-xs text-gray-500">
                          {job.period}
                        </span>
                      </div>
                      <div className="text-slate-800 text-sm mb-2">
                        {job.company}
                      </div>
                      <p className="text-gray-600 text-xs">
                        {index === 0 &&
                          'Lead development of customer-facing web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.'}
                        {index === 1 &&
                          'Developed and maintained multiple web applications for clients across various industries. Implemented responsive designs and optimized performance.'}
                        {index === 2 &&
                          'Assisted in development of front-end interfaces and backend APIs. Participated in code reviews and agile development processes.'}
                      </p>
                      <span
                        className={`absolute top-0 right-0 text-xs px-2 py-1 rounded-full ${
                          job.verified
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {job.verified ? '✓ Verified' : '⏱ Unverified'}
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
                  Projects
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: 'E-commerce Platform',
                      description:
                        'Full-stack React/Node.js application with payment integration',
                      verified: true,
                      verifier: 'Lisa Chen - Product Manager at Shopify',
                    },
                    {
                      name: 'Task Management App',
                      description:
                        'React Native mobile app with real-time synchronization',
                      verified: false,
                    },
                    {
                      name: 'Data Analytics Dashboard',
                      description:
                        'Python/Django dashboard with interactive visualizations',
                      verified: true,
                      verifier: 'Mark Thompson - Data Engineer at Airbnb',
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-slate-800">
                          {project.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.verified
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {project.verified ? '✓ Verified' : '⏱ Pending'}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs">
                        {project.description}
                      </p>
                      {project.verified && project.verifier && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
                          <div className="text-center">
                            <div>
                              Verified by {project.verifier.split(' - ')[0]}
                            </div>
                            <div className="text-slate-300 mt-1">
                              {project.verifier.split(' - ')[1]}
                            </div>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
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
                  Certifications
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      name: 'AWS Certified',
                      verifier: 'David Kim - Solutions Architect at Amazon',
                    },
                    {
                      name: 'React Expert',
                      verifier: 'Lisa Johnson - Frontend Lead at Meta',
                    },
                    {
                      name: 'Node.js Master',
                      verifier: 'Robert Williams - Backend Engineer at Netflix',
                    },
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative"
                    >
                      <span className="font-medium text-sm text-slate-800">
                        {cert.name}
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        ✓ Verified
                      </span>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
                        <div className="text-center">
                          <div>Verified by {cert.verifier.split(' - ')[0]}</div>
                          <div className="text-slate-300 mt-1">
                            {cert.verifier.split(' - ')[1]}
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                  <Globe className="h-5 w-5" />
                  Languages
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      name: 'English',
                      level: 'C2',
                      verified: true,
                      verifier:
                        'Sarah Mitchell - Language Specialist at Cambridge Assessment',
                    },
                    {
                      name: 'Spanish',
                      level: 'B2',
                      verified: 'pending',
                    },
                    {
                      name: 'French',
                      level: 'A2',
                      verified: 'pending',
                    },
                  ].map((language, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm text-slate-800">
                          {language.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            language.verified === true
                              ? 'bg-green-100 text-green-800'
                              : language.verified === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {language.verified === true
                            ? '✓ Verified'
                            : language.verified === 'pending'
                            ? '⏱ Pending'
                            : '○ Unverified'}
                        </span>
                      </div>
                      <div className="text-slate-600 text-xs">
                        {language.level}
                      </div>
                      {language.verified === true && language.verifier && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48">
                          <div className="text-center">
                            <div>
                              Verified by {language.verifier.split(' - ')[0]}
                            </div>
                            <div className="text-slate-300 mt-1">
                              {language.verifier.split(' - ')[1]}
                            </div>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
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
              Scan to view my verified skills
            </p>
            <a href="#" className="text-slate-800 text-sm hover:underline">
              View full verification history
            </a>
          </div>
        </div>

        {/* CV Features */}
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {structuredData.cvFeatures
            .map((feature, index) => {
              const icons = [QrCode, Shield, Database, Link]
              const Icon = icons[index]
              return {
                ...feature,
                icon: Icon,
              }
            })
            .map((feature, index) => (
              <div key={index} className="text-center p-6">
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
  )
}
