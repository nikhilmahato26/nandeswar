import { motion } from 'framer-motion'

/**
 * GlassCard — premium glassmorphism surface.
 * Provides the fade-up-on-scroll reveal and the soft gold-glow hover used
 * across services, healing, why-us and contact cards.
 */
export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'relative rounded-2xl glass shadow-glass transition-all duration-500',
        hover
          ? 'hover:-translate-y-1.5 hover:shadow-[0_22px_60px_-22px_rgba(11,93,59,0.45)] hover:border-gold/40'
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </MotionTag>
  )
}
