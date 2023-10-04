/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      poppins:['Poppins','sans-serif']
    },
    extend: {
      fontFamily:{
        atony:['Anton', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
};