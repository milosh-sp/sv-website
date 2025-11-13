export interface ImageItem {
  id: number
  src: string
  alt: string
  size: 'small' | 'medium' | 'large'
}

export interface HeroVisualV5EnhancedProps {
  images?: ImageItem[]
}
