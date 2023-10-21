const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    // fontSize: {
    //   xs: "16px",
    //   xm: "20px",
    //   xl: "56px",
     
    // },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "light-blue": "#3C278D",
        "light-blackE": "#1E1E1E",
        "light-black": "#4D4D4D",
        "light-black2": "#484848",
        "light-grey": "#EDEDED",
      },
    },
  },
  plugins: [],
};
