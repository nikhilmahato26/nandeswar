import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { Phone, Mail, MapPin, Clock, FaWhatsapp, ArrowRight } from '../../assets/icons'

export default function Contact() {
  const { t, config, buildWhatsappLink, callLink, mapsLink, lang } = useLanguage()
  const f = t.contact.form

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched' })

  const onSubmit = async (data) => {
    const L = lang === 'ta'
    const lines = [
      L ? '🙏 புதிய ஆலோசனை கோரிக்கை' : '🙏 New Consultation Request',
      '',
      `${f.name}: ${data.name}`,
      `${f.phone}: ${data.phone}`,
      data.dob ? `${f.dob}: ${data.dob}` : null,
      data.time ? `${f.time}: ${data.time}` : null,
      data.place ? `${f.place}: ${data.place}` : null,
      data.service ? `${f.service}: ${data.service}` : null,
      data.message ? `${f.message}: ${data.message}` : null,
    ].filter(Boolean)

    window.open(buildWhatsappLink(lines.join('\n')), '_blank', 'noopener')
  }

  const infoCards = [
    {
      icon: Phone,
      title: t.contact.info.callTitle,
      value: config.phone,
      href: callLink,
    },
    {
      icon: Mail,
      title: t.contact.info.emailTitle,
      value: config.email,
      href: `mailto:${config.email}`,
    },
    {
      icon: MapPin,
      title: t.contact.info.visitTitle,
      value: `${config.address.line1}, ${config.address.line2}, ${config.address.line3}`,
      href: mapsLink,
    },
    {
      icon: Clock,
      title: t.contact.info.hoursTitle,
      value: t.contact.info.hours,
      href: null,
    },
  ]

  const field =
    'w-full rounded-xl border border-temple-green/15 bg-white/70 px-4 py-3 font-sans text-sm text-temple-dark placeholder:text-temple-green/40 outline-none transition-all duration-300 focus:border-gold/60 focus:ring-2 focus:ring-gold/20'
  const labelCls =
    'mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-temple-green/80'
  const errCls = 'mt-1 font-sans text-xs text-[#9B2226]'

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-sacred-mist">
      <div className="absolute inset-0 bg-yantra-grid opacity-40" aria-hidden="true" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoCards.map((c, i) => {
                const Inner = (
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group flex items-start gap-4 rounded-2xl glass p-5 shadow-glass transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-temple-green/10 text-temple-green ring-1 ring-temple-green/15 transition-colors duration-500 group-hover:bg-gold/15 group-hover:text-gold-deep">
                      <c.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-deep">
                        {c.title}
                      </p>
                      <p className="mt-1 break-words font-display text-base leading-snug text-temple-dark">
                        {c.value}
                      </p>
                    </div>
                  </motion.div>
                )
                return c.href ? (
                  <a
                    key={c.title}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.title}>{Inner}</div>
                )
              })}
            </div>
          </div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass p-6 shadow-glass sm:p-9 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="name">{f.name}</label>
                <input
                  id="name"
                  type="text"
                  placeholder={f.namePh}
                  className={field}
                  {...register('name', { required: true })}
                />
                {errors.name && <p className={errCls}>{f.required}</p>}
              </div>

              <div>
                <label className={labelCls} htmlFor="phone">{f.phone}</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder={f.phonePh}
                  className={field}
                  {...register('phone', {
                    required: true,
                    pattern: /^[0-9+\-\s()]{7,15}$/,
                  })}
                />
                {errors.phone && (
                  <p className={errCls}>
                    {errors.phone.type === 'pattern' ? f.invalidPhone : f.required}
                  </p>
                )}
              </div>

              <div>
                <label className={labelCls} htmlFor="dob">{f.dob}</label>
                <input id="dob" type="date" className={field} {...register('dob')} />
              </div>

              <div>
                <label className={labelCls} htmlFor="time">{f.time}</label>
                <input id="time" type="time" className={field} {...register('time')} />
              </div>

              <div>
                <label className={labelCls} htmlFor="place">{f.place}</label>
                <input
                  id="place"
                  type="text"
                  placeholder={f.placePh}
                  className={field}
                  {...register('place')}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="service">{f.service}</label>
                <select
                  id="service"
                  defaultValue=""
                  className={`${field} appearance-none`}
                  {...register('service')}
                >
                  <option value="" disabled>{f.servicePh}</option>
                  {t.services.items.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="message">{f.message}</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={f.messagePh}
                  className={`${field} resize-none`}
                  {...register('message')}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="gold"
                size="md"
                icon={FaWhatsapp}
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? f.sending : f.submit}
              </Button>
              <Button
                variant="outline"
                size="md"
                icon={Phone}
                href={callLink}
                className="w-full sm:w-auto"
              >
                {t.common.call}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
