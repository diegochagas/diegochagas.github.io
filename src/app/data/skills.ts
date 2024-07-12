import { iconName } from '../components/icons'

export interface Skill {
  title: string
  description?: string
  icon?: iconName
}

export const codeSkills: Skill[] = [
  { title: 'React.js', icon: 'react' },
  { title: 'Next.js', icon: 'next' },
  { title: 'Typescript', icon: 'typescript' },
  { title: 'HTML', icon: 'html' },
  { title: 'CSS', icon: 'css' },
  { title: 'JavaScript', icon: 'javascript' },
  { title: 'Tailwind', icon: 'tailwind' },
  { title: 'Bootstrap', icon: 'bootstrap' },
  { title: 'Node.js', icon: 'node' },
  { title: 'Angular', icon: 'angular' },
  { title: 'SQL', icon: 'sql' },
]

export const designSkills: Skill[] = [
  { title: 'Adobe Photoshop', icon: 'photoshop' },
  { title: 'Adobe Premiere', icon: 'premiere' },
  { title: 'Adobe After Effects', icon: 'after-effects' },
]

export const softSkills: Skill[] = [
  { title: 'Willingness to learn', description: 'Open-mindedness and adaptability to new ideas and feedback.' },
  { title: 'Organised', description: 'Methodical in task planning and execution, with strong time management abilities.' },
  { title: 'Teamwork', description: 'Effective communication, active listening, and sharing knowledge and experiences.' },
]
