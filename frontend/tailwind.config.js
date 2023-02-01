/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      noto: ["Noto", "sans-serif"],
    },
    extend: {
      colors: {
        "violet-primary": "#806CFF",
        "neon-primary": "#D3FA48",
        "neon-light": "#E4FB94",
        "violet-secondary": "#6C52FF",
        black: "#302518",
        "violet-bg": "#FAFAFF",
      },
    },
  },

  plugins: [],
};
