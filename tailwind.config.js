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
    dropShadow: {
      "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      "4xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
  },

  plugins: [],
};
