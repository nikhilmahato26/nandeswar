import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import Mandala from '../ui/Mandala'

/**
 * Siddha — a quiet editorial band that gives the Siddha tradition its own
 * voice between the healing grid and the gemstones. Parallax mandala +
 * a sacred quote + three tenets. Light sage ground for breathing room.
 */
export default function Siddha() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section ref={ref} className="relative overflow-hidden bg-sacred-sage py-24 md:py-32">
      {/* parallax mandala */}
      <motion.div
        style={{ y, rotate }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
      >
        <Mandala tone="green" className="h-full w-full opacity-[0.10]" />
      </motion.div>

      <div className="container-x relative max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 font-sans text-xs font-semibold uppercase tracking-sacred text-gold-deep"
        >
          {t.siddha.eyebrow}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl font-medium leading-snug text-balance text-temple-dark sm:text-3xl md:text-4xl"
        >
          “{t.siddha.quote}”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 font-playfair text-sm italic tracking-wide text-temple-green/70"
        >
          — {t.siddha.attribution}
        </motion.p>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-3">
          {t.siddha.tenets.map((tenet, i) => (
            <motion.div
              key={tenet.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 font-playfair text-sm font-semibold text-gold-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-semibold text-temple-dark">{tenet.title}</h3>
              <p className="mt-1 font-sans text-sm leading-relaxed text-temple-green/75">{tenet.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
