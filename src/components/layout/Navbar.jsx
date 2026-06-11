import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { useScrolled } from '../../hooks/useScrolled'
import { useActiveSection } from '../../hooks/useActiveSection'
import { Menu } from '../../assets/icons'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

const SECTION_IDS = ['home', 'about', 'services', 'healing', 'gemstone', 'why', 'faq', 'contact']

export default function Navbar() {
  const { t, config } = useLanguage()
  const scrolled = useScrolled(40)
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={[
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-sacred-white/80 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(4,35,24,0.5)] border-b border-white/60'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className="container-x flex h-[68px] items-center justify-between md:h-[76px]">
          {/* Brand */}
          <button
            onClick={() => go('home')}
            className="flex items-center gap-3 text-left"
            aria-label="Sri Nandeeswarar Astrology Centre — home"
          >
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-gold/30 blur-md" />
              <img
                src={config.logo}
                alt="Sri Nandeeswarar Astrology Centre logo"
                className="relative h-11 w-11 rounded-full object-cover ring-2 ring-gold/50 md:h-12 md:w-12"
                loading="eager"
              />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-tamil text-[0.95rem] font-semibold text-temple-dark">
                நந்தீஸ்வர்
              </span>
              <span className="block font-display text-xs font-medium uppercase tracking-[0.2em] text-temple-green/80">
                Astrology Centre
              </span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {t.nav.links.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className={[
                      'relative rounded-full px-3.5 py-2 font-sans text-sm font-medium transition-colors duration-300',
                      isActive ? 'text-temple-green' : 'text-temple-dark/70 hover:text-temple-green',
                    ].join(' ')}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button size="sm" variant="gold" onClick={() => go('contact')} className="hidden md:inline-flex">
              {t.nav.book}
            </Button>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-temple-green lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            onClose={() => setMenuOpen(false)}
            onNavigate={(id) => {
              setMenuOpen(false)
              setTimeout(() => go(id), 250)
            }}
            active={active}
          />
        )}
      </AnimatePresence>
    </>
  )
}
