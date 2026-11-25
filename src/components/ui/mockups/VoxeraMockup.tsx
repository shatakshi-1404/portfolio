import { AlertTriangle, Hand, Inbox, Search } from 'lucide-react'

const conversations = [
  { name: 'Billing question', preview: 'Typing…', tag: 'Live', c: 'text-cyan bg-cyan/10', active: true },
  { name: 'Order status', preview: 'Thanks, that helps.', tag: 'Open', c: 'text-muted bg-white/10' },
  { name: 'Refund request', preview: 'Escalated to a human', tag: 'Escalated', c: 'text-lime bg-lime/10' },
  { name: 'Account access', preview: 'Waiting on customer', tag: 'SLA', c: 'text-violet-soft bg-violet/15' },
]

/** Original illustration of a real-time support inbox. Not a screenshot. */
export function VoxeraMockup() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A1120] text-[10px] shadow-2xl" aria-hidden>
      {/* inbox list */}
      <div className="flex w-[38%] shrink-0 flex-col border-r border-white/[0.07]">
        <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2.5">
          <Inbox size={12} className="text-cyan" />
          <span className="font-display text-[11.5px] font-semibold text-ink">Inbox</span>
          <span className="ml-auto flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-muted">
            <Search size={9} /> Search
          </span>
        </div>
        <ul className="flex-1 space-y-1 p-2">
          {conversations.map((c) => (
            <li
              key={c.name}
              className={`rounded-lg border p-2 ${
                c.active ? 'border-cyan/40 bg-cyan/[0.07]' : 'border-transparent hover:bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-violet/60 to-cyan/60 text-[8px] font-bold text-white">
                  {c.name[0]}
                </span>
                <span className="truncate text-[10.5px] font-medium text-ink">{c.name}</span>
                <span className={`ml-auto rounded px-1.5 py-0.5 text-[8px] ${c.c}`}>{c.tag}</span>
              </div>
              <p className="mt-1 truncate pl-[26px] text-muted">{c.preview}</p>
            </li>
          ))}
        </ul>
        <div className="border-t border-white/[0.07] px-3 py-2 font-mono text-[8.5px] uppercase tracking-wider text-muted">
          Tenant-isolated workspace
        </div>
      </div>

      {/* thread */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2.5">
          <span className="font-display text-[11.5px] font-semibold text-ink">Billing question</span>
          <span className="ml-auto flex items-center gap-1 rounded-full bg-lime/10 px-2 py-0.5 font-mono text-[9px] text-lime">
            <span className="h-1 w-1 animate-pulse rounded-full bg-lime" /> connected
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-3">
          <div className="max-w-[78%] rounded-2xl rounded-bl-sm bg-white/[0.07] px-3 py-2 text-ink/90">
            I was charged twice. Can you check?
          </div>
          <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-sm bg-gradient-to-br from-violet/60 to-violet/40 px-3 py-2 text-white">
            Looking into your account now.
          </div>
          <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-white/[0.07] px-3 py-2.5" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-muted"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 rounded-lg border border-lime/25 bg-lime/[0.06] px-2.5 py-2 text-lime">
            <Hand size={12} />
            <span>Human takeover available</span>
            <span className="ml-auto rounded bg-lime/20 px-1.5 py-0.5 text-[8.5px] font-medium">Take over</span>
          </div>
        </div>
      </div>

      {/* ticket panel */}
      <div className="hidden w-[130px] shrink-0 flex-col gap-3 border-l border-white/[0.07] bg-white/[0.015] p-3 md:flex">
        <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Ticket</p>
        <div>
          <p className="text-muted">Status</p>
          <p className="mt-0.5 text-ink">Open</p>
        </div>
        <div>
          <p className="flex items-center gap-1 text-muted">
            <AlertTriangle size={9} /> SLA
          </p>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan to-violet" />
          </div>
        </div>
        <div>
          <p className="text-muted">Assigned</p>
          <p className="mt-0.5 text-ink">AI assistant</p>
        </div>
      </div>
    </div>
  )
}
