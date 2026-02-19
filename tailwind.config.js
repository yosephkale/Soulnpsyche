/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f94771",
        secondary: "#ff6b35",
        dark: "#1F2937",
        light: "#F9FAFB",
      },
      fontFamily: {
        heading: ["Apple Garamond", "Garamond", "Georgia", "serif"],
        body: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
