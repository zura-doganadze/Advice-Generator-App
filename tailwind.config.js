/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "card-baclground": "#313A48",
        "line-background": "#4F5D74",
        "btn-background": "#53FFAA",
      },
      colors: {
        "h1-color": "#53FFAA",
      },
    },
  },
  plugins: [],
};
