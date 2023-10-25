/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "16px",
      md: "20px",
      lg: "56px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },

    extend: {
      colors: {
        "card-bg": "#ededed",
        gray: "#484848",
        "dark-gray": "#4d4d4d",
        blue: "#3c278d",
      },
    },
  },
  plugins: [],
};
