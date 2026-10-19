export const profile = {
  name: 'Shatakshi Prasad',
  role: 'SDE + AI/ML Developer',
  email: 'shatakshiravaneshwarprasad@gmail.com',
  phone: '+91 9340215345',
  location: 'India',
};

export const links = {
  github: 'https://github.com/shatakshi-1404',
  linkedin: 'https://linkedin.com/in/shatakshi-prasad-9104772b',
  leetcode: 'https://leetcode.com/u/shatakshi-1404/',
  email: 'mailto:shatakshiravaneshwarprasad@gmail.com',
};

export const rotatingThemes = [
  'Scalable backend applications',
  'Full-stack software systems',
  'AI-powered applications',
  'Reliable developer tools',
];

export const navItems = [
  { label: './shatakshi', href: '#top', id: 'top' },
  { label: './about', href: '#about', id: 'about' },
  { label: './skills', href: '#skills', id: 'skills' },
  { label: './experience', href: '#experience', id: 'experience' },
  { label: './projects', href: '#projects', id: 'projects' },
  { label: './open-source', href: '#open-source', id: 'open-source' },
  { label: './certifications', href: '#certifications', id: 'certifications' },
  { label: './achievements', href: '#achievements', id: 'achievements' },
  { label: './contact', href: '#contact', id: 'contact' },
] as const;

export const sectionIds = navItems.map((n) => n.id);

export const about = {
  description:
    "I'm a Computer Science and Engineering student at VIT Bhopal University with an AI/ML specialization. I enjoy solving engineering problems, building complete software applications, developing reliable APIs, and integrating machine learning into useful products.",
  quickFacts: [
    'B.Tech CSE — AI/ML Specialization',
    'VIT Bhopal University',
    'Graduation: 2027',
    'CGPA: 8.56/10',
    'Location: India',
  ],
  whatIWorkOn: [
    'Software engineering',
    'Backend development',
    'Full-stack applications',
    'AI/ML integration',
    'Developer tools',
    'Testing and software reliability',
  ],
};

