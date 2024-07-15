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
      background: {
        "dark-secondary": "#2f2f2f",
        "dark-primary": "#B4B4B4",
      },
      colors: {
        "dark-primary": "#B4B4B4",
        "dark-primary-100": "#ECECEC",
        "dark-secondary": "#2f2f2f",
        "dark-grey": "#212121",
      },
    },
  },
  plugins: [],
};
