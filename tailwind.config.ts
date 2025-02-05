import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        smd: "550px",
        md: "650px",
        xmd: "768px",
        lg: "1024px",
      },

      fontSize: {
        base: "16px",
        md: "20px",
      },
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
