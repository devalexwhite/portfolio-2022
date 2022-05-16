module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        content: "#474747",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
