/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0C0E',
          panel: '#131619',
          elevated: '#1A1E22',
          border: '#262B30',
          hair: '#1F2327',
        },
        ink: {
          DEFAULT: '#F2F3F4',
          muted: '#9AA1A9',
          dim: '#5C636B',
        },
        signal: {
          DEFAULT: '#FF5A1F',
          soft: '#FF7A45',
          dim: 'rgba(255,90,31,0.14)',
        },
        telemetry: {
          DEFAULT: '#22E0C4',
          dim: 'rgba(34,224,196,0.14)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        signal: '0 0 0 1px rgba(255,90,31,0.35), 0 0 32px rgba(255,90,31,0.18)',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
