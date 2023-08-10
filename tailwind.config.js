/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/images/bg.png')",
        "farm-bg": "url('/src/assets/images/farmland.png')",
        "subscribe-bg": "url('/src/assets/images/subscribe.png')",
      },
      backgroundColor: {
        "default-green": "#025002",
        "default-black-text": "#010101",
        "default-background": "#F5F5F5",
        "default-background-100": "#ECECEC;",
        "table-background": "#D9D9D9",
      },
      borderColor: {},
      colors: {
        "custom-orange": "#C86C00",
        primary: {
          100: "#025002",
        },
        faded: {
          100: "#7E7E7E",
        },
        terms: {
          100: "#5A5A5A",
          200: "#D93F21",
        },
        search: {
          100: "#5F675D",
        },
      },
      fontFamily: {
        inria: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
