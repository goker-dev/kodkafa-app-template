/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      keyframes: {
        "from-right": {
          "0%": { transform: "translate(100%, 0)" },
          "100%": { transform: "translate(0)" },
        },
        "system-loader": {
          "0%": {
            backgroundSize: "400% 400%",
            backgroundPosition: "1% 50%",
          },
          "50%": {
            backgroundSize: "200% 400%",
            backgroundPosition: "99% 50%",
          },
          "100%": {
            backgroundSize: "400% 400%",
            backgroundPosition: "1% 50%",
          },
        },
      },
      animation: {
        "system-loading": "system-loader 1s linear infinite",
        "aside-from-right": "from-right .1s ease-out",
      },
    },
  },
};
