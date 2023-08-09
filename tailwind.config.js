/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF0000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
