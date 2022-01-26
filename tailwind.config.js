module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': "Lato",
      'headings': "Merriweather"
    },
    extend: {
      backgroundImage: {
        'coffee': "url('https://wallpaperwaifu.com/wp-content/uploads/2020/01/night-coffee-shop-thumb.jpg')"
      }
    },
  },
  plugins: [],
}