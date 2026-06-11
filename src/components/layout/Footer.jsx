import { useLanguage } from '../../context/LanguageContext'
import { Phone, Mail, MapPin, FaWhatsapp } from '../../assets/icons'
import Mandala from '../ui/Mandala'

export default function Footer() {
  const { t, config, buildWhatsappLink, callLink, mapsLink } = useLanguage()
  const year = new Date().getFullYear()

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden bg-temple-night text-sacred-sage">
      <div className="absolute inset-0 bg-yantra-grid opacity-40" aria-hidden="true" />
      <Mandala tone="gold" className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 opacity-[0.06]" />
      <div className="gold-rule absolute inset-x-0 top-0" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={config.logo} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/50" />
            <span className="font-tamil text-lg font-semibold text-sacred-white">நந்தீஸ்வர்</span>
          </div>
          <p className="mt-4 font-display text-sm leading-relaxed text-sacred-sage/80">
            {t.footer.about}
          </p>
          <p className="mt-5 font-sans text-xs uppercase tracking-[0.2em] text-gold/80">
            {t.footer.tagline}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-playfair text-base font-semibold text-sacred-white">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5">
            {t.nav.links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="font-sans text-sm text-sacred-sage/75 transition-colors hover:text-gold-light"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-playfair text-base font-semibold text-sacred-white">
            {t.footer.services}
          </h4>
          <ul className="space-y-2.5">
            {t.services.items.slice(0, 7).map((s) => (
              <li key={s.title}>
                <button
                  onClick={() => go('services')}
                  className="font-sans text-sm text-sacred-sage/75 transition-colors hover:text-gold-light"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-playfair text-base font-semibold text-sacred-white">
            {t.footer.reach}
          </h4>
          <ul className="space-y-3.5 font-sans text-sm">
            <li>
              <a href={callLink} className="flex items-start gap-3 text-sacred-sage/80 transition-colors hover:text-gold-light">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {config.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${config.email}`} className="flex items-start gap-3 break-all text-sacred-sage/80 transition-colors hover:text-gold-light">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {config.email}
              </a>
            </li>
            <li>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sacred-sage/80 transition-colors hover:text-gold-light">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {config.address.line1}, {config.address.line2}, {config.address.line3}
                </span>
              </a>
            </li>
            <li>
              <a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sacred-sage/80 transition-colors hover:text-gold-light">
                <FaWhatsapp className="h-4 w-4 shrink-0 text-gold" /> {t.common.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative border-t border-white/10 py-6">
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-sacred-sage/60">
            © {year} {config.nameEn}. {t.footer.rights}
          </p>
          <p className="font-display text-xs italic text-gold/70">{t.footer.built}</p>
        </div>
      </div>
    </footer>
  )
}
