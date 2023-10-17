import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "768px",
        md: "992px",
        lg: "1024px",
        xl: "1200px",
      },
      colors: {
        primary: {
          primary: "#7877EE",
          action: "#8c8bf7",
        },
        light: {
          title: "#1C2639",
          text: "rgba(28, 38, 57, 0.75)",
          divider: "#EDEDFD",
          paper: "#F6F6FE",
          default: "#ffffff",
          danger: "#FF0202",
          warning: "#FF8B37",
        },
        dark: {
          title: "#FFFFFF",
          text: "rgba(255, 255, 255, 0.60)",
          divider: "#212733",
          paper: "#181C25",
          default: "#10131A",
          danger: "#FF4E4E",
          warning: "#FF8B37",
        },
        common: {
          black: "#000000",
          white: "#ffffff",
          accent: "#E2264D",
          success: "#2fa928",
        },
      },
      fontFamily: {
        cairo: ["Cairo", ...fontFamily.sans],
      },
      backgroundSize: {
        over: "2900%",
      },
      dropShadow: {
        sharp: "0 6px 14px rgb(0 0 0 / 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