export interface SkillCategory {
  id: string;
  title: string;
  tier: 'core' | 'secondary';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Programming Languages', tier: 'core', skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { id: 'backend', title: 'Backend Engineering & Databases', tier: 'core', skills: ['FastAPI', 'REST APIs', 'Pydantic', 'SQLAlchemy', 'Alembic', 'PostgreSQL'] },
  { id: 'frontend', title: 'Frontend Development', tier: 'secondary', skills: ['React', 'TypeScript', 'HTML', 'CSS'] },
  { id: 'ai', title: 'AI/ML', tier: 'secondary', skills: ['scikit-learn', 'TF-IDF', 'LLM Integration', 'Groq'] },
  { id: 'security', title: 'Security & Reliability', tier: 'core', skills: ['JWT', 'Argon2', 'RBAC', 'Rate Limiting'] },
  { id: 'tools', title: 'Developer Tools & Testing', tier: 'secondary', skills: ['Git', 'GitHub Actions', 'Docker', 'pytest', 'Ruff'] },
  { id: 'cs', title: 'Computer Science Fundamentals', tier: 'secondary', skills: ['Data Structures and Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
];

export const experience = {
  company: 'MPOnline Limited',
  subtitle: 'Joint venture of the Government of Madhya Pradesh and TCS',
  role: 'Advanced Software Engineering & Development Intern',
  period: 'May 2026 – July 2026',
  points: [
    'Completed structured SDE-focused training covering software engineering and AI/ML fundamentals.',
    'Developed a full-stack Library Management System using React and FastAPI.',
    'Implemented book catalog CRUD operations.',
    'Built borrow/return workflows.',
    'Implemented book availability tracking.',
    'Added server-side validation.',
  ],
  // TODO: paste the certificate URL from your resume. The button is hidden until this is set.
  certificateUrl: undefined as string | undefined,
};

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  description: string;
  stack: string[];
  decisions: string[];
  github: string;
  demo: string;
  caseStudy: {
    overview: string;
    problem: string;
    features: string[];
    conventional?: string[];
    ai?: string[];
    backend?: string[];
    security?: string[];
    testing?: string[];
    deployment?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'hireflow',
    index: '01',
    title: 'HireFlow AI',
    subtitle: 'ATS with AI Resume Analysis',
    featured: true,
    description:
      'An AI-assisted applicant tracking system combining candidate management, recruitment workflows, explainable resume matching, and interview preparation.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'scikit-learn', 'Docker'],
    decisions: [
      'TF-IDF job matching uses a weighted scoring formula independent of LLM output.',
      'Server-side stage-transition validation with row locking.',
      'Argon2 hashing, HttpOnly JWT cookies, RBAC and rate limiting.',
      '127 backend tests and 40 frontend tests.',
    ],
    github: 'https://github.com/shatakshi-1404/hireflow-ai-ats',
    demo: 'https://hireflow-ai-ats-7hmi.vercel.app',
    caseStudy: {
      overview:
        'An AI-assisted applicant tracking system combining candidate management, recruitment workflows, explainable resume matching, and interview preparation.',
      problem:
        'Hiring involves managing candidates, moving them through pipeline stages, scheduling interviews and screening resumes. HireFlow AI brings these workflows into one application.',
      features: [
        'Candidate search and CSV import',
        'Drag-and-drop recruitment pipeline',
        'Interview scheduling and funnel analytics',
        'Groq LLM-based resume parsing',
        'Interview-question generation',
        'TF-IDF-based job matching',
        'Audit logs',
      ],
      conventional: [
        'Candidate search and CSV import',
        'Drag-and-drop pipeline with server-side stage-transition validation',
        'Interview scheduling and funnel analytics',
        'Audit logs',
      ],
      ai: [
        'LLM (Groq): resume parsing and interview-question generation.',
        'Classical ML (TF-IDF): job matching with a weighted scoring formula that is independent of LLM output.',
      ],
      backend: [
        'FastAPI backend with a PostgreSQL database.',
        'Row locking on stage transitions.',
        'Alembic migrations for schema changes.',
      ],
      security: [
        'Argon2 password hashing.',
        'HttpOnly JWT cookies.',
        'Role-based access control (RBAC).',
        'Rate limiting.',
      ],
      testing: ['127 backend tests.', '40 frontend tests.'],
      deployment: ['Docker Compose for the stack.', 'Live demo hosted on Vercel.'],
    },
  },
  {
    id: 'codescope',
    index: '02',
    title: 'CodeScope',
    subtitle: 'Codebase Health & Static Analysis',
    description:
      'A local-first developer tool that analyzes codebases for maintainability, complexity, and potential static security issues.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'GitHub Actions'],
    decisions: [
      'Python AST-based analysis with JavaScript/TypeScript heuristics.',
      'Rotating refresh tokens and four-role access control.',
      'Docker deployment with GitHub Actions CI.',
    ],
    github: 'https://github.com/shatakshi-1404/codescope',
    demo: 'https://codescope.vercel.app',
    caseStudy: {
      overview:
        'A local-first developer tool that analyzes codebases for maintainability, complexity, and potential static security issues.',
      problem:
        'Codebases accumulate maintainability, complexity and security issues. CodeScope analyzes a codebase and reports on them, with issue triage and analysis history.',
      features: [
        'Python AST-based analysis',
        'JavaScript/TypeScript heuristics',
        'Repository health scoring',
        'Issue triage and analysis history',
        'TF-IDF and cosine-similarity issue clustering',
      ],
      conventional: [
        'Python AST-based analysis.',
        'JavaScript/TypeScript heuristics.',
        'Repository health scoring.',
        'Issue triage and analysis history.',
      ],
      ai: ['Classical ML: TF-IDF with cosine similarity to cluster related issues.'],
      backend: ['FastAPI backend.', 'PostgreSQL with SQLAlchemy.'],
      security: [
        'JWT authentication with Argon2 password hashing.',
        'Rotating refresh tokens.',
        'Four-role access control.',
        'Audit logging.',
      ],
      deployment: ['Docker deployment.', 'GitHub Actions CI.', 'Live demo hosted on Vercel.'],
    },
  },
  {
    id: 'interviewarena',
    index: '03',
    title: 'InterviewArena',
    subtitle: 'Interview Preparation Platform',
    description:
      'A full-stack platform for coding assessments, SQL practice, timed interviews, and personalized interview preparation.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'scikit-learn'],
    decisions: [
      'Server-enforced deadlines with autosave and automatic timeout submission.',
      'Logistic-regression practice-readiness scoring.',
      'Structured assessment reports and performance analytics.',
    ],
    github: 'https://github.com/shatakshi-1404/interview-arena',
    demo: 'https://interview-arena-ashy.vercel.app',
    caseStudy: {
      overview:
        'A full-stack platform for coding assessments, SQL practice, timed interviews, and personalized interview preparation.',
      problem:
        'Interview preparation needs timed, realistic practice across coding and SQL, plus feedback on readiness. InterviewArena provides assessments, mock interviews and analytics in one platform.',
      features: [
        'Timed assessments',
        'Coding challenges and SQL practice',
        'Mock interviews',
        'Structured assessment reports',
        'Performance analytics',
        'Personalized recommendations',
      ],
      conventional: [
        'Server-enforced deadlines.',
        'Autosave and automatic timeout submission.',
        'Structured assessment reports.',
        'Performance analytics.',
      ],
      ai: ['Classical ML: logistic-regression practice-readiness scoring (scikit-learn).'],
      backend: ['FastAPI backend with a PostgreSQL database.', 'Deadlines are enforced on the server.'],
    },
  },
];

export const openSource = [
  {
    title: 'Soup — PyTorch-Based LLM Fine-Tuning CLI',
    period: 'July 2026 – September 2026',
    stack: ['Python', 'pytest', 'Ruff'],
    details: [
      'Added 15 unit tests to the warmup-step helper.',
      'Covered training configurations, zero warmup ratio, min/max bounds, edge cases, and input validation.',
      'Fixed linting and formatting issues.',
      'Addressed maintainer feedback through four review rounds.',
      'Contribution merged.',
    ],
    href: 'https://github.com/MakazhanAlpamys/Soup/pull/274',
    linkLabel: 'View pull request',
    kind: 'pr' as const,
  },
  {
    title: 'Mealie MCP',
    period: 'October 2026',
    stack: ['Python', 'Testing', 'Documentation'],
    details: [
      'Documented local instance setup and required environment variables to make the live test suite reproducible.',
    ],
    href: 'https://github.com/shatakshi-1404/mealie-mcp/commit/180cc05392',
    linkLabel: 'View commit',
    kind: 'commit' as const,
  },
];

export const certifications = [
  { title: 'IBM Generative AI Professional Certificate', detail: '99/100', icon: 'badge' as const },
  { title: 'Oracle Cloud Infrastructure Data Science Professional', detail: 'Oracle', icon: 'cloud' as const },
];

export const achievements = [
  { text: 'Solved 300+ LeetCode problems using Java and Python.', icon: 'code' as const, href: links.leetcode },
  { text: 'Qualified Round 1 in Flipkart GRiD 7.0.', icon: 'flag' as const },
  { text: 'Qualified Round 1 in Flipkart GRiD 8.0.', icon: 'flag' as const },
  { text: 'Finalist, SolVIT Hackathon 2024.', icon: 'trophy' as const },
];

export const contact = {
  heading: "Let's build something useful.",
  text: "I'm interested in software engineering, backend development, full-stack systems, AI/ML applications, and opportunities to solve meaningful engineering problems.",
};
