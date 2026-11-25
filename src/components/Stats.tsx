import { stats } from '../data/profile'
import { CountUp } from './ui/CountUp'
import { Reveal } from './ui/Reveal'

export function Stats() {
  return (
    <section id="stats" aria-label="Engineering snapshot" className="relative z-10 -mt-6 pb-8">
      <div className="container-x">
        <Reveal>
          <dl className="glass grid grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`relative flex flex-col px-6 py-8 sm:px-8 sm:py-10 ${i % 2 === 1 ? 'border-l border-line' : ''} ${
                  i >= 2 ? 'border-t border-line lg:border-t-0' : ''
                } ${i > 0 ? 'lg:border-l lg:border-line' : ''}`}
              >
                <dt className="order-2 mt-2 text-[13px] leading-snug text-muted">{s.label}</dt>
                <dd className="font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-none tracking-tight">
                  <span className="text-gradient">
                    <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
