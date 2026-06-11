# Sri Nandeeswarar Astrology Centre

A premium, bilingual (Tamil / English) website for **Sri Nandeeswarar Astrology Centre**, Pondicherry — Vedic astrology, Siddha healing, numerology and gemstone guidance.

Built to feel sacred, traditional and trustworthy: custom hand-built mandala/yantra SVGs, layered temple atmosphere, sacred geometry, glassmorphism and soft gold glows — not a generic astrology template.

---

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion** — scroll reveals, parallax, page transitions, animated counters
- **React Router DOM**
- **React Hook Form** — contact form validation
- **React Icons** + **Lucide React** (curated icon registry, no wildcard imports)

---

## Getting started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# create a production build (outputs to /dist)
npm run build

# preview the production build locally
npm run preview
```

---

## Project structure

```
src/
├── assets/icons/        # curated icon registry (named imports only)
├── components/
│   ├── ui/              # Button, GlassCard, ServiceCard, TestimonialCard,
│   │                    #   SectionTitle, Mandala, Particles,
│   │                    #   LanguageSwitcher, FloatingActions
│   ├── layout/          # Navbar, MobileMenu, Footer
│   └── sections/        # Hero, About, Services, Healing, Siddha, Gemstone,
│                        #   WhyChooseUs, Testimonials, FAQ, CTA, Contact
├── context/
│   └── LanguageContext.jsx   # bilingual state + WhatsApp/call/maps helpers
├── data/
│   └── siteContent.js        # ⭐ single source of truth (all copy + business data)
├── hooks/               # useScrolled, useActiveSection, useCountUp
├── pages/
│   └── Home.jsx
├── App.jsx
└── main.jsx
```

---

## Editing content

**All text and business data lives in [`src/data/siteContent.js`](src/data/siteContent.js).**
Nothing is hardcoded inside components — update copy, services, FAQs, testimonials,
gemstones and contact details there and both languages stay in sync.

- `siteConfig` — phone, email, WhatsApp number, address, logo URL (language-independent)
- `content.en` / `content.ta` — every translatable string

### Before launch — two things to fill in

1. **Logo** — currently loaded from the provided Cloudinary URL in `siteConfig.logo`.
   Replace with a hosted/local copy if preferred.
2. **Add real photos** for the hero / gallery if you want to extend beyond the
   current SVG-based art direction.

---

## How the contact form works

There is **no backend**. On submit, the form composes a tidy, language-aware
message and opens **WhatsApp** (`wa.me`) with all the details prefilled — the
client just taps send. This keeps hosting free and zero-maintenance (static deploy
to Netlify, Vercel, GitHub Pages, etc.).

---

## Language switching

- Floating glass pill, **bottom-left** (தமிழ் / ENG)
- Switches the entire site instantly via React Context
- Choice is persisted to `localStorage`; Tamil-locale browsers default to Tamil

---

Crafted with devotion · spasht.dev
