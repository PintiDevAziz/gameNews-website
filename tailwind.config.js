module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        bgBase: "#272B30",
        bodyBgBase: "#2A2E33",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
