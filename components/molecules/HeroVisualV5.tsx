export function HeroVisualV5() {
  // Placeholder image data - using gradient placeholders that match the theme
  const images = [
    { id: 1, size: 'large', row: 1, col: 1 },
    { id: 2, size: 'small', row: 1, col: 2 },
    { id: 3, size: 'small', row: 1, col: 3 },
    { id: 4, size: 'medium', row: 2, col: 1 },
    { id: 5, size: 'small', row: 2, col: 2 },
    { id: 6, size: 'medium', row: 2, col: 3 },
    { id: 7, size: 'small', row: 3, col: 1 },
    { id: 8, size: 'medium', row: 3, col: 2 },
    { id: 9, size: 'small', row: 3, col: 3 },
  ]

  const getGradient = (id: number) => {
    const gradients = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-emerald-400 to-emerald-600',
      'from-indigo-400 to-indigo-600',
      'from-cyan-400 to-cyan-600',
      'from-pink-400 to-pink-600',
      'from-amber-400 to-amber-600',
      'from-rose-400 to-rose-600',
      'from-teal-400 to-teal-600',
    ]
    return gradients[id % gradients.length]
  }

  const getSizeClasses = (size: string) => {
    const sizeMap = {
      small: 'h-24 md:h-28',
      medium: 'h-32 md:h-36',
      large: 'h-40 md:h-48',
    }
    return sizeMap[size as keyof typeof sizeMap] || sizeMap.medium
  }

  return (
    <div className='relative'>
      {/* Decorative accent bar */}
      <div className='absolute -left-8 top-1/4 w-1 h-40 bg-linear-to-b from-blue-600 to-purple-600 rounded-full opacity-60' />

      {/* Image Gallery Grid */}
      <div className='grid grid-cols-3 gap-3 md:gap-4'>
        {images.map((img) => (
          <div
            key={img.id}
            className={`${getSizeClasses(img.size)} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-100 group cursor-pointer`}
          >
            {/* Gradient placeholder with overlay */}
            <div
              className={`w-full h-full bg-linear-to-br ${getGradient(img.id)} flex items-center justify-center relative overflow-hidden`}
            >
              {/* Animated background pattern */}
              <div className='absolute inset-0 opacity-20'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.3),transparent_50%)]' />
              </div>

              {/* Content overlay */}
              <div className='relative z-10 text-white text-center px-4'>
                <div className='text-2xl md:text-3xl font-bold opacity-90'>
                  {img.id}
                </div>
                <div className='text-xs md:text-sm font-medium opacity-75 mt-1'>
                  Professional
                </div>
              </div>

              {/* Hover effect */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom accent badge */}
      <div className='absolute -bottom-6 right-0 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-200'>
        <span className='text-xs font-semibold text-slate-700'>
          ✓ Verified Professionals
        </span>
      </div>
    </div>
  )
}
