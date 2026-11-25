/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080B14',
        bg2: '#101626',
        card: '#111827',
        violet: { DEFAULT: '#8B5CF6', soft: '#A78BFA' },
        cyan: { DEFAULT: '#22D3EE', soft: '#67E8F9' },
        lime: { DEFAULT: '#A3E635' },
        ink: '#F4F5FA',
        muted: '#929BB0',
        line: 'rgba(255,255,255,0.09)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        'dash-flow': { to: { strokeDashoffset: '-24' } },
        'float-y': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'grid-pan': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '64px 64px' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        'typing-dot': {
          '0%,60%,100%': { transform: 'translateY(0)', opacity: '0.4' },
          '30%': { transform: 'translateY(-3px)', opacity: '1' },
        },
        'orb-pulse': {
          '0%,100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
      },
      animation: {
        'dash-flow': 'dash-flow 1.2s linear infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
        'grid-pan': 'grid-pan 14s linear infinite',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
        'typing-dot': 'typing-dot 1.2s ease-in-out infinite',
        'orb-pulse': 'orb-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
