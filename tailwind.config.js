/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette extracted from the Sri Nandeeswarar logo
        temple: {
          green: '#0B5D3B',   // primary
          dark: '#063B28',     // deep shadow green
          night: '#042318',    // near-black green for backgrounds
        },
        sacred: {
          white: '#F8FAF6',
          sage: '#D8EFD3',
          mist: '#EAF3E6',
        },
        gold: {
          DEFAULT: '#D8B04C',
          light: '#E7C879',
          deep: '#B68F30',
        },
      },
      fontFamily: {
        tamil: ['"Noto Serif Tamil"', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        sacred: '0.28em',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(6, 59, 40, 0.18)',
        'gold-glow': '0 0 28px -4px rgba(216, 176, 76, 0.55)',
        'green-glow': '0 0 40px -8px rgba(11, 93, 59, 0.45)',
        soft: '0 18px 50px -20px rgba(4, 35, 24, 0.45)',
      },
      backgroundImage: {
        'palm-leaf':
          "radial-gradient(circle at 20% 20%, rgba(216,176,76,0.06) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(11,93,59,0.10) 0, transparent 45%)",
        'temple-veil':
          'linear-gradient(180deg, rgba(4,35,24,0.0) 0%, rgba(4,35,24,0.65) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        'spin-slow': 'spin-slow 60s linear infinite',
        'spin-reverse': 'spin-reverse 90s linear infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
