import { motion } from 'framer-motion'

/**
 * Button / link with shared sacred styling.
 * variants: 'gold' | 'green' | 'outline' | 'glass'
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60 disabled:cursor-not-allowed'

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-[0.95rem]',
  lg: 'px-8 py-4 text-base',
}

const variants = {
  gold:
    'bg-gold text-temple-night shadow-gold-glow hover:bg-gold-light hover:shadow-[0_0_36px_-4px_rgba(216,176,76,0.7)]',
  green:
    'bg-temple-green text-sacred-white shadow-green-glow hover:bg-temple-dark',
  outline:
    'border border-gold/60 text-temple-dark hover:bg-gold/10 hover:border-gold',
  glass:
    'glass text-temple-dark hover:bg-white/70 shadow-glass',
  'glass-light':
    'border border-white/40 text-sacred-white hover:bg-white/10',
}

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  href,
  icon: Icon,
  className = '',
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <>
      {Icon && <Icon className="h-[1.1em] w-[1.1em]" strokeWidth={2} />}
      <span>{children}</span>
    </>
  )

  const motionProps = {
    whileHover: { y: -2, scale: 1.015 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  }

  if (href) {
    const external = href.startsWith('http') || href.startsWith('tel:')
    return (
      <motion.a
        href={href}
        className={classes}
        {...(external ? { target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
        {...motionProps}
        {...props}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {inner}
    </motion.button>
  )
}
