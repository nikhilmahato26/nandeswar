import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { FaWhatsapp, Phone, Icon } from '../../assets/icons'
import qrImage from '../../assets/images/qr.png'

export default function Pricing() {
  const { t, buildWhatsappLink, callLink, lang } = useLanguage()
  const [selectedService, setSelectedService] = useState('Horoscope Checking')

  // Map to select messages or handle booking selection
  const serviceWhatsAppMessages = {
    en: {
      'Horoscope Checking': 'Vanakkam 🙏 I have paid ₹100 for Horoscope Checking. Attached is the receipt. Please book my consultation.',
      'Marriage Prediction': 'Vanakkam 🙏 I have paid ₹250 for Marriage Prediction. Attached is the receipt. Please book my consultation.',
      'Full Report': 'Vanakkam 🙏 I have paid ₹1500 for the Full Report. Attached is the receipt. Please book my consultation.',
    },
    ta: {
      'Horoscope Checking': 'வணக்கம் 🙏 ஜாதகம் பார்க்க ₹100 செலுத்தி உள்ளேன். அதற்கான ரசீது இத்துடன் இணைக்கப்பட்டுள்ளது. எனது ஆலோசனையை உறுதி செய்யவும்.',
      'Marriage Prediction': 'வணக்கம் 🙏 திருமண பொருத்தத்திற்கு ₹250 செலுத்தி உள்ளேன். அதற்கான ரசீது இத்துடன் இணைக்கப்பட்டுள்ளது. எனது ஆலோசனையை உறுதி செய்யவும்.',
      'Full Report': 'வணக்கம் 🙏 முழு ஜாதக அறிக்கைக்கு ₹1500 செலுத்தி உள்ளேன். அதற்கான ரசீது இத்துடன் இணைக்கப்பட்டுள்ளது. எனது ஆலோசனையை உறுதி செய்யவும்.',
    }
  }

  const getWhatsAppMessage = () => {
    const currentLang = lang === 'ta' ? 'ta' : 'en'
    return serviceWhatsAppMessages[currentLang][selectedService] || serviceWhatsAppMessages[currentLang]['Horoscope Checking']
  }

  return (
    <section id="pricing" className="section-pad relative overflow-hidden bg-sacred-mist">
      {/* atmosphere */}
      <div className="absolute inset-0 bg-yantra-grid opacity-30" aria-hidden="true" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:items-stretch">
          {/* Pricing cards - Left Column (3 columns span on desktop) */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-3">
            {t.pricing.items.map((item, index) => {
              // Match service keys
              const isSelected = selectedService === (index === 0 ? 'Horoscope Checking' : index === 1 ? 'Marriage Prediction' : 'Full Report')
              const serviceKey = index === 0 ? 'Horoscope Checking' : index === 1 ? 'Marriage Prediction' : 'Full Report'
              
              return (
                <motion.div
                  key={item.name}
                  onClick={() => setSelectedService(serviceKey)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 flex-1 ${
                    isSelected
                      ? 'bg-gradient-to-r from-temple-green/90 to-temple-dark/90 text-sacred-white shadow-soft ring-2 ring-gold'
                      : 'glass border border-temple-green/10 text-temple-dark hover:border-gold/40 hover:bg-white/80'
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between h-full">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          isSelected ? 'bg-gold text-temple-night' : 'bg-temple-green/10 text-temple-green'
                        }`}>
                          <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                        </span>
                        <h3 className={`font-display text-xl font-semibold md:text-2xl ${
                          isSelected ? 'text-gold-light' : 'text-temple-green'
                        }`}>
                          {item.name}
                        </h3>
                      </div>
                      <p className={`mt-2 font-sans text-sm leading-relaxed ${
                        isSelected ? 'text-sacred-sage/95' : 'text-temple-green/70'
                      }`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Big Clear Pricing */}
                    <div className="flex items-baseline shrink-0">
                      <span className={`font-display text-4xl font-bold md:text-5xl lg:text-6xl ${
                        isSelected ? 'text-sacred-white' : 'text-temple-dark'
                      }`}>
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Booking Card & QR Code - Right Column (2 columns span on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-b from-white to-sacred-mist p-6 shadow-soft ring-1 ring-temple-green/5 lg:col-span-2 text-center flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-temple-green">
                {t.pricing.qrLabel}
              </h3>
              
              <div className="relative mx-auto mt-6 max-w-[220px]">
                <span className="absolute inset-0 rounded-2xl bg-gold/15 blur-xl animate-pulse-glow pointer-events-none" />
                <img
                  src={qrImage}
                  alt="UPI Payment QR Code"
                  className="relative z-10 w-full h-auto rounded-2xl border-2 border-gold/40 p-2.5 bg-white shadow-gold-glow transition-all duration-300 hover:scale-[1.02]"
                />
              </div>

              <p className="mt-6 font-sans text-xs md:text-sm leading-relaxed text-temple-green/80">
                {t.pricing.qrHelp}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button
                variant="gold"
                size="md"
                icon={FaWhatsapp}
                href={buildWhatsappLink(getWhatsAppMessage())}
                className="w-full"
              >
                {t.pricing.submit}
              </Button>
              <Button
                variant="outline"
                size="md"
                icon={Phone}
                href={callLink}
                className="w-full"
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
