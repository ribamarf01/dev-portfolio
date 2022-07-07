/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#08090aff",
        "independence": "#5c5874ff",
        "rhythm": "#797596ff",
        "xiketic": "#171219ff"
      },
      backgroundImage: {
        "grass": "url('/img/grass.png')"
      },
      fontFamily: {
        "alagard": ['Alagard', 'Arial', 'sans-serif'],
        "pixellari": ['Pixellari', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
