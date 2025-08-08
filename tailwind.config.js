module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        placard: ["Placard MT Std Condensed", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#0d0d0d",
        surface: "#141414",
        card: "#1a1a1a",
        muted: "#9a9a9a",
        text: "#e6e6e6",
        accent: "#ff4d4d",
      },
    },
  },
  plugins: [],
};
