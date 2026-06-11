import { motion } from 'framer-motion'
import Mandala from './Mandala'

/**
 * SectionTitle — consistent header block for every section.
 * Eyebrow (gold, letter-spaced), a display heading, optional subtitle,
 * and a small gold rule + dot ornament. `align` controls centering.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  ornament = true,
}) {
  const isCenter = align === 'center'
  const heading =
    tone === 'light' ? 'text-sacred-white' : 'text-temple-dark'
  const sub = tone === 'light' ? 'text-sacred-sage/90' : 'text-temple-green/80'

  return (
    <div
      className={[
        'relative max-w-2xl',
        isCenter ? 'mx-auto text-center' : 'text-left',
      ].join(' ')}
    >
      {ornament && isCenter && (
        <Mandala
          tone={tone === 'light' ? 'gold' : 'green'}
          className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        />
      )}

      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-sans text-xs font-semibold uppercase tracking-sacred text-gold-deep"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`relative font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-[2.7rem] ${heading}`}
      >
        {title}
      </motion.h2>

      <div
        className={[
          'mt-5 flex items-center gap-3',
          isCenter ? 'justify-center' : 'justify-start',
        ].join(' ')}
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mx-auto mt-5 max-w-xl font-display text-lg leading-relaxed ${sub}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
