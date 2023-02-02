/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#13a546",

        secondary: "#0fd884",

        accent: "#f4eba4",

        neutral: "#28242E",

        "base-100": "#F8F9FC"
      }
    }
  ],
  plugins: [require("daisyui")]
};
