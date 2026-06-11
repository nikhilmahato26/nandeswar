import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'
import { ChevronDown } from '../../assets/icons'

function FaqItem({ q, a, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      className={[
        'overflow-hidden rounded-2xl glass transition-colors duration-300',
        isOpen ? 'border-gold/40' : '',
      ].join(' ')}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-temple-dark">
          {q}
        </span>
        <span
          className={[
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
            isOpen
              ? 'rotate-180 bg-gold/20 text-gold-deep'
              : 'bg-temple-green/10 text-temple-green',
          ].join(' ')}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 font-sans text-[0.95rem] leading-relaxed text-temple-green/80">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-sacred-white">
      <div className="absolute inset-0 bg-palm-leaf opacity-50" aria-hidden="true" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-4">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              index={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
