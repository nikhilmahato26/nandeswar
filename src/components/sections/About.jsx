import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'
import { Icon } from '../../assets/icons'
import Mandala from '../ui/Mandala'

export default function About() {
  const { t, config } = useLanguage()

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-sacred-white">
      <div className="absolute inset-0 bg-palm-leaf opacity-60" aria-hidden="true" />
      <div className="container-x relative">
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            {/* concentric mandala frame */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sacred-mist to-sacred-sage shadow-soft" />
            <Mandala tone="green" className="absolute inset-0 h-full w-full p-6 opacity-30" />
            <div className="absolute inset-[18%] overflow-hidden rounded-full ring-2 ring-gold/40 shadow-gold-glow">
              <img src={config.logo} alt="Sri Nandeeswarar emblem" className="h-full w-full object-cover" />
            </div>
            {/* floating sanskrit-style om dot accents */}
            <span className="absolute -right-2 top-10 h-3 w-3 rotate-45 bg-gold animate-float" />
            <span className="absolute -left-1 bottom-16 h-2 w-2 rotate-45 bg-temple-green animate-float-slow" />
          </motion.div>

          {/* Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl leading-relaxed text-temple-dark"
            >
              {t.about.lead}
            </motion.p>
            {t.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="mt-4 font-sans text-[0.95rem] leading-relaxed text-temple-green/80"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex items-start gap-4 rounded-2xl border border-sacred-sage/60 bg-white/70 p-5 transition-all duration-500 hover:border-gold/50 hover:shadow-glass"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sacred-mist text-temple-green ring-1 ring-gold/20 transition-colors group-hover:bg-temple-green group-hover:text-gold-light">
                <Icon name={pillar.iconKey} className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-temple-dark">{pillar.title}</h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-temple-green/70">{pillar.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
