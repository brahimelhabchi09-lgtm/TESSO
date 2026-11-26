/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        akwa: {
          navy: '#092C49',
          'navy-dark': '#061D31',
          'navy-light': '#123D64',
          midnight: '#101820',
          aqua: '#08A6C1',
          'aqua-hover': '#0792AA',
          'aqua-light': '#E9F4F5',
          'aqua-soft': '#D3ECF0',
          pearl: '#F7FAFC',
          violet: '#8B5CF6',
          chrome: '#CBD5E1',
          white: '#FFFFFF',
          warm: '#F5F4F0',
          'warm-border': '#E2DFD7',
          dark: '#202B35',
          muted: '#627180',
        },
        brand: {
          50: '#E9F4F5',
          100: '#D3ECF0',
          200: '#A7DBE2',
          300: '#68C4D3',
          400: '#2EADC2',
          500: '#08A6C1',
          600: '#078CA3',
          700: '#086F83',
          800: '#0E5B6B',
          900: '#092C49',
          950: '#101820',
        },
        luxury: {
          dark: '#092C49',
          charcoal: '#202B35',
          slate: '#364452',
          border: '#E2DFD7',
          borderDark: '#1A3F60',
          cream: '#F7FAFC',
          gold: '#08A6C1',
          bronze: '#06869C',
          stone: '#E8E5DD',
          muted: '#627180',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(9, 44, 73, 0.08), 0 0 1px 1px rgba(9, 44, 73, 0.04)',
        'luxury-hover': '0 25px 50px -12px rgba(8, 166, 193, 0.22), 0 0 1px 1px rgba(8, 166, 193, 0.35)',
        'luxury-modal': '0 30px 60px -15px rgba(9, 44, 73, 0.35)',
        'iridescent': '0 18px 45px -12px rgba(8, 166, 193, 0.2), 0 0 0 1px rgba(167, 219, 226, 0.35)',
        'iridescent-glow': '0 0 30px -5px rgba(8, 166, 193, 0.32), 0 0 18px -6px rgba(139, 92, 246, 0.22)',
      },
      backgroundImage: {
        'subtle-marble': 'radial-gradient(circle at 50% 0%, rgba(8, 166, 193, 0.06) 0%, transparent 60%)',
        'aqua-gradient': 'linear-gradient(135deg, #092C49 0%, #08A6C1 100%)',
        'iridescent-sheen': 'linear-gradient(135deg, rgba(8, 166, 193, 0.14) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(203, 213, 225, 0.18) 100%)',
        'chrome-gradient': 'linear-gradient(135deg, #F7FAFC 0%, #CBD5E1 50%, #E2E8F0 100%)',
        'midnight-iridescent': 'radial-gradient(ellipse at 20% 20%, rgba(8, 166, 193, 0.22) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.14) 0%, transparent 50%), linear-gradient(160deg, #101820 0%, #092C49 60%, #061D31 100%)',
      }
    },
  },
  plugins: [],
}
