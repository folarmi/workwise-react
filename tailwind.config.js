module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0A459F",
        gray: "#FBFBFB",
        grey: "#e5e5e5",
        ash: "#757575",
        greyTwo: "#0c0c0c",
        lightAsh: "7490BA",
      },
    },
    fontFamily: {
      sans: ["Bw Nista Geometric DEMO", "sans-serif"],
      verybold: ["Bw Nista Geometric DEMO Bold", "sans-serif"],
      thin: ["Bw Nista Geometric DEMO Thin", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
