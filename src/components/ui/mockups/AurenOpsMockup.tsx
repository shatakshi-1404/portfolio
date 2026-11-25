import { CheckCheck, Clock, FileText, LayoutDashboard, ShieldCheck, Workflow } from 'lucide-react'

const sidebar = [
  { label: 'Overview', Icon: LayoutDashboard, active: false },
  { label: 'Workflows', Icon: Workflow, active: true },
  { label: 'Approvals', Icon: CheckCheck, active: false },
  { label: 'Reports', Icon: FileText, active: false },
  { label: 'Access', Icon: ShieldCheck, active: false },
]

/** Original illustration of an operations dashboard + workflow canvas. Not a screenshot. */
export function AurenOpsMockup() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020] text-[10px] shadow-2xl" aria-hidden>
      {/* sidebar */}
      <div className="hidden w-[116px] shrink-0 flex-col border-r border-white/[0.07] bg-white/[0.02] p-3 sm:flex">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-5 w-5 rounded-md bg-gradient-to-br from-violet to-cyan" />
          <span className="font-display text-[11px] font-semibold text-ink">AurenOps</span>
        </div>
        <ul className="space-y-1">
          {sidebar.map(({ label, Icon, active }) => (
            <li
              key={label}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                active ? 'bg-violet/20 text-ink' : 'text-muted'
              }`}
            >
              <Icon size={12} />
              {label}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-1 border-t border-white/[0.07] pt-3 text-muted">
          <p className="font-mono text-[8.5px] uppercase tracking-wider">Roles</p>
          {['owner', 'admin', 'operator', 'viewer'].map((r) => (
            <p key={r} className="font-mono text-[9px] text-ink/70">
              {r}
            </p>
          ))}
        </div>
      </div>

      {/* main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
          <p className="font-display text-[12px] font-medium text-ink">Workflow canvas</p>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 rounded-full bg-lime/10 px-2 py-0.5 font-mono text-[9px] text-lime">
              <span className="h-1 w-1 animate-pulse rounded-full bg-lime" /> live
            </span>
            <span className="rounded-md border border-white/10 px-2 py-0.5 text-muted">Export CSV / PDF</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1fr_auto]">
          {/* canvas */}
          <div className="relative overflow-hidden p-3">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
            <svg viewBox="0 0 360 210" className="relative h-full w-full">
              <defs>
                <linearGradient id="ao-edge" x1="0" x2="1">
                  <stop offset="0" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              {[
                'M70 55 C 100 55, 100 55, 128 55',
                'M200 55 C 225 55, 225 105, 250 105',
                'M128 150 C 150 150, 150 150, 176 150',
                'M70 55 C 70 100, 70 150, 76 150',
                'M250 105 C 250 130, 250 150, 262 160',
              ].map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="url(#ao-edge)"
                  strokeWidth="1.6"
                  strokeDasharray="5 7"
                  className="animate-dash-flow"
                  opacity="0.75"
                />
              ))}
              {[
                { x: 20, y: 38, w: 100, label: 'Trigger', sub: 'Scheduled job', c: '#8B5CF6' },
                { x: 128, y: 38, w: 108, label: 'Validate', sub: 'Business rules', c: '#22D3EE' },
                { x: 236, y: 88, w: 112, label: 'Approval', sub: 'Needs sign-off', c: '#A3E635' },
                { x: 20, y: 133, w: 100, label: 'Worker', sub: 'Celery / Redis', c: '#8B5CF6' },
                { x: 128, y: 133, w: 108, label: 'Report', sub: 'CSV / PDF', c: '#22D3EE' },
              ].map((n) => (
                <g key={n.label}>
                  <rect x={n.x} y={n.y} width={n.w - 8} height="36" rx="8" fill="#111A30" stroke={n.c} strokeOpacity="0.55" />
                  <circle cx={n.x + 12} cy={n.y + 18} r="3.5" fill={n.c} />
                  <text x={n.x + 22} y={n.y + 16} fill="#F4F5FA" fontSize="9.5" fontWeight="600" fontFamily="Inter, sans-serif">
                    {n.label}
                  </text>
                  <text x={n.x + 22} y={n.y + 28} fill="#929BB0" fontSize="7.5" fontFamily="Inter, sans-serif">
                    {n.sub}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* approval inbox */}
          <div className="hidden w-[150px] flex-col gap-2 border-l border-white/[0.07] bg-white/[0.015] p-3 md:flex">
            <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Approval inbox</p>
            {['Request A', 'Request B', 'Request C'].map((r, i) => (
              <div key={r} className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-ink">{r}</span>
                  <Clock size={10} className="text-muted" />
                </div>
                <div className="mt-1.5 h-1 w-3/4 rounded bg-white/10" />
                <div className="mt-1 h-1 w-1/2 rounded bg-white/10" />
                {i === 0 && (
                  <div className="mt-2 flex gap-1">
                    <span className="rounded bg-lime/15 px-1.5 py-0.5 text-[8.5px] text-lime">Approve</span>
                    <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8.5px] text-muted">Reject</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
