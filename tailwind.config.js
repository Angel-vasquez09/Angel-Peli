const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* primary  : '#181829',
        secondary: '#246bfd',
        terceary : '#222232', */
      }
    },
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
