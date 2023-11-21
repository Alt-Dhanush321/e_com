/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary : '#F5F7F6',
      secondary : '#FF7C04'
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
}