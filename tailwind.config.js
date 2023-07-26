module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bouhaws-dark": "#111111",
        "bouhaws-semi-dark": "#202128",
        "bouhaws-blue-main": "#336DFF",
        "bouhaws-light": "#D9D9D9",
        "bouhaws-blue-dark": "#265EEC",
        "bouhaws-green": "#27BA9E",
        "bouhaws-light-green": "#AEF4E9",
        "bouhaws-purple": "#9747FF",
        "bouhaws-gray": "#5A5B5B",
        "bouhaws-light-gray": "#9E9E9E",
        "bouhaws-light-gray-2": "#6F6F74",
        "bouhaws-text-black": "#1C1C1E",
        "progress-bar-gray": "#61656D",
        "bouhaws-orange": "#FF9900",
      },

      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
      },
    },
    boxShadow: {
      custom: "0px 10px 34px rgba(0, 0, 0, 0.15)",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdlg: "1000px",
      // => @media (min-width: 768px) { ... }

      lg: "1600px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: ".73rem",
      sm: ".85rem",
      tiny: ".83rem",
      base: ".90rem",
      lg: "1.0rem",
      xl: "1.11rem",
      "2xl": "1.2rem",
      "3xl": "1.5rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
