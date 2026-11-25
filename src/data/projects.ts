import type { OpenSourceContribution, Project } from '../types'

export const projects: Project[] = [
  {
    id: 'aurenops',
    index: '01',
    name: 'AurenOps',
    title: 'Enterprise AI Operations Platform',
    description:
      'An enterprise operations platform designed to orchestrate business workflows, approvals, reporting and background execution.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Celery', 'Redis', 'React', 'TypeScript'],
    highlights: [
      'Built a full-stack operations platform with a FastAPI and PostgreSQL backend.',
      'Implemented Celery/Redis background workers and scheduled jobs.',
      'Designed role-based access control with four roles: owner, admin, operator and viewer.',
      'Implemented a 56-endpoint REST API.',
      'Developed an approval inbox and live workflow canvas.',
      'Added analytics and CSV/PDF report exports.',
      'Load-tested the deployed API with 30 requests per endpoint; p95 latency below 0.9 seconds on authenticated read endpoints.',
    ],
    github: 'https://github.com/shatakshi-1404/AurenOps',
    live: 'https://auren-ops.vercel.app/',
    visual: 'ops',
  },
  {
    id: 'voxera',
    index: '02',
    name: 'Voxera',
    title: 'Multi-Tenant Customer Support SaaS',
    description:
      'A real-time customer support platform with tenant isolation, ticket management, live communication and intelligent support automation.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'WebSockets'],
    highlights: [
      'Built a multi-tenant support SaaS with a 53-endpoint REST API.',
      'Implemented JWT authentication and tenant isolation.',
      'Designed real-time inbox updates through WebSockets.',
      'Implemented live messages, typing indicators and escalations.',
      'Built human takeover, SLA-tracked tickets and analytics dashboards.',
      'Designed a CI pipeline with pytest, Vitest and Playwright.',
    ],
    github: 'https://github.com/shatakshi-1404/voxera',
    live: 'https://voxera-egeb.vercel.app/',
    visual: 'support',
  },
]

export const openSource: OpenSourceContribution[] = [
  {
    id: 'soup',
    name: 'Soup',
    subtitle: 'PyTorch-Based LLM Fine-Tuning CLI',
    tech: ['Python', 'pytest', 'Ruff'],
    points: [
      'Added 15 unit tests for the warmup.py auto-warmup-steps helper.',
      'Covered edge cases, bounds and validation.',
      'Addressed Ruff issues across four maintainer review rounds.',
    ],
    linkLabel: 'View pull request',
    href: 'https://github.com/MakazhanAlpamys/Soup/pull/274',
    kind: 'pr',
  },
  {
    id: 'mealie-mcp',
    name: 'Mealie MCP',
    subtitle: 'Documentation & testing',
    tech: ['Python', 'Testing', 'Documentation'],
    points: [
      'Documented local Mealie setup and environment variables to help contributors reproducibly run the live test suite.',
    ],
    linkLabel: 'View commit',
    href: 'https://github.com/shatakshi-1404/mealie-mcp/commit/180cc05392',
    kind: 'commit',
  },
]
