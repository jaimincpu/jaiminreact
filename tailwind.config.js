/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#3dd68c',
          accent: '#4db89e',
        },
        bg: {
          base: '#0b0d0f',
          card: 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        heading: ['Epilogue', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
