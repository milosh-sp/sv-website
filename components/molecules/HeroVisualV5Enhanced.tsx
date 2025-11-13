import Image from 'next/image'

interface ImageItem {
  id: number
  src: string
  alt: string
  size: 'small' | 'medium' | 'large'
}

interface HeroVisualV5EnhancedProps {
  images?: ImageItem[]
}

export function HeroVisualV5Enhanced({
  images = defaultImages,
}: HeroVisualV5EnhancedProps) {
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
            className={`${getSizeClasses(img.size)} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-100 group cursor-pointer relative`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className='object-cover group-hover:brightness-110 transition-all duration-300'
              sizes='(max-width: 768px) 100px, 150px'
            />
            {/* Overlay on hover */}
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
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

// Default placeholder images - replace with actual image paths
const defaultImages: ImageItem[] = [
  {
    id: 1,
    src: '/placeholder-1.jpg',
    alt: 'Professional 1',
    size: 'large',
  },
  {
    id: 2,
    src: '/placeholder-2.jpg',
    alt: 'Professional 2',
    size: 'small',
  },
  {
    id: 3,
    src: '/placeholder-3.jpg',
    alt: 'Professional 3',
    size: 'small',
  },
  {
    id: 4,
    src: '/placeholder-4.jpg',
    alt: 'Professional 4',
    size: 'medium',
  },
  {
    id: 5,
    src: '/placeholder-5.jpg',
    alt: 'Professional 5',
    size: 'small',
  },
  {
    id: 6,
    src: '/placeholder-6.jpg',
    alt: 'Professional 6',
    size: 'medium',
  },
  {
    id: 7,
    src: '/placeholder-7.jpg',
    alt: 'Professional 7',
    size: 'small',
  },
  {
    id: 8,
    src: '/placeholder-8.jpg',
    alt: 'Professional 8',
    size: 'medium',
  },
  {
    id: 9,
    src: '/placeholder-9.jpg',
    alt: 'Professional 9',
    size: 'small',
  },
]
