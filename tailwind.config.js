/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#141413',
          card: '#1C1B19',
          cream: '#FAF7F2',
          sand: '#F3EDE2',
          beige: '#E8DFC8',
          gold: '#C9A96E',
          'gold-light': '#DFCA9E',
          terracotta: '#C86446',
          orange: '#D96538',
          'orange-dark': '#B84D24',
          'orange-soft': '#F7EBE5',
          forest: '#2A3B2C',
          muted: '#71716A',
          border: '#E8E3DA'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'wide-luxury': '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 20, 19, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(217, 101, 56, 0.15)',
        'drawer': '-10px 0 30px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}

