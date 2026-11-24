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
          aqua: '#08A6C1',
          'aqua-hover': '#0792AA',
          'aqua-light': '#E9F4F5',
          'aqua-soft': '#D3ECF0',
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
          500: '#08A6C1', // Aqua Blue
          600: '#078CA3',
          700: '#086F83',
          800: '#0E5B6B',
          900: '#092C49', // Navy Blue
          950: '#051B2E',
        },
        luxury: {
          dark: '#092C49',
          charcoal: '#202B35',
          slate: '#364452',
          border: '#E2DFD7',
          borderDark: '#1A3F60',
          cream: '#F5F4F0',
          gold: '#08A6C1', // Replaced accent with Aqua Blue
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
        'luxury': '0 20px 40px -15px rgba(9, 44, 73, 0.07), 0 0 1px 1px rgba(9, 44, 73, 0.04)',
        'luxury-hover': '0 25px 50px -12px rgba(8, 166, 193, 0.18), 0 0 1px 1px rgba(8, 166, 193, 0.3)',
        'luxury-modal': '0 30px 60px -15px rgba(9, 44, 73, 0.35)',
      },
      backgroundImage: {
        'subtle-marble': 'radial-gradient(circle at 50% 0%, rgba(8, 166, 193, 0.05) 0%, transparent 60%)',
        'aqua-gradient': 'linear-gradient(135deg, #092C49 0%, #08A6C1 100%)',
        'hero-overlay': 'linear-gradient(to right, #092C49 0%, rgba(9, 44, 73, 0.85) 60%, rgba(9, 44, 73, 0.4) 100%)',
      }
    },
  },
  plugins: [],
}
