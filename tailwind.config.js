/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gilroymedium: ["gilroy-medium", "sans-serif"],
      gilroybold: ["gilroy-bold", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "18px" }],
      base: ["16px", { lineHeight: "20px" }],
      lg: ["18px", { lineHeight: "24px" }],
      xl: ["21px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "30px" }],
      "3xl": ["26px", { lineHeight: "32px" }],
      "4xl": ["30px", { lineHeight: "36px" }],
      "5xl": ["32px", { lineHeight: "40px" }],
      "6xl": ["36px", { lineHeight: "45px" }],
      "7xl": ["48px", { lineHeight: "60px" }],
      "8xl": ["64px", { lineHeight: "75px" }],
      "9xl": ["70px", { lineHeight: "81px" }],
    },
    screens: {
      "2xs": "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
