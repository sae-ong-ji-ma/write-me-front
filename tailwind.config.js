import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'real-screen': 'calc(var(--vh) * 100)',
      },
      colors: {
        'main-1': '#0C5CF1',
        'black-1': '#0000001a',
        'black-2': '#00000033',
        'black-3': '#0000004d',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        apple: ['Apple-SDG', 'sans-serif'],
        line: ['LINESeedKR', 'sans-serif'],
      },
      boxShadow: {
        banner: '0rem .25rem 2.125rem #EDE9F5',
        'shadow-2': '.1875rem .25rem 1.25rem 0rem #D2C7E7',
        'shadow-3': '.25rem .25rem 1.1875rem 0rem #68519533',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.absolute-center': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      });
    },
  ],
}