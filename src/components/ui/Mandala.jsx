/**
 * Mandala — the site's signature element.
 *
 * A hand-built sacred-geometry yantra: concentric rings, an outer petal
 * lotus ring, two interlocking triangles (the shatkona) and radial spokes.
 * Rings counter-rotate slowly for a living, meditative feel.
 *
 * Purely decorative -> aria-hidden. Colours come from `tone`.
 */
export default function Mandala({ className = '', tone = 'gold' }) {
  const stroke = tone === 'green' ? '#0B5D3B' : '#D8B04C'
  const soft = tone === 'green' ? 'rgba(11,93,59,0.35)' : 'rgba(216,176,76,0.45)'

  // 12 lotus petals around the rim
  const petals = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 360) / 12
    return (
      <path
        key={i}
        d="M100 18 C112 36 112 52 100 64 C88 52 88 36 100 18 Z"
        fill="none"
        stroke={soft}
        strokeWidth="1"
        transform={`rotate(${a} 100 100)`}
      />
    )
  })

  // 24 radial spokes
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const a = (i * 360) / 24
    return (
      <line
        key={i}
        x1="100"
        y1="34"
        x2="100"
        y2="46"
        stroke={soft}
        strokeWidth="0.75"
        transform={`rotate(${a} 100 100)`}
      />
    )
  })

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {/* counter-rotating outer assembly */}
      <g className="origin-center animate-spin-slow" style={{ transformBox: 'fill-box' }}>
        <circle cx="100" cy="100" r="92" fill="none" stroke={soft} strokeWidth="0.75" />
        <circle cx="100" cy="100" r="82" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="2 5" />
        {petals}
      </g>

      <g className="origin-center animate-spin-reverse" style={{ transformBox: 'fill-box' }}>
        <circle cx="100" cy="100" r="66" fill="none" stroke={soft} strokeWidth="0.75" />
        {spokes}
      </g>

      {/* still inner yantra */}
      <circle cx="100" cy="100" r="52" fill="none" stroke={stroke} strokeWidth="1.25" />
      <polygon points="100,52 142,128 58,128" fill="none" stroke={stroke} strokeWidth="1" />
      <polygon points="100,148 58,72 142,72" fill="none" stroke={stroke} strokeWidth="1" />
      <circle cx="100" cy="100" r="26" fill="none" stroke={soft} strokeWidth="0.75" />
      <circle cx="100" cy="100" r="4" fill={stroke} />
    </svg>
  )
}
