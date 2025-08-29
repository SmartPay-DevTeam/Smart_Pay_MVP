/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [forms, require('./src/components/common/NavBar/DashboardNavbar.js')],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF", // soft purple
        accent: "#9FFFE0", // aqua/teal
        background: {
          DEFAULT: "#0F172A", // deep navy fallback
          light: "#F9FAFB",
        },
        gradientFrom: "#A593FF",
        gradientTo: "#4263EB",
      },
      fontFamily: {
        sans: ["Geist", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        grifter: ["Grifter", "sans-serif"],
        aeonik: ["Aeonik", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      }
    },
  },
};
