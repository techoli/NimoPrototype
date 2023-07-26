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

    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },

  plugins: [],
};
