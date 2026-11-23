/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF8F5',
          100: '#F5F1E8',
          200: '#E8E0D1',
          300: '#D5C7B0',
          400: '#C2AD8D',
          500: '#AD926B', // Antique brass / champagne gold
          600: '#947852',
          700: '#755E3F',
          800: '#54442F',
          900: '#342B20',
        },
        luxury: {
          dark: '#141416',
          charcoal: '#1E2024',
          slate: '#2C2F36',
          border: '#E8E5DF',
          borderDark: '#2E323A',
          cream: '#FBF9F5',
          gold: '#C5A880',
          bronze: '#9B7E58',
          stone: '#EAE6DF',
          muted: '#71757E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 20, 22, 0.05), 0 0 1px 1px rgba(20, 20, 22, 0.03)',
        'luxury-hover': '0 25px 50px -12px rgba(20, 20, 22, 0.12), 0 0 1px 1px rgba(197, 168, 128, 0.2)',
        'luxury-modal': '0 30px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'subtle-marble': 'radial-gradient(circle at 50% 0%, rgba(197, 168, 128, 0.04) 0%, transparent 60%)',
        'gold-gradient': 'linear-gradient(135deg, #DFCEB5 0%, #C5A880 50%, #A5865E 100%)',
      }
    },
  },
  plugins: [],
}
