import { Users, Award, TrendingUp } from 'lucide-react'

export function HeroVisualV3() {
  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Verified by real professionals',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Credible Endorsements',
      description: 'Proven skill verification',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Boost your professional profile',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <div className='space-y-4'>
      {features.map((feature) => {
        const Icon = feature.icon
        return (
          <div
            key={feature.title}
            className='group relative bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300'
          >
            {/* Accent bar on left */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${feature.color} rounded-l-xl`}
            />

            {/* Content */}
            <div className='flex items-start gap-4 pl-2'>
              <div
                className={`w-12 h-12 rounded-lg bg-linear-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                <Icon className='w-6 h-6 text-white' aria-hidden='true' />
              </div>

              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-slate-900 mb-1'>
                  {feature.title}
                </h3>
                <p className='text-sm text-slate-600'>{feature.description}</p>
              </div>
            </div>

            {/* Hover indicator */}
            <div className='absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'>
              <div className='w-2 h-2 rounded-full bg-slate-300' />
            </div>
          </div>
        )
      })}

      {/* Bottom CTA Card */}
      <div className='bg-linear-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white mt-6'>
        <p className='text-sm font-medium mb-2 opacity-90'>
          Ready to get started?
        </p>
        <p className='text-lg font-semibold'>
          Join thousands of verified professionals
        </p>
      </div>
    </div>
  )
}
