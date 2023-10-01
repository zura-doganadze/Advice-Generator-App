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
      inset: {
        92: "92%",
      },
      boxShadow: {
        "custom-shadow": "0px 0px 40px 0px #53FFAA",
      },
    },
  },
  plugins: [],
};
