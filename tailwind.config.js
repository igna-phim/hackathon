module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light": "url('/nature-light.jpg')",
        "bottle": "url('/images/plastic-bottle.jpg')",
        "cardboard": "url('/CardBoard.jpg')",
        "plastic": "url('/Plastic.png')",
        "wood": "url('/Wood.png')"
      },
    },
  },
  plugins: [],
}