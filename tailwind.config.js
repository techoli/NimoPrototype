/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "rgba(3, 0, 54, 0.74)",
      },
      fontFamily: { primary: ["Poppins"] },
    },
  },
  plugins: [],
};
