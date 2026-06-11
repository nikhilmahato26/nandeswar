import { Quote } from '../../assets/icons'

/**
 * TestimonialCard — sacred quote presentation for the testimonials slider.
 */
export default function TestimonialCard({ quote, name, place }) {
  return (
    <figure className="relative mx-auto flex max-w-2xl flex-col items-center rounded-3xl glass px-7 py-10 text-center shadow-glass sm:px-12">
      <Quote className="mb-5 h-9 w-9 text-gold/70" strokeWidth={1.4} />
      <blockquote className="font-display text-xl leading-relaxed text-temple-dark sm:text-2xl">
        “{quote}”
      </blockquote>
      <span className="mt-7 flex items-center gap-3">
        <span className="h-px w-7 bg-gold/60" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-7 bg-gold/60" />
      </span>
      <figcaption className="mt-5">
        <span className="block font-playfair text-lg font-semibold text-temple-green">
          {name}
        </span>
        <span className="mt-0.5 block font-sans text-xs uppercase tracking-widest text-temple-green/60">
          {place}
        </span>
      </figcaption>
    </figure>
  )
}
