export interface NavItem {
  label: string
  href: string
  /** Section ids that should light this item up as active. */
  ids: string[]
}

export interface Stat {
  value: number
  decimals?: number
  suffix?: string
  label: string
}

export interface Project {
  id: string
  index: string
  name: string
  title: string
  description: string
  tech: string[]
  highlights: string[]
  github: string
  live: string
  visual: 'ops' | 'support'
}

export interface SkillGroup {
  title: string
  icon: 'code' | 'server' | 'database' | 'layout' | 'ai' | 'shield' | 'wrench' | 'cs'
  items: string[]
}

export interface Achievement {
  icon: 'trophy' | 'medal' | 'code' | 'award'
  title: string
  detail?: string
}

export interface Certification {
  title: string
  issuer: string
  detail?: string
}

export interface CapabilityGroup {
  index: string
  title: string
  icon: 'llm' | 'rag' | 'agent' | 'shield' | 'ml'
  items: string[]
}

export interface AINode {
  id: string
  label: string
  x: number
  y: number
  description: string
}

export interface OpenSourceContribution {
  id: string
  name: string
  subtitle: string
  tech: string[]
  points: string[]
  linkLabel: string
  href: string
  kind: 'pr' | 'commit'
}
