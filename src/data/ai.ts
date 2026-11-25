import type { AINode, CapabilityGroup } from '../types'

export const capabilityGroups: CapabilityGroup[] = [
  {
    index: '01',
    title: 'LLM Applications',
    icon: 'llm',
    items: ['Groq API', 'Structured outputs', 'Prompt engineering', 'Tool calling'],
  },
  {
    index: '02',
    title: 'Retrieval-Augmented Generation',
    icon: 'rag',
    items: ['RAG pipelines', 'pgvector', 'Hybrid retrieval', 'Embeddings', 'Evidence-grounded responses'],
  },
  {
    index: '03',
    title: 'Agentic Systems',
    icon: 'agent',
    items: ['LangGraph', 'Multi-step workflows', 'Deterministic tools', 'Orchestration', 'Human approval'],
  },
  {
    index: '04',
    title: 'AI Reliability',
    icon: 'shield',
    items: [
      'Evaluation datasets',
      'Guardrails',
      'Prompt-injection defense',
      'Safety checks',
      'Fallback mechanisms',
    ],
  },
  {
    index: '05',
    title: 'Machine Learning',
    icon: 'ml',
    items: ['scikit-learn', 'NLP', 'TF-IDF', 'Classification', 'Applied ML'],
  },
]

// viewBox is 800 x 480
export const aiNodes: AINode[] = [
  {
    id: 'guard',
    label: 'Guardrails',
    x: 400,
    y: 56,
    description: 'Prompt-injection defense, safety checks and fallbacks wrapped around model calls.',
  },
  {
    id: 'rag',
    label: 'RAG',
    x: 190,
    y: 140,
    description: 'Grounds responses in retrieved evidence instead of relying on model memory.',
  },
  {
    id: 'tools',
    label: 'Tool Calling',
    x: 610,
    y: 140,
    description: 'The model requests an action; deterministic code validates and executes it.',
  },
  {
    id: 'llm',
    label: 'LLMs',
    x: 400,
    y: 245,
    description: 'Model calls through the Groq API, with structured outputs and carefully engineered prompts.',
  },
  {
    id: 'emb',
    label: 'Embeddings',
    x: 92,
    y: 290,
    description: 'Documents and queries turned into vectors so meaning can be compared.',
  },
  {
    id: 'agents',
    label: 'Agentic Workflows',
    x: 706,
    y: 290,
    description: 'Multi-step, stateful workflows orchestrated with LangGraph.',
  },
  {
    id: 'vec',
    label: 'Vector Search',
    x: 205,
    y: 405,
    description: 'pgvector-backed similarity search, combined with keyword signals for hybrid retrieval.',
  },
  {
    id: 'eval',
    label: 'Evaluation',
    x: 600,
    y: 405,
    description: 'Evaluation datasets that measure behaviour before and after every change.',
  },
  {
    id: 'hitl',
    label: 'Human-in-the-loop',
    x: 400,
    y: 440,
    description: 'Approval gates where an automated step should not act on its own.',
  },
]

export const aiEdges: [string, string][] = [
  ['llm', 'rag'],
  ['rag', 'emb'],
  ['emb', 'vec'],
  ['vec', 'rag'],
  ['llm', 'tools'],
  ['tools', 'agents'],
  ['agents', 'llm'],
  ['agents', 'hitl'],
  ['agents', 'eval'],
  ['eval', 'llm'],
  ['hitl', 'llm'],
  ['guard', 'llm'],
  ['guard', 'rag'],
  ['guard', 'tools'],
]
