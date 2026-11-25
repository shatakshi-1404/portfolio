import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: 'code', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  {
    title: 'Backend',
    icon: 'server',
    items: ['FastAPI', 'REST APIs', 'WebSockets', 'Pydantic', 'SQLAlchemy', 'Alembic'],
  },
  {
    title: 'Databases & Infrastructure',
    icon: 'database',
    items: ['PostgreSQL', 'Redis', 'Celery', 'Docker'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'ai',
    items: ['LLM Integration', 'Groq', 'RAG', 'LangChain', 'LangGraph', 'pgvector', 'scikit-learn', 'TF-IDF'],
  },
  {
    title: 'Security & Testing',
    icon: 'shield',
    items: ['JWT', 'Argon2', 'RBAC', 'Rate Limiting', 'pytest', 'Ruff', 'Vitest', 'Playwright'],
  },
  { title: 'Tools', icon: 'wrench', items: ['Git', 'GitHub Actions', 'Docker'] },
  {
    title: 'Core Computer Science',
    icon: 'cs',
    items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
]
