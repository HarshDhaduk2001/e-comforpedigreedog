/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      orange: "#fc8321",
      blue: "#00bdcd",
      gray: "#6E6E6E",
      darkGray: "#333333",
      lightGray: "#bbbbbb",
      brown: "#2C1100",
      white: "#ffffff",
    },
  },
  plugins: [],
};
