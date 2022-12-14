/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      fontSize: {
        xs: "15px",
      },
      colors: {
        "orange-soft": "hsl(35, 77%, 62%)",
        "red-soft": "hsl(5, 85%, 63%)",
        "white-off": "hsl(36, 100%, 99%)",
        "blue-grayish": "hsl(233, 8%, 79%)",
        "blue-dark-grayish": "hsl(236, 13%, 42%)",
        "blue-dark": "hsl(240, 100%, 5%)",
      },
    },
    gridTemplateColumns: {
      2: "1fr 1fr",
      3: "1fr 1fr 1fr",
      1.3: "100px 1fr",
      70: "70% 1fr",
    },
  },
  plugins: [],
};
