/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fooBlack: {
          900: "#000000",
        },
        fooBlue: {
          700: "#0D5272",
        },
        fooPink: {
          800: "#BD4551",
          900: "#EC5564",
        },
        fooYellow: {
          200: "#FAE499",
        },
        fooWhite: {
          900: "#FFFFFF",
        },
        fooGrey: {
          200: "#D8D1CC",
          300: "#D9D9D9",
          800: "#131313",
          900: "#2B2B2B",
        },
        transparent: {
          200: "transparent",
        },
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "40px",
      },
    },
  },
  plugins: [],
};
