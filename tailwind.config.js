/** @type {import('tailwindcss').Config} */

const { fontFamily }  = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)',...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 8px,#1b1b1b 100px);'
      }
    },
  },
  plugins: [],
}

