/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      dark: "#2d2d2d",
      white: "#fff",
      gray: "#9d9d9d",
      blue: "#010E2E",
      "blue-light": "#54ACF2",
    },
    extend: {},
  },
  plugins: [],
};
