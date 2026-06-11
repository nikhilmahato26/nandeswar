import { useLanguage } from '../../context/LanguageContext'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { Icon } from '../../assets/icons'
import Particles from '../ui/Particles'
import Mandala from '../ui/Mandala'

export default function Healing() {
  const { t } = useLanguage()

  return (
    <section
      id="healing"
      className="section-pad relative overflow-hidden bg-temple-night text-sacred-white"
    >
      {/* atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(100% 70% at 50% 0%, #0B5D3B 0%, #063B28 50%, #042318 100%)',
        }}
      />
      <div className="absolute inset-0 bg-yantra-grid opacity-50" />
      <Particles count={18} />
      <Mandala tone="gold" className="pointer-events-none absolute -right-32 top-1/2 h-[80vmin] w-[80vmin] -translate-y-1/2 opacity-[0.08]" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.healing.eyebrow}
          title={t.healing.title}
          subtitle={t.healing.subtitle}
          tone="light"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.healing.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass-dark p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <span className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:bg-gold/20" />
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold-light ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-105">
                <Icon name={item.iconKey} className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <h3 className="relative font-display text-xl font-semibold text-sacred-white">{item.title}</h3>
              <p className="relative mt-2 font-sans text-sm leading-relaxed text-sacred-sage/80">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
