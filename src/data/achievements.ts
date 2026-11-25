import type { Achievement, Certification } from '../types'

export const achievements: Achievement[] = [
  { icon: 'code', title: 'Solved 300+ LeetCode problems', detail: 'In Java and Python.' },
  { icon: 'trophy', title: 'Flipkart GRiD 7.0', detail: 'Qualified Round 1.' },
  { icon: 'trophy', title: 'Flipkart GRiD 8.0', detail: 'Qualified Round 1.' },
  { icon: 'medal', title: 'TCS CodeVita', detail: 'Qualified for Round 2 — Global Rank 12222.' },
]

export const certifications: Certification[] = [
  {
    title: 'IBM Generative AI Professional Certificate',
    issuer: 'IBM',
    detail: '99/100',
  },
  {
    title: 'Oracle Cloud Infrastructure Data Science Professional',
    issuer: 'Oracle',
  },
]
