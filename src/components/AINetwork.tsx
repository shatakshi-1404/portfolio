import { useReducedMotion } from 'framer-motion'
import { useMemo, useState, type KeyboardEvent } from 'react'
import { aiEdges, aiNodes } from '../data/ai'

const nodeById = Object.fromEntries(aiNodes.map((n) => [n.id, n]))

function nodeWidth(label: string) {
  return Math.round(label.length * 8.6 + 40)
}

/** Quadratic curve between two node centres, bowed sideways by a stable amount. */
function edgePath(a: string, b: string, i: number) {
  const p = nodeById[a]
  const q = nodeById[b]
  const mx = (p.x + q.x) / 2
  const my = (p.y + q.y) / 2
  const dx = q.x - p.x
  const dy = q.y - p.y
  const len = Math.hypot(dx, dy) || 1
  const bow = (i % 2 === 0 ? 1 : -1) * Math.min(26, len * 0.1)
  const cx = mx + (-dy / len) * bow
  const cy = my + (dx / len) * bow
  return `M${p.x} ${p.y} Q${cx} ${cy} ${q.x} ${q.y}`
}

export function AINetwork() {
  const reduce = useReducedMotion()
  const [hover, setHover] = useState<string | null>(null)
  const [pinned, setPinned] = useState<string | null>('llm')
  const active = hover ?? pinned

  const edges = useMemo(
    () => aiEdges.map(([a, b], i) => ({ a, b, id: `e-${a}-${b}`, d: edgePath(a, b, i) })),
    [],
  )

  const connected = useMemo(() => {
    const set = new Set<string>()
    if (!active) return set
    set.add(active)
    aiEdges.forEach(([a, b]) => {
      if (a === active) set.add(b)
      if (b === active) set.add(a)
    })
    return set
  }, [active])

  const activeNode = active ? nodeById[active] : null
  const neighbours = activeNode ? aiNodes.filter((n) => n.id !== activeNode.id && connected.has(n.id)) : []

  const onKey = (e: KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setPinned((p) => (p === id ? null : id))
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
      {/* diagram (md+) */}
      <div className="glass relative hidden overflow-hidden rounded-3xl p-3 md:block">
        <div aria-hidden className="dot-bg pointer-events-none absolute inset-0 opacity-50" />
        <svg
          viewBox="0 0 800 480"
          className="relative h-auto w-full"
          role="group"
          aria-label="Interactive map of how LLMs, retrieval, tools, agents, evaluation and guardrails connect"
        >
          <defs>
            <linearGradient id="ai-edge" x1="0" x2="1">
              <stop offset="0" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
            <filter id="ai-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* edges */}
          {edges.map((e, i) => {
            const on = active ? e.a === active || e.b === active : false
            const dim = active && !on
            return (
              <g key={e.id}>
                <path id={e.id} d={e.d} fill="none" stroke="transparent" />
                <path
                  d={e.d}
                  fill="none"
                  stroke="url(#ai-edge)"
                  strokeWidth={on ? 2.2 : 1.3}
                  strokeDasharray="6 6"
                  className={reduce ? undefined : 'animate-dash-flow'}
                  opacity={on ? 1 : dim ? 0.1 : 0.4}
                  style={{ transition: 'opacity .3s, stroke-width .3s' }}
                />
                {!reduce && (
                  <circle r="2.8" fill={on ? '#67E8F9' : '#A78BFA'} opacity={dim ? 0.15 : 0.95}>
                    <animateMotion dur={`${4 + (i % 4)}s`} begin={`${(i * 0.37).toFixed(2)}s`} repeatCount="indefinite">
                      <mpath href={`#${e.id}`} />
                    </animateMotion>
                  </circle>
                )}
              </g>
            )
          })}

          {/* nodes */}
          {aiNodes.map((n) => {
            const w = nodeWidth(n.label)
            const isActive = n.id === active
            const isNear = connected.has(n.id)
            const dim = active && !isNear
            return (
              <g
                key={n.id}
                transform={`translate(${n.x - w / 2} ${n.y - 20})`}
                tabIndex={0}
                role="button"
                aria-pressed={pinned === n.id}
                aria-label={`${n.label}: ${n.description}`}
                onPointerEnter={() => setHover(n.id)}
                onPointerLeave={() => setHover(null)}
                onFocus={() => setHover(n.id)}
                onBlur={() => setHover(null)}
                onClick={() => setPinned((p) => (p === n.id ? null : n.id))}
                onKeyDown={(e) => onKey(e, n.id)}
                style={{ cursor: 'pointer', opacity: dim ? 0.35 : 1, transition: 'opacity .3s', outline: 'none' }}
                className="focus-visible:[&>rect]:stroke-cyan"
              >
                <rect
                  width={w}
                  height="40"
                  rx="20"
                  fill={isActive ? 'rgba(139,92,246,0.28)' : '#0E1424'}
                  stroke={isActive ? '#22D3EE' : isNear ? 'rgba(167,139,250,0.7)' : 'rgba(255,255,255,0.16)'}
                  strokeWidth={isActive ? 1.6 : 1}
                  filter={isActive ? 'url(#ai-glow)' : undefined}
                  style={{ transition: 'all .25s' }}
                />
                <circle cx="18" cy="20" r="3.5" fill={isActive ? '#22D3EE' : '#8B5CF6'} />
                <text
                  x="30"
                  y="25"
                  fill="#F4F5FA"
                  fontSize="14"
                  fontWeight="500"
                  fontFamily="Inter, system-ui, sans-serif"
                >
                  {n.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* chip grid (mobile) */}
      <div className="grid grid-cols-2 gap-2 md:hidden" role="group" aria-label="AI system components">
        {aiNodes.map((n) => (
          <button
            key={n.id}
            type="button"
            aria-pressed={pinned === n.id}
            onClick={() => setPinned((p) => (p === n.id ? null : n.id))}
            className={`rounded-2xl border px-3 py-3 text-left text-[13.5px] transition-colors ${
              pinned === n.id
                ? 'border-cyan/60 bg-violet/20 text-ink'
                : 'border-line bg-white/[0.03] text-muted hover:text-ink'
            }`}
          >
            {n.label}
          </button>
        ))}
      </div>

      {/* detail panel */}
      <div className="glass flex flex-col rounded-3xl p-6 sm:p-7" aria-live="polite">
        <p className="eyebrow">{activeNode ? 'Component' : 'System map'}</p>
        {activeNode ? (
          <>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{activeNode.label}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{activeNode.description}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Connects to</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {neighbours.map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => setPinned(n.id)}
                    className="chip cursor-pointer"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Hover, focus or tap any node to see how it fits into a reliable AI system and what it connects to.
          </p>
        )}
      </div>
    </div>
  )
}
