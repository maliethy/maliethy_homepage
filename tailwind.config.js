module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Color_Brand: "#242424",
        "Color_Brand-light": "#373737",
        Color_Grey: " #bfbfbf",
        "Color_Grey-light": "#d4d4d4",
        "Color_Grey-dark": "#e1e1e1",
        Color_White: " #f5f5f3",
        Color_Red: " #eb5757",
        Color_Green: " #12d60e",
        Color_Anchor: "#373737",
        Color_Body: "#242424",
        "Color_Body-light": "#787878",
        Color_Border: "#c6c6c6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
