import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { content, siteConfig, whatsappMessage } from '../data/siteContent'

const STORAGE_KEY = 'nandeeswarar:lang'
const SUPPORTED = ['en', 'ta']

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED.includes(saved)) return saved
  // Prefer Tamil for Tamil-locale browsers, English otherwise
  const nav = window.navigator?.language?.toLowerCase() || ''
  return nav.startsWith('ta') ? 'ta' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLanguage = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLang(next)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'))
  }, [])

  // Build a WhatsApp deep link with a prefilled, language-aware message
  const buildWhatsappLink = useCallback(
    (customMessage) => {
      const text = customMessage || whatsappMessage[lang]
      return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
    },
    [lang],
  )

  const value = useMemo(
    () => ({
      lang,
      setLanguage,
      toggleLanguage,
      t: content[lang], // current-language content tree
      config: siteConfig,
      buildWhatsappLink,
      callLink: `tel:${siteConfig.phoneDial}`,
      mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`,
    }),
    [lang, setLanguage, toggleLanguage, buildWhatsappLink],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

export default LanguageContext
