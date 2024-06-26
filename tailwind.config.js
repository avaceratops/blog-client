/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend Deca', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
