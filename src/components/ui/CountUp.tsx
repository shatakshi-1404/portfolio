import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  to: number
  decimals?: number
  suffix?: string
  duration?: number
}

export function CountUp({ to, decimals = 0, suffix = '', duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to, duration, reduce])

  return (
    <span ref={ref} aria-label={`${to.toFixed(decimals)}${suffix}`}>
      <span aria-hidden>
        {value.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  )
}
