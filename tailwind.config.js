module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ColorBrand: '#242424',
        'ColorBrand-light': '#373737',
        ColorGrey: ' #bfbfbf',
        'ColorGrey-light': '#d4d4d4',
        'ColorGrey-dark': '#e1e1e1',
        ColorWhite: ' #f5f5f3',
        ColorRed: ' #eb5757',
        ColorGreen: ' #12d60e',
        ColorAnchor: '#373737',
        ColorBody: '#242424',
        'ColorBody-light': '#787878',
        ColorBorder: '#c6c6c6',
      },
      height: {
        Nav: '66px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
