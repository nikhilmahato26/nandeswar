import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { X, ChevronRight, FaWhatsapp, Phone } from '../../assets/icons'
import Mandala from '../ui/Mandala'

/**
 * MobileMenu — full-screen overlay navigation for small screens.
 */
export default function MobileMenu({ onClose, onNavigate, active }) {
  const { t, buildWhatsappLink, callLink, config } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-temple-night/70 backdrop-blur-sm" onClick={onClose} />

      {/* panel */}
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 32 }}
        className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col overflow-hidden bg-temple-dark text-sacred-white shadow-soft"
      >
        <Mandala tone="gold" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-[0.08]" />

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <img src={config.logo} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/50" />
            <span className="font-tamil text-base font-semibold">நந்தீஸ்வர்</span>
          </div>
          <button onClick={onClose} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {t.nav.links.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05 }}
              >
                <button
                  onClick={() => onNavigate(link.id)}
                  className={[
                    'flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left font-display text-lg transition-colors',
                    active === link.id ? 'bg-white/10 text-gold-light' : 'text-sacred-white/85 hover:bg-white/5',
                  ].join(' ')}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-white/10 p-5">
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-sans font-medium text-white"
          >
            <FaWhatsapp className="h-5 w-5" /> {t.common.whatsapp}
          </a>
          <a
            href={callLink}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 font-sans font-medium text-temple-night"
          >
            <Phone className="h-5 w-5" /> {t.common.call}
          </a>
        </div>
      </motion.aside>
    </motion.div>
  )
}
