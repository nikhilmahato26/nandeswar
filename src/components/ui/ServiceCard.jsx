import { motion } from 'framer-motion'
import { Icon } from '../../assets/icons'

/**
 * ServiceCard — used by the Services and Healing grids.
 * Glassmorphism card with a glowing icon medallion and gold hover accent.
 */
export default function ServiceCard({ iconKey, title, text, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-start rounded-2xl glass p-6 shadow-glass transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_22px_55px_-22px_rgba(11,93,59,0.5)]"
    >
      {/* icon medallion */}
      <div className="relative mb-5">
        <span className="absolute inset-0 rounded-xl bg-gold/20 blur-md transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-temple-green to-temple-dark text-gold-light shadow-green-glow ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-105">
          <Icon name={iconKey} className="h-6 w-6" strokeWidth={1.6} />
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold text-temple-dark transition-colors group-hover:text-temple-green">
        {title}
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-temple-green/70">
        {text}
      </p>

      {/* corner accent that draws on hover */}
      <span className="pointer-events-none absolute right-5 top-5 h-2 w-2 rotate-45 border-r border-t border-gold/0 transition-colors duration-500 group-hover:border-gold" />
    </motion.article>
  )
}
