import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from '../ui/ServiceCard'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="section-pad relative overflow-hidden bg-sacred-mist">
      <div className="absolute inset-0 bg-palm-leaf opacity-50" aria-hidden="true" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.services.items.map((s, i) => (
            <ServiceCard key={s.title} iconKey={s.iconKey} title={s.title} text={s.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
