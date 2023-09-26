/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '3rem',
      },
    },
    extend: {
      colors:{
        bgBlack: "#232536",
        hoverBg: "#FFD050",
        purple: "#592EA9",
      },
      boxShadow:{
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}