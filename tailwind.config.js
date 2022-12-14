/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
    extend: {
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
