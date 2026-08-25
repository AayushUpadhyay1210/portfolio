import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import type { SocialLink } from '../types'

function LeetCodeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955-.54-.54-1.414-.54-1.955 0l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523c.088-.351.264-.68.523-.973l3.854-4.126 4.115-4.404.02-.021c.55-.585.53-1.503-.045-2.063a1.489 1.489 0 0 0-.968-.44Z" />
      <path d="M20.811 12.273H10.463a1.383 1.383 0 0 0-1.386 1.381 1.383 1.383 0 0 0 1.386 1.382h10.348a1.383 1.383 0 0 0 1.386-1.382 1.383 1.383 0 0 0-1.386-1.381Z" />
    </svg>
  )
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
}

export function SocialIcon({ icon, className }: { icon: SocialLink['icon']; className?: string }) {
  if (icon === 'leetcode') return <LeetCodeMark className={className} />
  const Icon = iconMap[icon]
  return <Icon className={className} strokeWidth={1.75} />
}
