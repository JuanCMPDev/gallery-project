/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '0-0-auto': '0 0 auto',
      },
      inset: {
        '20': '80px',
        '50': '200px',
      }
    },
  },
  plugins: [],
}

