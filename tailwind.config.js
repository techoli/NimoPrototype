/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "rgba(3, 0, 54, 0.74)",
      },
    },
    fontFamily: {
      primary: ["poppins"],
      sans: ["Comic Sans MS", "sans-serif"],
    },
  },
  plugins: [],
};
