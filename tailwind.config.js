/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/images/bg.png')",
        "farm-bg": "url('/src/assets/images/farmland.png')",
        "suscribe-bg": "url('/src/assets/images/suscribe.png')",
      },
      backgroundColor: {
        "default-green": "#025002",
        "default-black-text": "#010101",
        "default-background": "#F5F5F5",
      },
      colors: {
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
      },
      fontFamily: {
        inria: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
