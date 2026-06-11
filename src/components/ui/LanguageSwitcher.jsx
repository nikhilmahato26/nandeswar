import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

/**
 * Floating sticky language switcher (bottom-left).
 * Glassmorphism pill with two states: தமிழ் / ENG.
 * Selection is persisted to localStorage by the LanguageContext.
 */
export default function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage()

  const Option = ({ code, label }) => {
    const active = lang === code
    return (
      <button
        type="button"
        onClick={() => setLanguage(code)}
        aria-pressed={active}
        className={[
          'relative z-10 rounded-full px-3.5 py-2 font-medium transition-colors duration-300',
          code === 'ta' ? 'font-tamil text-sm' : 'font-sans text-xs tracking-widest',
          active ? 'text-temple-night' : 'text-sacred-white/80 hover:text-sacred-white',
        ].join(' ')}
      >
        {label}
      </button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="fixed bottom-5 left-5 z-50"
    >
      <div className="glass-dark relative flex items-center gap-1 rounded-full p-1 shadow-soft">
        {/* sliding gold indicator */}
        <motion.span
          layout
          className="absolute top-1 bottom-1 w-[calc(50%-2px)] rounded-full bg-gold shadow-gold-glow"
          animate={{ left: lang === 'ta' ? '2px' : 'calc(50% - 0px)' }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        />
        <Option code="ta" label="தமிழ்" />
        <Option code="en" label="ENG" />
      </div>
    </motion.div>
  )
}
