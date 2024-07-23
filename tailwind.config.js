/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Averia Serif Libre', 'serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': '2.5rem', // Example: 40px
        'heading-md': '1.5rem', // Example: 32px
        'heading-sm': '1.2rem',
        'body-lg': '1.125rem', // Example: 18px
        'body-md': '1rem', // Example: 16px
      },
      fontWeight: {
        'heading-regular': 400,
        'heading-bold': 700,
        'body-light': 300,
        'body-regular': 400,
        'body-bold': 700,
      },
      colors: {
        spamYellow: '#facc15',
        spamBlue: '#1e3a8a',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate360: 'rotate360 1s linear infinite',
      },
    },
  },
  plugins: [],
}
