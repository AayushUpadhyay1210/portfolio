export interface SectionMeta {
  id: string
  label: string
  short: string
}

export const sections: SectionMeta[] = [
  { id: 'hero', label: 'Player Intro', short: 'INTRO' },
  { id: 'performance', label: 'Career Stats', short: 'STATS' },
  { id: 'profile', label: 'Player Profile', short: 'PROFILE' },
  { id: 'skills', label: 'Performance Profile', short: 'SKILLS' },
  { id: 'projects', label: 'Featured Builds', short: 'PROJECTS' },
  { id: 'competition', label: 'Competition Record', short: 'EVENTS' },
  { id: 'history', label: 'Season History', short: 'EDUCATION' },
  { id: 'trophy', label: 'Certifications', short: 'CERTIFICATIONS' },
  { id: 'highlights', label: 'Career Highlights', short: 'HIGHLIGHTS' },
  { id: 'training', label: 'Training Camp', short: 'TRAINING' },
  { id: 'next', label: 'Next Season', short: 'NEXT' },
  { id: 'contact', label: 'Join The Team', short: 'CONTACT' },
]
