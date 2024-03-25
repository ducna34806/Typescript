/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      width: {
        1016: "1016px",
        980: "980px",
        696:"696px"
      },
      height: {
        88: "88px",
        61: "61px",
      },
    },
  },
  plugins: [],
};
