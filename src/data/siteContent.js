/**
 * Single source of truth for all site content.
 * Bilingual (Tamil + English). Components read from here via the
 * useLanguage() hook — never hardcode copy inside components.
 *
 * Shape:
 *   siteConfig            -> language-independent business data
 *   content[lang]         -> all translatable strings, keyed by 'en' | 'ta'
 *
 * `iconKey` fields map to the curated icon registry in src/assets/icons.
 */

// ---------------------------------------------------------------------------
// Language-independent business / contact data
// ---------------------------------------------------------------------------
export const siteConfig = {
  phone: '+91 7867011976',
  phoneDial: '+917867011976',
  phoneDisplay: '7867011976',
  email: 'barathiselvanarul@gmail.com',
  whatsapp: '917867011976',
  logo: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781169621/happy%20luxe/WhatsApp_Image_2026-06-11_at_13.44.39_jqx2lk.jpg',
  mapsQuery:
    'No.127, Saktheeswar Illam, C Cross, Sriram Nagar Extension, Lawspet, Pondicherry',
  address: {
    line1: 'No.127, Saktheeswar Illam',
    line2: 'C Cross, Sriram Nagar Extension',
    line3: 'Lawspet, Pondicherry',
  },
  nameEn: 'Sri Nandeeswarar Astrology Centre',
  nameTa: 'நந்தீஸ்வர் ஆன்மீக ஜோதிட ஆராய்ச்சி மையம்',
}

// Default WhatsApp greeting (prefilled message) per language
export const whatsappMessage = {
  en: 'Vanakkam 🙏 I would like to book a consultation at Sri Nandeeswarar Astrology Centre.',
  ta: 'வணக்கம் 🙏 நந்தீஸ்வர் ஆன்மீக ஜோதிட ஆராய்ச்சி மையத்தில் ஆலோசனை பதிவு செய்ய விரும்புகிறேன்.',
}

