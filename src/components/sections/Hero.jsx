import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Mandala from '../ui/Mandala'
import Particles from '../ui/Particles'
import Button from '../ui/Button'
import { FaWhatsapp, Phone, ChevronDown, ArrowRight } from '../../assets/icons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t, buildWhatsappLink, callLink, config } = useLanguage()
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-temple-night text-sacred-white"
    >
      {/* Layered sacred background */}
      <div className="absolute inset-0">
        {/* deep radial green glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 80% at 50% 0%, #0B5D3B 0%, #063B28 45%, #042318 100%)',
          }}
        />
        {/* yantra dot grid */}
        <div className="absolute inset-0 bg-yantra-grid opacity-50" />
        {/* palm-leaf manuscript wash */}
        <div className="absolute inset-0 bg-palm-leaf" />
        {/* temple silhouette */}
        <TempleSilhouette />
        {/* particles */}
        <Particles count={26} />
      </div>

      {/* Giant slow mandala behind content */}
      <Mandala
        tone="gold"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
      />

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-center py-28 text-center">
        {/* Logo medallion */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="relative mb-7">
          <span className="absolute inset-0 rounded-full bg-gold/30 blur-2xl animate-pulse-glow" />
          <img
            src={config.logo}
            alt="Sri Nandeeswarar Astrology Centre logo"
            className="relative h-24 w-24 rounded-full object-cover shadow-gold-glow ring-4 ring-gold/40 sm:h-28 sm:w-28"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mb-5 font-sans text-[0.7rem] font-semibold uppercase tracking-sacred text-gold-light/90"
        >
          {t.hero.eyebrow}
        </motion.p>

        {/* Tamil headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="max-w-4xl font-tamil text-3xl font-bold leading-[1.25] text-balance sm:text-4xl md:text-5xl"
        >
          <span className="gold-text">{t.hero.titleTa}</span>
        </motion.h1>

        {/* English name */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-4 font-playfair text-xl font-medium tracking-wide text-sacred-white/90 sm:text-2xl"
        >
          {t.hero.titleEn}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-4 font-display text-base uppercase tracking-[0.25em] text-gold-light/80 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mx-auto mt-6 max-w-2xl font-display text-lg leading-relaxed text-sacred-sage/90"
        >
          {t.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="gold" size="lg" icon={ArrowRight} onClick={() => go('contact')}>
            {t.hero.ctaPrimary}
          </Button>
          <Button variant="green" size="lg" icon={FaWhatsapp} href={buildWhatsappLink()}>
            {t.hero.ctaWhatsapp}
          </Button>
          <Button variant="glass-light" size="lg" icon={Phone} href={callLink}>
            {t.hero.ctaCall}
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => go('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-sacred-sage/70 transition-colors hover:text-gold-light"
        aria-label={t.hero.scroll}
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em]">{t.hero.scroll}</span>
        <ChevronDown className="h-5 w-5 animate-float" />
      </motion.button>

      {/* bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-sacred-white/95" />
    </section>
  )
}

/* Subtle layered temple gopuram silhouette at the base of the hero */
function TempleSilhouette() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full opacity-30"
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="temple-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#021a12" stopOpacity="0" />
          <stop offset="100%" stopColor="#021a12" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* central gopuram */}
      <path
        fill="url(#temple-g)"
        d="M640 220 V120 l20-14 v-16 l-8-6 v-12 l28-20 28 20 v12 l-8 6 v16 l20 14 V220 Z"
      />
      {/* flanking towers */}
      <path fill="url(#temple-g)" d="M520 220 V150 l16-10 v-12 l24-16 24 16 v12 l16 10 V220 Z" />
      <path fill="url(#temple-g)" d="M820 220 V150 l16-10 v-12 l24-16 24 16 v12 l16 10 V220 Z" />
      {/* base wall + side fill */}
      <rect x="0" y="190" width="1440" height="30" fill="url(#temple-g)" />
    </svg>
  )
}
