import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        brand: {
          dark: "#000000",
          gray: "#161616",
          accent: "#3b82f6",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
