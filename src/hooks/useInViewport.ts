import { useEffect, useState, type RefObject } from 'react'

/** Live (non-sticky) visibility, used to pause the WebGL loop when the hero is off-screen. */
export function useInViewport(ref: RefObject<Element>): boolean {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.05,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return visible
}
