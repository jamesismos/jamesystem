import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      colors: {
        brand: {
          corporate: '#0B3D91',
          system: '#0A84FF',
          electric: '#00C2FF',
        },
        surface: {
          DEFAULT: '#050816',
          secondary: '#0A1024',
          border: '#1E293B',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        product: {
          blue: '#0B3D91',
          green: '#059669',
          orange: '#D97706',
          purple: '#7C3AED',
          red: '#DC2626',
          slate: '#475569',
        },
      },
      boxShadow: {
        window: '0 8px 32px rgba(0, 0, 0, 0.5)',
        'window-hover': '0 12px 48px rgba(11, 61, 145, 0.2)',
        'brand-glow': '0 0 20px rgba(10, 132, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
