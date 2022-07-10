/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "independence": "#5c5874ff",
        "rhythm": "#797596ff",
        "xiketic": "#171219ff",
        "play-button": "#45e41f",
        "play-button-active": '#4db947',
        "paper-sheet": "#d3bc8f"
      },
      backgroundImage: {
        "grass": "url('/img/grass.png')",
        "paper": "url('/img/old-paper.png')"
      },
      fontFamily: {
        "alagard": ['Alagard', 'Arial', 'sans-serif'],
        "pixellari": ['Pixellari', 'Arial', 'sans-serif']
      },
      animation: {
        shine: "shine 1s"
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" }
        }
      }
    },
  },
  plugins: [],
}
