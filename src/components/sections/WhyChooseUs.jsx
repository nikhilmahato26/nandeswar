import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'
import { Icon } from '../../assets/icons'
import { useCountUp } from '../../hooks/useCountUp'

/* A single animated statistic */
function Stat({ value, suffix, label, delay }) {
  const { ref, value: current } = useCountUp(value)
  const formatted =
    value >= 1000 ? current.toLocaleString('en-IN') : current

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="text-center"
    >
      <p
        ref={ref}
        className="font-display text-4xl font-semibold text-gold sm:text-5xl"
      >
        {formatted}
        <span className="text-gold-light">{suffix}</span>
      </p>
      <p className="mt-2 font-sans text-xs uppercase tracking-[0.16em] text-sacred-sage/80">
        {label}
      </p>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section id="why" className="section-pad relative overflow-hidden bg-sacred-mist">
      <div className="absolute inset-0 bg-yantra-grid opacity-40" aria-hidden="true" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          subtitle={t.why.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl glass p-6 shadow-glass transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-temple-green/10 text-temple-green ring-1 ring-temple-green/15 transition-transform duration-500 group-hover:scale-105 group-hover:bg-gold/15 group-hover:text-gold-deep">
                <Icon name={item.iconKey} className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-temple-dark">
                  {item.title}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-temple-green/75">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-temple-night px-6 py-12 text-sacred-white shadow-[0_30px_80px_-40px_rgba(6,59,40,0.8)] sm:px-12"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(120% 100% at 50% 0%, rgba(11,93,59,0.55) 0%, transparent 70%)',
            }}
          />
          <div className="absolute inset-0 bg-yantra-grid opacity-40" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {t.why.stats.map((s, i) => (
              <Stat
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
