import type { NavItem, Stat } from '../types'

export const profile = {
  name: 'Shatakshi Prasad',
  firstName: 'Shatakshi',
  tagline: 'Software Engineering × Applied AI',
  email: 'shatakshiravaneshwarprasad@gmail.com',
  github: 'https://github.com/shatakshi-1404',
  linkedin: 'https://linkedin.com/in/shatakshi-prasad',
  leetcode: 'https://leetcode.com/u/shatakshi-1404/',
  /** Drop your PDF at public/Shatakshi_Prasad_Resume.pdf — this link serves it. */
  resume: '/Shatakshi_Prasad_Resume.pdf',
  cgpa: 8.61,
} as const

export const education = {
  school: 'VIT Bhopal University',
  degree: 'B.Tech, Computer Science and Engineering — AI/ML Specialization',
  years: '2023–2027',
  cgpa: `CGPA: ${profile.cgpa.toFixed(2)}/10`,
} as const

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', ids: ['home'] },
  { label: 'About', href: '#about', ids: ['about', 'stats'] },
  { label: 'Engineering', href: '#engineering', ids: ['engineering'] },
  { label: 'Applied AI', href: '#ai', ids: ['ai'] },
  { label: 'Experience', href: '#experience', ids: ['experience', 'skills', 'achievements'] },
  { label: 'Contact', href: '#contact', ids: ['contact'] },
]

/** Every section id the scroll-spy should watch. */
export const sectionIds = [
  'home',
  'stats',
  'about',
  'engineering',
  'ai',
  'experience',
  'skills',
  'achievements',
  'contact',
]

export const stats: Stat[] = [
  { value: 300, suffix: '+', label: 'LeetCode problems solved' },
  { value: profile.cgpa, decimals: 2, suffix: '/10', label: 'CGPA' },
  { value: 2, label: 'Flagship full-stack systems highlighted' },
  { value: 15, label: 'Open-source unit tests contributed to Soup' },
]

export const journey = [
  {
    title: 'Computer science foundations',
    body: 'DSA, OOP, DBMS, Operating Systems and Computer Networks.',
  },
  {
    title: 'Competitive programming',
    body: '300+ LeetCode problems in Java and Python; Flipkart GRiD and TCS CodeVita.',
  },
  {
    title: 'Production-oriented systems',
    body: 'AurenOps and Voxera: FastAPI, PostgreSQL, React, background workers and real-time features.',
  },
  {
    title: 'Applied AI',
    body: 'RAG, tool calling, agentic workflows with LangGraph, evaluation and guardrails.',
  },
  {
    title: 'Open source',
    body: 'Tests and documentation contributed to projects beyond my own repositories.',
  },
]
