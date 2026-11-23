/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07080b',
          900: '#0d0f14',
          800: '#151921',
          700: '#212733',
        },
        gold: {
          500: '#c9a227',
          400: '#dfb738',
          600: '#a6821d',
        },
        ivory: {
          100: '#fcfbfa',
          200: '#f5f2ed',
          300: '#e6dfd5',
          400: '#c2b8a8',
        },
        forest: {
          600: '#1f6f4a',
          700: '#165236',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
