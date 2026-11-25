import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  id?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, id, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Reveal>
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-violet to-cyan" aria-hidden />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 id={id} className="heading-xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="lead mt-5">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
