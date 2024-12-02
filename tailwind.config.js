/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: '#1F232B', // Custom color named "pageBg"
      },
    },
  },
  plugins: [require("daisyui")],
}

