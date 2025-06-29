import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        100: "#F6F6F6",
        300: "#FAFAFA",
        200: "#616777",
        400: "#F0F0F0",
        500: "#EAEAEA",
        600: "#E5E5E5",
      },

      primary: {
        "50": "#5057EA",
        "60": "#A5A6F6",
        "70": "#7879F1",
        "80": "#6957FF",
        "90": "#623EF4",
        "100": "#4D3DB8",
        default: "#4D3DB8",
      },
      green: {
        default: "#3B7732",
        100: "#4D9C42",
        90: "#62C654",
        80: "#62C654",
        70: "#89D47F",
        60: "#B0E3A9",
        50: "#5BD267",
      },
      red: {
        default: "#781717",
        100: "#781717",
        90: "#ba3030",
        80: "#EC6B5F",
        70: "#F18379",
        60: "#FFA198",
        50: "#FEC7B4",
        40: "#b24646",
      },
      yellow: {
        default: "#A09100",
        110: "#302C06",
        100: "#A09100",
        90: "#BEAC07",
        80: "#DDCB2B",
        70: "#FAEA60",
        60: "#FFF280",
        50: "#F6F193",
      },
    },
    fontSize: {
      heading1: [
        "2.25rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
          letterSpacing: "-0.54px",
        },
      ],
      heading2: [
        "1.5rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
          letterSpacing: "-0.312px",
        },
      ],
      heading3: [
        "1.25rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
          letterSpacing: "-0.3px",
        },
      ],
      subheading1: [
        "1.125rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
          letterSpacing: "-0.18px",
        },
      ],
      subheading2: [
        "1.125rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
          letterSpacing: "-0.18px",
        },
      ],
      subheading3: [
        "1rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
          letterSpacing: "-0.16px",
        },
      ],
      subheading4: [
        "1rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
          letterSpacing: "-0.16px",
        },
      ],
      bodybold: [
        "0.875rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
          letterSpacing: "-0.14px",
        },
      ],
      bodyregular: [
        "0.875rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
          letterSpacing: "-0.21px",
        },
      ],
      bodymedium: [
        "0.875rem",
        {
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.14px",
        },
      ],
      bodylarge: [
        "1rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
          letterSpacing: "-0.16px",
        },
      ],
      subtextBold1: [
        "0.8125rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
          letterSpacing: "-0.143px",
        },
      ],
      subtextBold2: [
        "0.75rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
          letterSpacing: "-0.144px",
        },
      ],
      subtextReg1: [
        "0.8125rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
          letterSpacing: "-0.156px",
        },
      ],
      subtextReg2: [
        "0.75rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
          letterSpacing: "-0.144px",
        },
      ],
      cta: [
        "1rem",
        {
          fontWeight: 600,
          lineHeight: "100%",
          letterSpacing: "-0.16px",
        },
      ],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
