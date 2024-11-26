import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          dark: "var(--surface-dark)",
        },
        content: {
          DEFAULT: "var(--text)",
          dark: "var(--text-dark)",
        },
        accent: "var(--accent)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