export const content = {
  // =========================================================================
  // ENGLISH
  // =========================================================================
  en: {
    langLabel: 'ENG',
    dir: 'ltr',

    nav: {
      links: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'healing', label: 'Healing' },
        { id: 'gemstone', label: 'Gemstones' },
        { id: 'why', label: 'Why Us' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' },
      ],
      book: 'Book Consultation',
    },

    common: {
      book: 'Book Consultation',
      bookAppointment: 'Book Appointment',
      whatsapp: 'WhatsApp',
      call: 'Call Now',
      scroll: 'Scroll',
      readMore: 'Learn more',
    },

    hero: {
      eyebrow: 'Pondicherry • Established in Tradition',
      titleTa: 'நந்தீஸ்வர் ஆன்மீக ஜோதிட ஆராய்ச்சி மையம்',
      titleEn: 'Sri Nandeeswarar Astrology Centre',
      subtitle: 'Ancient Wisdom • Spiritual Guidance • Divine Healing',
      description:
        'Vedic Astrology, Siddha Healing, Numerology, Gemstone Guidance and spiritual solutions — guidance drawn from ancient tradition to bring clarity, peace and direction to your life.',
      ctaPrimary: 'Book Consultation',
      ctaWhatsapp: 'WhatsApp',
      ctaCall: 'Call Now',
      scroll: 'Scroll to explore',
    },

    about: {
      eyebrow: 'Our Tradition',
      title: 'A sacred centre of spiritual research and guidance',
      lead: 'Sri Nandeeswarar Astrology Centre is a place where ancient Vedic knowledge and Siddha wisdom meet careful, personal study of each life.',
      paragraphs: [
        'Rooted in traditional methods passed down through generations, we read each chart with patience and devotion — never rushing, never generic. Every consultation is a quiet conversation about your past, present and the path ahead.',
        'Our work blends Vedic astrology, Siddha spiritual science and dedicated spiritual research. We offer personalized guidance and sacred remedies that honour both your beliefs and your wellbeing.',
      ],
      pillars: [
        { iconKey: 'scroll', title: 'Traditional Methods', text: 'Time-honoured techniques applied with discipline and care.' },
        { iconKey: 'book', title: 'Ancient Vedic Knowledge', text: 'Readings grounded in classical astrological texts.' },
        { iconKey: 'lotus', title: 'Siddha Wisdom', text: 'Healing rooted in the Siddha spiritual tradition.' },
        { iconKey: 'compass', title: 'Spiritual Research', text: 'Each chart studied as a unique spiritual map.' },
        { iconKey: 'handHeart', title: 'Personalized Guidance', text: 'Counsel shaped entirely around your life.' },
        { iconKey: 'flame', title: 'Sacred Remedies', text: 'Gentle, devotional remedies for lasting balance.' },
      ],
    },

    services: {
      eyebrow: 'What We Offer',
      title: 'Astrology & spiritual services',
      subtitle:
        'Guidance for every important crossroad — relationships, career, health, family and the deeper questions of the soul.',
      items: [
        { iconKey: 'star', title: 'Vakkiam Astrology', text: 'Traditional Vakkiya panchang calculations for precise timing.' },
        { iconKey: 'calculator', title: 'Enkanitham', text: 'Numerical horoscopy for detailed chart computation.' },
        { iconKey: 'sparkles', title: 'Future Prediction', text: 'Clear insight into the road that lies ahead.' },
        { iconKey: 'heart', title: 'Marriage Matching', text: 'Careful porutham analysis for lasting unions.' },
        { iconKey: 'gem', title: 'Gemstone Consultation', text: 'The right stone for your planets and purpose.' },
        { iconKey: 'sun', title: 'Vedic Astrology', text: 'Classical jyotish reading of your birth chart.' },
        { iconKey: 'hash', title: 'Numerology', text: 'The hidden harmony of names and numbers.' },
        { iconKey: 'hand', title: 'Palm Reading', text: 'Reading the lines that map your life.' },
        { iconKey: 'lotus', title: 'Spiritual Guidance', text: 'Counsel for inner peace and clarity.' },
        { iconKey: 'users', title: 'Family Problem Solutions', text: 'Restoring harmony within the home.' },
        { iconKey: 'trendingUp', title: 'Business Growth', text: 'Auspicious timing and direction for enterprise.' },
        { iconKey: 'briefcase', title: 'Career Guidance', text: 'Aligning work with your true strengths.' },
        { iconKey: 'activity', title: 'Health Astrology', text: 'Planetary insight into wellbeing.' },
        { iconKey: 'baby', title: 'Child Birth Consultation', text: 'Guidance and remedies for progeny.' },
        { iconKey: 'graduation', title: 'Education Guidance', text: 'Support for learning and examinations.' },
        { iconKey: 'plane', title: 'Foreign Travel Guidance', text: 'Reading prospects for travel abroad.' },
      ],
    },

    healing: {
      eyebrow: 'Healing & Siddha',
      title: 'Healing & Siddha Spiritual Remedies',
      subtitle:
        'Gentle, sacred practices to cleanse energy, restore balance and invite divine blessing into daily life.',
      items: [
        { iconKey: 'lotus', title: 'Siddha Healing', text: 'Traditional Siddha methods for body and spirit.' },
        { iconKey: 'sparkles', title: 'Spiritual Energy Balancing', text: 'Realigning the energies that shape your days.' },
        { iconKey: 'wind', title: 'Aura Cleansing', text: 'Clearing the unseen field around you.' },
        { iconKey: 'moon', title: 'Meditation Guidance', text: 'Practices that quiet and centre the mind.' },
        { iconKey: 'leaf', title: 'Traditional Siddha Methods', text: 'Time-tested remedies from the Siddha lineage.' },
        { iconKey: 'flame', title: 'Sacred Healing Rituals', text: 'Devotional rituals for protection and peace.' },
        { iconKey: 'sun', title: 'Divine Blessings', text: 'Invoking grace for every new beginning.' },
      ],
    },

    gemstone: {
      eyebrow: 'Gemstone Guidance',
      title: 'Sacred gemstones & their planets',
      subtitle:
        'Worn with the right guidance, gemstones strengthen favourable planets and steady the energies of your chart.',
      planetLabel: 'Planet',
      benefitLabel: 'Brings',
      items: [
        { name: 'Ruby', planet: 'Sun', color: '#9B2226', benefit: 'Confidence, vitality & leadership' },
        { name: 'Emerald', planet: 'Mercury', color: '#0B6E4F', benefit: 'Intellect, speech & clarity' },
        { name: 'Yellow Sapphire', planet: 'Jupiter', color: '#D8B04C', benefit: 'Wisdom, fortune & prosperity' },
        { name: 'Blue Sapphire', planet: 'Saturn', color: '#1D3A8A', benefit: 'Discipline, focus & protection' },
        { name: 'Pearl', planet: 'Moon', color: '#E7E3D8', benefit: 'Calm, emotion & inner peace' },
        { name: 'Coral', planet: 'Mars', color: '#C84B31', benefit: 'Courage, energy & drive' },
        { name: 'Diamond', planet: 'Venus', color: '#BFD7DD', benefit: 'Love, harmony & luxury' },
        { name: "Cat's Eye", planet: 'Ketu', color: '#7A6A3A', benefit: 'Protection & sudden fortune' },
      ],
    },

    why: {
      eyebrow: 'Why Choose Us',
      title: 'A practice built on trust',
      subtitle:
        'People return to us, and send their families, because the guidance is honest, private and rooted in genuine tradition.',
      items: [
        { iconKey: 'book', title: 'Traditional Knowledge', text: 'Authentic methods, not generic predictions.' },
        { iconKey: 'handHeart', title: 'Personal Guidance', text: 'Time and attention for every consultation.' },
        { iconKey: 'lotus', title: 'Ancient Siddha Wisdom', text: 'A living lineage of spiritual practice.' },
        { iconKey: 'shield', title: 'Confidential Consultation', text: 'Your concerns stay completely private.' },
        { iconKey: 'sparkles', title: 'Spiritual Solutions', text: 'Remedies that bring real, lasting relief.' },
        { iconKey: 'check', title: 'Trusted Methods', text: 'Proven, time-honoured techniques.' },
        { iconKey: 'sun', title: 'Divine Blessings', text: 'Every reading offered with devotion.' },
      ],
      stats: [
        { value: 25, suffix: '+', label: 'Years of tradition' },
        { value: 10000, suffix: '+', label: 'Lives guided' },
        { value: 16, suffix: '', label: 'Sacred services' },
        { value: 100, suffix: '%', label: 'Confidential' },
      ],
    },

    testimonials: {
      eyebrow: 'Blessings Received',
      title: 'Words from those we have guided',
      items: [
        { quote: 'The marriage matching was done with such care. Two years later our home is full of peace. We are deeply grateful.', name: 'Lakshmi & Karthik', place: 'Pondicherry' },
        { quote: 'I came worried about my career. The guidance was clear and the gemstone advice changed the direction of my work.', name: 'Suresh Kumar', place: 'Cuddalore' },
        { quote: 'Siddha healing brought calm to our family during a very hard time. The remedies were gentle and truly worked.', name: 'Meena R.', place: 'Villupuram' },
        { quote: 'Honest, patient and never rushed. For the first time an astrologer truly listened before speaking. Highly trusted.', name: 'Anand V.', place: 'Chennai' },
      ],
    },

    faq: {
      eyebrow: 'Common Questions',
      title: 'Answers to what people ask',
      subtitle: 'A few of the questions we hear most often before a first consultation.',
      items: [
        { q: 'Can you help with marriage matching?', a: 'Yes. We perform detailed porutham and horoscope matching to assess long-term compatibility, timing and any remedies that support a harmonious union.' },
        { q: 'I am uncertain about my career — can astrology help?', a: 'Career guidance is one of our most requested services. We study your chart to identify natural strengths, favourable periods and the direction best aligned with your potential.' },
        { q: 'Do you offer guidance on health concerns?', a: 'We provide health astrology that reads planetary influences on wellbeing, alongside Siddha and spiritual remedies. This complements — and never replaces — professional medical care.' },
        { q: 'Can you help resolve family problems?', a: 'Yes. Many families come to us for harmony in the home. We offer counsel and sacred remedies to ease tension and restore understanding between members.' },
        { q: 'How can astrology support my business?', a: 'Business growth consultation covers auspicious timing for launches, decisions and expansion, along with guidance to align your enterprise with favourable planetary periods.' },
        { q: 'How do I know which gemstone is right for me?', a: 'Gemstones are never recommended generically. We study your birth chart first, then suggest the stone, weight and metal that strengthen the right planets for you.' },
        { q: 'What can numerology tell me?', a: 'Numerology reveals the harmony between your name, date of birth and life path, and can guide favourable name corrections and important decisions.' },
        { q: 'What is Siddha healing?', a: 'Siddha healing is a traditional spiritual practice for cleansing energy, restoring balance and inviting blessing. Sessions are gentle, devotional and tailored to you.' },
      ],
    },

    contact: {
      eyebrow: 'Reach Us',
      title: 'Book your consultation',
      subtitle:
        'Share a few details and we will reach out to arrange your sitting. For anything urgent, call or message us directly.',
      info: {
        callTitle: 'Call us',
        emailTitle: 'Email us',
        visitTitle: 'Visit us',
        hoursTitle: 'Timings',
        hours: 'Mon – Sun • 9:00 AM – 8:00 PM',
      },
      form: {
        name: 'Full name',
        namePh: 'Your name',
        phone: 'Phone number',
        phonePh: '+91 ',
        dob: 'Date of birth',
        time: 'Birth time',
        place: 'Birth place',
        placePh: 'Town / city',
        service: 'Service required',
        servicePh: 'Select a service',
        message: 'Your message',
        messagePh: 'Tell us briefly what guidance you are seeking…',
        submit: 'Send on WhatsApp',
        sending: 'Opening WhatsApp…',
        required: 'This field is required',
        invalidPhone: 'Please enter a valid phone number',
      },
    },

    siddha: {
      eyebrow: 'The Siddha Path',
      quote:
        'When the mind grows still and the spirit aligns, the body remembers how to heal.',
      attribution: 'In the living Siddha tradition',
      tenets: [
        { title: 'Energy', text: 'Balancing the unseen forces that move through us.' },
        { title: 'Devotion', text: 'Every remedy begins with sincere intention.' },
        { title: 'Nature', text: 'Healing drawn from herb, mantra and sacred ritual.' },
      ],
    },

    cta: {
      eyebrow: 'Begin Your Journey',
      title: 'Let the right guidance light your path',
      subtitle:
        'Whatever question weighs on your heart — relationships, career, health or peace of mind — a single conversation can bring clarity.',
      primary: 'Book a Consultation',
      whatsapp: 'Message on WhatsApp',
    },

    footer: {
      tagline: 'Ancient Wisdom • Spiritual Guidance • Divine Healing',
      about:
        'A sacred centre of Vedic astrology and Siddha spiritual healing in Pondicherry, offering personal, confidential guidance rooted in living tradition.',
      quickLinks: 'Quick Links',
      services: 'Services',
      reach: 'Reach Us',
      rights: 'All rights reserved.',
      built: 'Crafted with devotion.',
    },
  },

  // =========================================================================
  // TAMIL
  // =========================================================================
  ta: {
    langLabel: 'தமிழ்',
    dir: 'ltr',

    nav: {
      links: [
        { id: 'home', label: 'முகப்பு' },
        { id: 'about', label: 'எங்களைப் பற்றி' },
        { id: 'services', label: 'சேவைகள்' },
        { id: 'healing', label: 'சித்த சிகிச்சை' },
        { id: 'gemstone', label: 'ரத்தினங்கள்' },
        { id: 'why', label: 'ஏன் நாங்கள்' },
        { id: 'faq', label: 'கேள்விகள்' },
        { id: 'contact', label: 'தொடர்பு' },
      ],
      book: 'ஆலோசனை பதிவு',
    },

    common: {
      book: 'ஆலோசனை பதிவு',
      bookAppointment: 'நேரம் பதிவு செய்க',
      whatsapp: 'வாட்ஸ்அப்',
      call: 'அழைக்கவும்',
      scroll: 'கீழே',
      readMore: 'மேலும் அறிக',
    },

    hero: {
      eyebrow: 'புதுச்சேரி • பாரம்பரியத்தில் நிலைபெற்றது',
      titleTa: 'நந்தீஸ்வர் ஆன்மீக ஜோதிட ஆராய்ச்சி மையம்',
      titleEn: 'Sri Nandeeswarar Astrology Centre',
      subtitle: 'பண்டைய ஞானம் • ஆன்மீக வழிகாட்டல் • தெய்வீக சிகிச்சை',
      description:
        'வேத ஜோதிடம், சித்த சிகிச்சை, எண் கணிதம், ரத்தின வழிகாட்டல் மற்றும் ஆன்மீக தீர்வுகள் — உங்கள் வாழ்க்கைக்கு தெளிவையும் அமைதியையும் வழங்கும் பாரம்பரிய வழிகாட்டல்.',
      ctaPrimary: 'ஆலோசனை பதிவு',
      ctaWhatsapp: 'வாட்ஸ்அப்',
      ctaCall: 'அழைக்கவும்',
      scroll: 'கீழே செல்லவும்',
    },

    about: {
      eyebrow: 'எங்கள் பாரம்பரியம்',
      title: 'ஆன்மீக ஆராய்ச்சி மற்றும் வழிகாட்டலின் புனித மையம்',
      lead: 'நந்தீஸ்வர் ஆன்மீக ஜோதிட ஆராய்ச்சி மையம் — பண்டைய வேத அறிவும் சித்த ஞானமும் ஒவ்வொரு வாழ்க்கையின் கவனமான ஆய்வுடன் இணையும் இடம்.',
      paragraphs: [
        'தலைமுறை தலைமுறையாக கடத்தப்பட்ட பாரம்பரிய முறைகளில் வேரூன்றி, ஒவ்வொரு ஜாதகத்தையும் பொறுமையுடனும் பக்தியுடனும் ஆராய்கிறோம் — அவசரமின்றி, பொதுவான பதில்களின்றி. ஒவ்வொரு ஆலோசனையும் உங்கள் கடந்த, நிகழ், எதிர்காலம் பற்றிய அமைதியான உரையாடல்.',
        'எங்கள் பணி வேத ஜோதிடம், சித்த ஆன்மீக அறிவியல் மற்றும் அர்ப்பணிப்புள்ள ஆன்மீக ஆராய்ச்சியை இணைக்கிறது. உங்கள் நம்பிக்கைகளையும் நலனையும் மதிக்கும் தனிப்பட்ட வழிகாட்டலையும் புனித பரிகாரங்களையும் வழங்குகிறோம்.',
      ],
      pillars: [
        { iconKey: 'scroll', title: 'பாரம்பரிய முறைகள்', text: 'ஒழுக்கத்துடனும் கவனத்துடனும் பயன்படுத்தப்படும் காலம் காத்த முறைகள்.' },
        { iconKey: 'book', title: 'பண்டைய வேத அறிவு', text: 'பாரம்பரிய ஜோதிட நூல்களில் வேரூன்றிய ஆய்வுகள்.' },
        { iconKey: 'lotus', title: 'சித்த ஞானம்', text: 'சித்த ஆன்மீக பாரம்பரியத்தில் வேரூன்றிய சிகிச்சை.' },
        { iconKey: 'compass', title: 'ஆன்மீக ஆராய்ச்சி', text: 'ஒவ்வொரு ஜாதகமும் தனித்துவ ஆன்மீக வரைபடமாக ஆராயப்படுகிறது.' },
        { iconKey: 'handHeart', title: 'தனிப்பட்ட வழிகாட்டல்', text: 'உங்கள் வாழ்க்கையை மையமாகக் கொண்ட ஆலோசனை.' },
        { iconKey: 'flame', title: 'புனித பரிகாரங்கள்', text: 'நிலையான சமநிலைக்கான மென்மையான பக்தி பரிகாரங்கள்.' },
      ],
    },

    services: {
      eyebrow: 'நாங்கள் வழங்குபவை',
      title: 'ஜோதிடம் & ஆன்மீக சேவைகள்',
      subtitle:
        'ஒவ்வொரு முக்கிய திருப்பத்திற்கும் வழிகாட்டல் — உறவுகள், தொழில், ஆரோக்கியம், குடும்பம் மற்றும் ஆன்மாவின் ஆழ்ந்த கேள்விகள்.',
      items: [
        { iconKey: 'star', title: 'வாக்கிய ஜோதிடம்', text: 'துல்லியமான நேரத்திற்கான பாரம்பரிய வாக்கிய பஞ்சாங்க கணிப்பு.' },
        { iconKey: 'calculator', title: 'எண் கணிதம்', text: 'விரிவான ஜாதக கணிப்புக்கான எண் ஜோதிடம்.' },
        { iconKey: 'sparkles', title: 'எதிர்கால கணிப்பு', text: 'வரவிருக்கும் பாதையில் தெளிவான பார்வை.' },
        { iconKey: 'heart', title: 'திருமண பொருத்தம்', text: 'நிலையான இணைப்புக்கான கவனமான பொருத்த ஆய்வு.' },
        { iconKey: 'gem', title: 'ரத்தின ஆலோசனை', text: 'உங்கள் கிரகங்களுக்கும் நோக்கத்திற்கும் ஏற்ற கல்.' },
        { iconKey: 'sun', title: 'வேத ஜோதிடம்', text: 'உங்கள் ஜாதகத்தின் பாரம்பரிய வேத ஆய்வு.' },
        { iconKey: 'hash', title: 'எண் சோதிடம்', text: 'பெயர்களின், எண்களின் மறைந்த இசைவு.' },
        { iconKey: 'hand', title: 'கைரேகை சோதிடம்', text: 'உங்கள் வாழ்க்கையை வரையும் கோடுகளின் வாசிப்பு.' },
        { iconKey: 'lotus', title: 'ஆன்மீக வழிகாட்டல்', text: 'உள்ளமைதிக்கும் தெளிவுக்கும் ஆலோசனை.' },
        { iconKey: 'users', title: 'குடும்ப பிரச்சனை தீர்வு', text: 'வீட்டில் நல்லிணக்கத்தை மீட்டெடுத்தல்.' },
        { iconKey: 'trendingUp', title: 'வணிக வளர்ச்சி', text: 'தொழிலுக்கான சுப நேரமும் திசையும்.' },
        { iconKey: 'briefcase', title: 'தொழில் வழிகாட்டல்', text: 'உங்கள் உண்மையான பலத்துடன் வேலையை இணைத்தல்.' },
        { iconKey: 'activity', title: 'ஆரோக்கிய ஜோதிடம்', text: 'நலனுக்கான கிரக பார்வை.' },
        { iconKey: 'baby', title: 'குழந்தை பாக்கிய ஆலோசனை', text: 'சந்ததிக்கான வழிகாட்டலும் பரிகாரமும்.' },
        { iconKey: 'graduation', title: 'கல்வி வழிகாட்டல்', text: 'கல்விக்கும் தேர்வுகளுக்கும் ஆதரவு.' },
        { iconKey: 'plane', title: 'வெளிநாட்டு பயண வழிகாட்டல்', text: 'வெளிநாடு செல்லும் வாய்ப்புகளின் ஆய்வு.' },
      ],
    },

    healing: {
      eyebrow: 'சிகிச்சை & சித்தம்',
      title: 'சித்த ஆன்மீக சிகிச்சை & பரிகாரங்கள்',
      subtitle:
        'ஆற்றலைச் சுத்தப்படுத்தி, சமநிலையை மீட்டெடுத்து, அன்றாட வாழ்வில் தெய்வீக அருளை அழைக்கும் மென்மையான புனித முறைகள்.',
      items: [
        { iconKey: 'lotus', title: 'சித்த சிகிச்சை', text: 'உடலுக்கும் ஆன்மாவுக்கும் பாரம்பரிய சித்த முறைகள்.' },
        { iconKey: 'sparkles', title: 'ஆன்மீக ஆற்றல் சமநிலை', text: 'உங்கள் நாட்களை வடிவமைக்கும் ஆற்றல்களை சீரமைத்தல்.' },
        { iconKey: 'wind', title: 'ஆரா சுத்திகரிப்பு', text: 'உங்களைச் சுற்றியுள்ள கண்ணுக்குத் தெரியாத ஆற்றலை சுத்தப்படுத்தல்.' },
        { iconKey: 'moon', title: 'தியான வழிகாட்டல்', text: 'மனதை அமைதிப்படுத்தி மையப்படுத்தும் பயிற்சிகள்.' },
        { iconKey: 'leaf', title: 'பாரம்பரிய சித்த முறைகள்', text: 'சித்த பரம்பரையின் காலம் தேர்ந்த பரிகாரங்கள்.' },
        { iconKey: 'flame', title: 'புனித சிகிச்சை சடங்குகள்', text: 'பாதுகாப்புக்கும் அமைதிக்கும் பக்தி சடங்குகள்.' },
        { iconKey: 'sun', title: 'தெய்வீக ஆசிகள்', text: 'ஒவ்வொரு புதிய தொடக்கத்திற்கும் அருளை வேண்டுதல்.' },
      ],
    },

    gemstone: {
      eyebrow: 'ரத்தின வழிகாட்டல்',
      title: 'புனித ரத்தினங்களும் அவற்றின் கிரகங்களும்',
      subtitle:
        'சரியான வழிகாட்டலுடன் அணியும்போது, ரத்தினங்கள் சாதகமான கிரகங்களை வலுப்படுத்தி உங்கள் ஜாதகத்தின் ஆற்றலை சீர்படுத்துகின்றன.',
      planetLabel: 'கிரகம்',
      benetLabel: 'பலன்',
      benefitLabel: 'அளிப்பது',
      items: [
        { name: 'மாணிக்கம்', planet: 'சூரியன்', color: '#9B2226', benefit: 'தன்னம்பிக்கை, சக்தி & தலைமை' },
        { name: 'மரகதம்', planet: 'புதன்', color: '#0B6E4F', benefit: 'அறிவு, பேச்சு & தெளிவு' },
        { name: 'புஷ்பராகம்', planet: 'குரு', color: '#D8B04C', benefit: 'ஞானம், அதிர்ஷ்டம் & செழிப்பு' },
        { name: 'நீலம்', planet: 'சனி', color: '#1D3A8A', benefit: 'ஒழுக்கம், கவனம் & பாதுகாப்பு' },
        { name: 'முத்து', planet: 'சந்திரன்', color: '#E7E3D8', benefit: 'அமைதி, உணர்வு & உள்ளமைதி' },
        { name: 'பவளம்', planet: 'செவ்வாய்', color: '#C84B31', benefit: 'தைரியம், ஆற்றல் & உந்துதல்' },
        { name: 'வைரம்', planet: 'சுக்கிரன்', color: '#BFD7DD', benefit: 'அன்பு, நல்லிணக்கம் & செழுமை' },
        { name: 'வைடூரியம்', planet: 'கேது', color: '#7A6A3A', benefit: 'பாதுகாப்பு & திடீர் அதிர்ஷ்டம்' },
      ],
    },

    why: {
      eyebrow: 'ஏன் நாங்கள்',
      title: 'நம்பிக்கையில் கட்டப்பட்ட பணி',
      subtitle:
        'வழிகாட்டல் நேர்மையாகவும், ரகசியமாகவும், உண்மையான பாரம்பரியத்தில் வேரூன்றியும் இருப்பதால் மக்கள் மீண்டும் வருகிறார்கள், தங்கள் குடும்பத்தினரையும் அனுப்புகிறார்கள்.',
      items: [
        { iconKey: 'book', title: 'பாரம்பரிய அறிவு', text: 'பொதுவான கணிப்பல்ல — உண்மையான முறைகள்.' },
        { iconKey: 'handHeart', title: 'தனிப்பட்ட வழிகாட்டல்', text: 'ஒவ்வொரு ஆலோசனைக்கும் நேரமும் கவனமும்.' },
        { iconKey: 'lotus', title: 'பண்டைய சித்த ஞானம்', text: 'வாழும் ஆன்மீக பாரம்பரியம்.' },
        { iconKey: 'shield', title: 'ரகசிய ஆலோசனை', text: 'உங்கள் கவலைகள் முற்றிலும் ரகசியமாக இருக்கும்.' },
        { iconKey: 'sparkles', title: 'ஆன்மீக தீர்வுகள்', text: 'உண்மையான, நிலையான நிவாரணம் தரும் பரிகாரங்கள்.' },
        { iconKey: 'check', title: 'நம்பகமான முறைகள்', text: 'நிரூபிக்கப்பட்ட, காலம் காத்த நுட்பங்கள்.' },
        { iconKey: 'sun', title: 'தெய்வீக ஆசிகள்', text: 'ஒவ்வொரு ஆய்வும் பக்தியுடன் வழங்கப்படுகிறது.' },
      ],
      stats: [
        { value: 25, suffix: '+', label: 'ஆண்டுகள் பாரம்பரியம்' },
        { value: 10000, suffix: '+', label: 'வழிகாட்டப்பட்ட வாழ்க்கைகள்' },
        { value: 16, suffix: '', label: 'புனித சேவைகள்' },
        { value: 100, suffix: '%', label: 'ரகசியம்' },
      ],
    },

    testimonials: {
      eyebrow: 'பெற்ற ஆசிகள்',
      title: 'நாங்கள் வழிகாட்டியவர்களின் வார்த்தைகள்',
      items: [
        { quote: 'திருமண பொருத்தம் மிகுந்த கவனத்துடன் செய்யப்பட்டது. இரண்டு ஆண்டுகளுக்குப் பின் எங்கள் வீடு அமைதியால் நிறைந்துள்ளது. மிக்க நன்றி.', name: 'லட்சுமி & கார்த்திக்', place: 'புதுச்சேரி' },
        { quote: 'தொழில் குறித்த கவலையுடன் வந்தேன். வழிகாட்டல் தெளிவாக இருந்தது, ரத்தின ஆலோசனை என் வேலையின் திசையை மாற்றியது.', name: 'சுரேஷ் குமார்', place: 'கடலூர்' },
        { quote: 'மிகக் கடினமான நேரத்தில் சித்த சிகிச்சை எங்கள் குடும்பத்திற்கு அமைதியைக் கொண்டு வந்தது. பரிகாரங்கள் மென்மையாகவும் உண்மையாகவும் பலன் தந்தன.', name: 'மீனா ஆர்.', place: 'விழுப்புரம்' },
        { quote: 'நேர்மையாகவும் பொறுமையாகவும், அவசரமின்றி. முதல் முறையாக ஒரு ஜோதிடர் பேசும் முன் உண்மையாகக் கேட்டார். மிகவும் நம்பகமானது.', name: 'ஆனந்த் வி.', place: 'சென்னை' },
      ],
    },

    faq: {
      eyebrow: 'பொதுவான கேள்விகள்',
      title: 'மக்கள் கேட்பவற்றுக்கான பதில்கள்',
      subtitle: 'முதல் ஆலோசனைக்கு முன் நாங்கள் அடிக்கடி கேட்கும் சில கேள்விகள்.',
      items: [
        { q: 'திருமண பொருத்தத்தில் உதவ முடியுமா?', a: 'ஆம். நீண்டகால இணக்கம், நேரம் மற்றும் நல்லிணக்க இணைப்புக்கு ஆதரவளிக்கும் பரிகாரங்களை மதிப்பிட விரிவான பொருத்தமும் ஜாதக ஒப்பீடும் செய்கிறோம்.' },
        { q: 'என் தொழில் குறித்து குழப்பம் — ஜோதிடம் உதவுமா?', a: 'தொழில் வழிகாட்டல் எங்களின் அதிகம் கேட்கப்படும் சேவைகளில் ஒன்று. இயல்பான பலங்களையும், சாதகமான காலங்களையும், உங்கள் திறனுக்கு ஏற்ற திசையையும் கண்டறிய உங்கள் ஜாதகத்தை ஆராய்கிறோம்.' },
        { q: 'ஆரோக்கிய கவலைகளுக்கு வழிகாட்டல் உண்டா?', a: 'நலனில் கிரகங்களின் தாக்கத்தை வாசிக்கும் ஆரோக்கிய ஜோதிடத்துடன் சித்த மற்றும் ஆன்மீக பரிகாரங்களையும் வழங்குகிறோம். இது மருத்துவ சிகிச்சைக்கு துணையே தவிர மாற்றல்ல.' },
        { q: 'குடும்ப பிரச்சனைகளை தீர்க்க உதவ முடியுமா?', a: 'ஆம். பல குடும்பங்கள் வீட்டில் நல்லிணக்கத்திற்காக வருகின்றன. உறுப்பினர்களிடையே புரிதலை மீட்டெடுக்க ஆலோசனையும் புனித பரிகாரங்களும் வழங்குகிறோம்.' },
        { q: 'என் வணிகத்திற்கு ஜோதிடம் எப்படி உதவும்?', a: 'வணிக வளர்ச்சி ஆலோசனையில் தொடக்கம், முடிவுகள், விரிவாக்கத்திற்கான சுப நேரமும், சாதகமான கிரக காலங்களுடன் உங்கள் தொழிலை இணைக்கும் வழிகாட்டலும் அடங்கும்.' },
        { q: 'எனக்கு எந்த ரத்தினம் சரி என்று எப்படி அறிவது?', a: 'ரத்தினங்கள் பொதுவாக பரிந்துரைக்கப்படுவதில்லை. முதலில் உங்கள் ஜாதகத்தை ஆராய்ந்து, சரியான கிரகங்களை வலுப்படுத்தும் கல், எடை மற்றும் உலோகத்தை பரிந்துரைக்கிறோம்.' },
        { q: 'எண் சோதிடம் எனக்கு என்ன சொல்லும்?', a: 'உங்கள் பெயர், பிறந்த தேதி, வாழ்க்கைப் பாதை ஆகியவற்றின் இசைவை எண் சோதிடம் வெளிப்படுத்துகிறது; சாதகமான பெயர் திருத்தங்களுக்கும் முக்கிய முடிவுகளுக்கும் வழிகாட்டும்.' },
        { q: 'சித்த சிகிச்சை என்றால் என்ன?', a: 'சித்த சிகிச்சை என்பது ஆற்றலைச் சுத்தப்படுத்தி, சமநிலையை மீட்டெடுத்து, அருளை அழைக்கும் பாரம்பரிய ஆன்மீக முறை. அமர்வுகள் மென்மையாகவும், பக்தியுடனும், உங்களுக்கேற்பவும் இருக்கும்.' },
      ],
    },

    contact: {
      eyebrow: 'எங்களை அணுகவும்',
      title: 'உங்கள் ஆலோசனையை பதிவு செய்யவும்',
      subtitle:
        'சில விவரங்களைப் பகிர்ந்தால், உங்கள் சந்திப்பை ஏற்பாடு செய்ய நாங்கள் தொடர்பு கொள்வோம். அவசரத்திற்கு நேரடியாக அழைக்கவும் அல்லது செய்தி அனுப்பவும்.',
      info: {
        callTitle: 'அழைக்கவும்',
        emailTitle: 'மின்னஞ்சல்',
        visitTitle: 'வருகை தரவும்',
        hoursTitle: 'நேரம்',
        hours: 'திங்கள் – ஞாயிறு • காலை 9:00 – இரவு 8:00',
      },
      form: {
        name: 'முழுப் பெயர்',
        namePh: 'உங்கள் பெயர்',
        phone: 'தொலைபேசி எண்',
        phonePh: '+91 ',
        dob: 'பிறந்த தேதி',
        time: 'பிறந்த நேரம்',
        place: 'பிறந்த இடம்',
        placePh: 'ஊர் / நகரம்',
        service: 'தேவையான சேவை',
        servicePh: 'ஒரு சேவையைத் தேர்வு செய்க',
        message: 'உங்கள் செய்தி',
        messagePh: 'என்ன வழிகாட்டல் தேவை என்பதை சுருக்கமாகக் கூறவும்…',
        submit: 'வாட்ஸ்அப்பில் அனுப்பு',
        sending: 'வாட்ஸ்அப் திறக்கிறது…',
        required: 'இந்த புலம் அவசியம்',
        invalidPhone: 'சரியான தொலைபேசி எண்ணை உள்ளிடவும்',
      },
    },

    siddha: {
      eyebrow: 'சித்த வழி',
      quote:
        'மனம் அமைதியடைந்து ஆன்மா சீரமைந்தால், உடல் தானே குணமடையும் வழியை நினைவுகூரும்.',
      attribution: 'வாழும் சித்த பாரம்பரியத்தில்',
      tenets: [
        { title: 'ஆற்றல்', text: 'நம்மினூடே இயங்கும் கண்ணுக்குத் தெரியாத சக்திகளை சமன் செய்தல்.' },
        { title: 'பக்தி', text: 'ஒவ்வொரு பரிகாரமும் உண்மையான எண்ணத்துடன் தொடங்குகிறது.' },
        { title: 'இயற்கை', text: 'மூலிகை, மந்திரம், புனித சடங்கிலிருந்து பெறப்படும் சிகிச்சை.' },
      ],
    },

    cta: {
      eyebrow: 'பயணத்தைத் தொடங்குங்கள்',
      title: 'சரியான வழிகாட்டல் உங்கள் பாதையை ஒளிரச் செய்யட்டும்',
      subtitle:
        'உங்கள் இதயத்தை வருத்தும் எந்தக் கேள்வியாக இருந்தாலும் — உறவுகள், தொழில், ஆரோக்கியம் அல்லது மன அமைதி — ஒரு உரையாடல் தெளிவைக் கொண்டு வரும்.',
      primary: 'ஆலோசனை பதிவு செய்க',
      whatsapp: 'வாட்ஸ்அப்பில் தொடர்பு',
    },

    footer: {
      tagline: 'பண்டைய ஞானம் • ஆன்மீக வழிகாட்டல் • தெய்வீக சிகிச்சை',
      about:
        'புதுச்சேரியில் வேத ஜோதிடம் மற்றும் சித்த ஆன்மீக சிகிச்சையின் புனித மையம் — வாழும் பாரம்பரியத்தில் வேரூன்றிய தனிப்பட்ட, ரகசிய வழிகாட்டலை வழங்குகிறது.',
      quickLinks: 'விரைவு இணைப்புகள்',
      services: 'சேவைகள்',
      reach: 'எங்களை அணுகவும்',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      built: 'பக்தியுடன் உருவாக்கப்பட்டது.',
    },
  },
}

export default content
