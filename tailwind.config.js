const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      lg: { max: "1311px" }, // $laptop
      md: { max: "1023px" }, // $tablet
      sm: { max: "767px" }, // $mobile
    },
    colors: {
      transparent: "transparent",
      smoke: "#E8EFF7",
      night: "#1C334E",
      lazur: "#5B8CC4",
      grey: "#BACEE6",
      red: "#E84545",
    },
    fontSize: {
      base: ["18px", "28px"],
      xs: ["14px", "24px"],
      lg: ["28px", "36px"],
    },
    fontFamily: {
      roboto: ['"Roboto"', "serif"],
    },

    extend: {},
  },
  plugins: [],
};
