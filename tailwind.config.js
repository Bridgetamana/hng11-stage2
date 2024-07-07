/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary-60': '#00143A',
        'blue-primary-10': '#CCD1DA',
        'background': '#FCFCFC',
      },
      fontFamily: {
        sans: ["Josefin Sans",'sans-serif'],
      },
    },
  },
  plugins: [],
}