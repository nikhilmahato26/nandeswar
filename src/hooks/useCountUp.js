import { useEffect, useRef, useState } from 'react'

/**
 * Animated count-up that starts when the element first enters the viewport.
 * Returns { ref, value } — attach ref to the element, render value.
 */
export function useCountUp(target = 0, duration = 1800) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      if (started.current) return
      started.current = true
      if (prefersReduced) {
        setValue(target)
        return
      }
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(target * eased))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, value }
}

export default useCountUp
