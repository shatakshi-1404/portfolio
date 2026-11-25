import { useMotionValue, useSpring } from 'framer-motion'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useMediaQuery, usePrefersReducedMotion } from '../../hooks/useMediaQuery'

/** Soft ambient glow that trails the pointer. Desktop (fine pointer) only; never intercepts clicks. */
export function CursorGlow() {
  const fine = useMediaQuery('(pointer: fine)')
  const reduce = usePrefersReducedMotion()
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.4 })

  useEffect(() => {
    if (!fine || reduce) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 200)
      y.set(e.clientY - 200)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [fine, reduce, x, y])

  if (!fine || reduce) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.13),rgba(34,211,238,0.05)_45%,transparent_70%)]"
    />
  )
}
