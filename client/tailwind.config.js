/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["focus", "valid"],
      fontWeight: ["focus", "valid"],
      top: ["focus", "valid"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
};

