import type { SkillGroupData } from '../types'

export const skillGroups: SkillGroupData[] = [
  {
    code: '01',
    title: 'Programming',
    note: 'Core',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    code: '02',
    title: 'Frameworks / Libraries',
    note: 'Working Knowledge',
    items: ['ReactJS', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    code: '03',
    title: 'Tools / Technologies',
    note: 'Working Knowledge',
    items: ['Git', 'GitHub', 'VS Code', 'MySQL'],
  },
  {
    code: '04',
    title: 'Concepts',
    note: 'Current Focus',
    items: ['Data Structures and Algorithms', 'Object-Oriented Programming'],
  },
]
