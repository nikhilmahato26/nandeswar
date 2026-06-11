import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'

/* A small faceted gem rendered in the stone's own colour */
function Gem({ color }) {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 drop-shadow" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${color}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="35%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.65)" strokeWidth="0.6">
        <polygon points="32,4 50,20 32,60 14,20" fill={`url(#g-${color})`} />
        <polygon points="32,4 50,20 32,24 14,20" fill="#ffffff" opacity="0.28" />
        <line x1="32" y1="4" x2="32" y2="60" />
        <line x1="14" y1="20" x2="50" y2="20" />
        <line x1="32" y1="24" x2="14" y2="20" />
        <line x1="32" y1="24" x2="50" y2="20" />
      </g>
    </svg>
  )
}

export default function Gemstone() {
  const { t } = useLanguage()

  return (
    <section id="gemstone" className="section-pad relative overflow-hidden bg-sacred-white">
      <div className="absolute inset-0 bg-palm-leaf opacity-50" aria-hidden="true" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.gemstone.eyebrow}
          title={t.gemstone.title}
          subtitle={t.gemstone.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.gemstone.items.map((stone, i) => (
            <motion.article
              key={stone.name}
              initial={{ opacity: 0, y: 28, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 text-center shadow-glass transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(11,93,59,0.5)]"
            >
              {/* coloured aura */}
              <span
                className="pointer-events-none absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ background: stone.color }}
              />
              <div className="relative mx-auto mb-4 flex justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Gem color={stone.color} />
              </div>
              <h3 className="relative font-display text-xl font-semibold text-temple-dark">{stone.name}</h3>
              <p className="relative mt-1 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-gold-deep">
                {t.gemstone.planetLabel}: {stone.planet}
              </p>
              <p className="relative mt-3 font-sans text-sm leading-relaxed text-temple-green/75">
                {stone.benefit}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
