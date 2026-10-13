/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C9272E',
          'red-dark': '#A81F25',
          black: '#171717',
          grey: '#F5F5F5',
          line: '#E5E5E5',
        },
      },
      fontFamily: {
        // Helvetica/Arial-style stack – matches the logo lettering and loads instantly.
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,23,23,0.06)',
        lift: '0 8px 24px -8px rgba(23,23,23,0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.2s ease-out both',
      },
    },
  },
  plugins: [],
};
