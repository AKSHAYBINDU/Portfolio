/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Anton', 'sans-serif'],
        bodoni: ['"Libre Bodoni"', 'serif'],
        orbitron: [ "Orbitron", 'serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

