/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      backdropBlur: {
        sm : "3px",
        md: "6px"
      },
      colors: {
        "gradLeft" : "#EFEFBB",
        "gradRight" : "#D4D3DD",
      }
    },
  },
  plugins: [],
};
