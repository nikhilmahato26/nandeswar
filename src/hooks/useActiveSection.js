import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in view, for navbar highlighting.
 * Pass an array of section ids that exist as elements in the DOM.
 */
export function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids[0] || '')

  useEffect(() => {
    if (!ids.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export default useActiveSection
