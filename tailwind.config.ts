import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        james: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#1e1b4b',
          900: '#0f0d2e',
          950: '#080614',
        },
        neon: {
          blue: '#00d4ff',
          purple: '#8b5cf6',
          cyan: '#06f7d5',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        window: '0 8px 32px rgba(0, 0, 0, 0.4)',
        'window-hover': '0 12px 48px rgba(0, 212, 255, 0.15)',
        'neon-glow': '0 0 20px rgba(0, 212, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
