module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0A459F",
        gray: "#FBFBFB",
        grey: "#e5e5e5",
      },
    },
    fontFamily: {
      sans: ["Bw Nista Geometric DEMO", "sans-serif"],
      verybold: ["Bw Nista Geometric DEMO Bold", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
