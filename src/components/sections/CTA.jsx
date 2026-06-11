import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Button from '../ui/Button'
import Mandala from '../ui/Mandala'
import Particles from '../ui/Particles'
import { ArrowRight, FaWhatsapp } from '../../assets/icons'

export default function CTA() {
  const { t, buildWhatsappLink } = useLanguage()

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-temple-night py-24 text-sacred-white sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(110% 90% at 50% 50%, #0B5D3B 0%, #063B28 55%, #042318 100%)',
        }}
      />
      <div className="absolute inset-0 bg-yantra-grid opacity-40" />
      <Particles count={16} />
      <Mandala
        tone="gold"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      />

      <div className="container-x relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-sans text-xs font-semibold uppercase tracking-sacred text-gold-light"
        >
          {t.cta.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-5xl"
        >
          {t.cta.title}
        </motion.h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl font-display text-lg leading-relaxed text-sacred-sage/90"
        >
          {t.cta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="gold" size="lg" icon={ArrowRight} onClick={scrollToContact}>
            {t.cta.primary}
          </Button>
          <Button
            variant="glass-light"
            size="lg"
            icon={FaWhatsapp}
            href={buildWhatsappLink()}
          >
            {t.cta.whatsapp}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
