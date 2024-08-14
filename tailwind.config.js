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
        black: '#040D12',
        white: '#F4F2EE',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Anton', 'sans-serif'],
        bodoni: ['"Libre Bodoni"', 'serif'],
        orbitron: [ "Orbitron", 'serif'],
        alfaslab: [ "Alfa Slab One", 'serif'],
        righteous: [ "Righteous", 'serif'],
      },
      screens: {
        sm: '640px',
        md: '868px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

