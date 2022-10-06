/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7dd3fc',
        card: '#1e293b',
        background: '#0f172a',
        cardborder: '#e5e7eb',
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}