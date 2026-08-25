export interface StatItem {
  value: string
  label: string
  suffix?: string
}

export interface SkillGroupData {
  code: string
  title: string
  note: string
  items: string[]
}

export interface ProjectData {
  id: string
  index: string
  status: 'Deployed' | 'Prototype'
  name: string
  tagline: string
  problem: string
  objective: string
  approach: string
  implementation: string
  technologies: string[]
  features: string[]
  outcome: string
  learned: string
  github: string
  live?: string
}

export interface CompetitionData {
  code: string
  name: string
  role: 'PARTICIPATED' | 'COMPETED' | 'CONTRIBUTED' | 'ATTENDED'
  description: string
}

export interface EducationData {
  id: string
  period: string
  title: string
  institution: string
  board?: string
  detail: string
  metric: string
  metricLabel: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'leetcode' | 'mail' | 'phone'
}
