import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'
import TestimonialCard from '../ui/TestimonialCard'
import Mandala from '../ui/Mandala'
import { ChevronRight } from '../../assets/icons'

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}

export default function Testimonials() {
  const { t } = useLanguage()
  const items = t.testimonials.items
  const [[index, dir], setState] = useState([0, 0])

  const paginate = useCallback(
    (step) => {
      setState(([i]) => {
        const next = (i + step + items.length) % items.length
        return [next, step]
      })
    },
    [items.length],
  )

  const goTo = (i) => setState(([prev]) => [i, i > prev ? 1 : -1])

  // Auto-advance, paused on hover
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => paginate(1), 6500)
    return () => clearInterval(id)
  }, [paused, paginate])

  return (
    <section className="section-pad relative overflow-hidden bg-temple-night text-sacred-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(100% 80% at 50% 0%, #0B5D3B 0%, #063B28 55%, #042318 100%)',
        }}
      />
      <Mandala
        tone="gold"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />

      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          tone="light"
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[20rem] sm:min-h-[18rem]">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard {...items[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-sacred-white/80 transition-all duration-300 hover:border-gold/60 hover:bg-white/10 hover:text-gold-light"
            >
              <ChevronRight className="h-5 w-5 rotate-180" strokeWidth={1.8} />
            </button>

            <div className="flex items-center gap-2.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={[
                    'h-2 rounded-full transition-all duration-400',
                    i === index
                      ? 'w-7 bg-gold'
                      : 'w-2 bg-white/30 hover:bg-white/50',
                  ].join(' ')}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-sacred-white/80 transition-all duration-300 hover:border-gold/60 hover:bg-white/10 hover:text-gold-light"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
