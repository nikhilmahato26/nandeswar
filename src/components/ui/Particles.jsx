import { useMemo } from 'react'

/**
 * Particles — a field of slow-drifting golden motes for the hero / dark
 * sections. Lightweight (pure CSS animation, no canvas) and decorative.
 */
export default function Particles({ count = 22, className = '' }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 7 + Math.random() * 8,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    [count],
  )

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-gold animate-float-slow"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            boxShadow: '0 0 8px rgba(216,176,76,0.7)',
          }}
        />
      ))}
    </div>
  )
}
