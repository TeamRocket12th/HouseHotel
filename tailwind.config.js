/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        home: {
          gray: {
            50: '#0000000A',
            100: '#00000029',
            150: '#6A6A6A',
            200: '#707070'
          },
          green: {
            50: '#949C7C',
            100: '#38470B'
          }
        }
      }
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      tc: ['Noto Sans TC', 'sans-serif']
    }
  },
  plugins: []
}
