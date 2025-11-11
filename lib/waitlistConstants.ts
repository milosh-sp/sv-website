/**
 * Shared constants for waitlist forms
 * Centralized to eliminate duplication across form components
 */

interface SkillArea {
  id: string
  label: string
  description?: string
}

interface TechnicalSkill {
  id: string
  label: string
}

export const SKILL_AREAS: SkillArea[] = [
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'fullstack', label: 'Full Stack Development' },
  { id: 'devops', label: 'DevOps' },
  { id: 'data', label: 'Data Science' },
]

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { id: 'react', label: 'React' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'python', label: 'Python' },
  { id: 'aws', label: 'AWS' },
]
