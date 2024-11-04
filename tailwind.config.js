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
    },
    extend: {},
  },
  plugins: [],
};
