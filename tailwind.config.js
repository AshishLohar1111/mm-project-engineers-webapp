/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f4f6f8",
          100: "#e2e7ec",
          200: "#c1ccd8",
          300: "#98adbf",
          400: "#6f879f",
          500: "#546b84",
          600: "#415267",
          700: "#334053",
          800: "#262e3c",
          900: "#181e28"
        },
        accent: {
          500: "#f97316"
        }
      }
    }
  },
  plugins: []
};

