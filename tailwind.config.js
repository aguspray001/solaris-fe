/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   wiggle: {
      //     '0%': { transform: 'translateY(0px)' },
      //     '100%': { transform: 'translateY(-100px)' },
      //     '100%': { transform: 'translateY(0px)' },
      //   }
      // }
    },
  },
  plugins: [],
}
