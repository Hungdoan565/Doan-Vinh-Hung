import { Github, Linkedin, Mail } from 'lucide-react'
import type { ComponentType } from 'react'

interface SocialLink {
  platform: string
  url: string
  icon: ComponentType<{ size?: number; strokeWidth?: number }>
  label: string
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/Hungdoan565',
    icon: Github,
    label: 'GitHub',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/hungdoan565',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    platform: 'email',
    url: 'mailto:hungdoan565@gmail.com',
    icon: Mail,
    label: 'Email',
  },
]
