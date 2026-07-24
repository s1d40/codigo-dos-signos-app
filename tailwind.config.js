/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A1A',
        surface: '#12122B',
        primary: '#7C3AED',
        secondary: '#EC4899',
        accent: '#F59E0B',
        text: '#E2E8F0',
        success: '#10B981'
      }
    },
  },
  plugins: [],
}
