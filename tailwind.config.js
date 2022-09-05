/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "t-pink": "#fda4af",
        "t-purple": "#e879f9",
        "t-orange": "#fb923c",
        "t-red": "#ef4444",
      },
    },
  },
  plugins: [],
};
