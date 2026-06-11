import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { FaWhatsapp, Phone } from '../../assets/icons'

/**
 * Sticky floating WhatsApp + Call actions (bottom-right).
 * The language switcher lives bottom-left so the two never collide.
 */
export default function FloatingActions() {
  const { buildWhatsappLink, callLink, t } = useLanguage()

  const items = [
    {
      label: t.common.whatsapp,
      href: buildWhatsappLink(),
      icon: FaWhatsapp,
      className: 'bg-[#25D366] text-white shadow-[0_0_24px_-4px_rgba(37,211,102,0.7)]',
      external: true,
    },
    {
      label: t.common.call,
      href: callLink,
      icon: Phone,
      className: 'bg-temple-green text-sacred-white shadow-green-glow',
      external: false,
    },
  ]

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {items.map((it, i) => (
        <motion.a
          key={it.label}
          href={it.href}
          target={it.external ? '_blank' : undefined}
          rel={it.external ? 'noopener noreferrer' : undefined}
          aria-label={it.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className={`group relative flex h-13 w-13 items-center justify-center rounded-full ${it.className}`}
          style={{ height: '3.25rem', width: '3.25rem' }}
        >
          <span className="absolute inset-0 animate-ping rounded-full opacity-20 [animation-duration:3s] bg-current" />
          <it.icon className="relative h-6 w-6" strokeWidth={2} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-temple-dark px-3 py-1.5 font-sans text-xs text-sacred-white opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
            {it.label}
          </span>
        </motion.a>
      ))}
    </div>
  )
}
