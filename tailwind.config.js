/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/images/bg.png')",
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
      },
      fontFamily: {
        inria: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
