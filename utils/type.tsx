import { IconType } from 'react-icons'

export interface ProfileService {
  id: number
  title: string
  about: string
  Icon: IconType
}

export interface NavItemProps {
  activeItem: string
  setActiveItem: Function
  name: string
  route: string
}

export interface Skill {
  name: string
  level: number
  Icon: IconType
}

export interface Tools {
  name: string
  level: number
  Icon: IconType
}

export interface ProjectType {
  name: string
  description: string
  image: string
  category: Category[]
  github: string
  deployed: string
  techStack: string[]
}

export type Category = 'all' | 'react' | 'nextjs' | 'go' | 'HTML'

// export type Category = 'react' | 'nextjs' | 'go' | 'HTML'
