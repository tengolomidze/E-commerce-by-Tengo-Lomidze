/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        "lightGrayishBlue": "hsl(223, 64%, 98%)",
        "grayishBlue": "hsl(220, 14%, 75%)",
        "darkGrayishBlue": "hsl(219, 9%, 45%)",
        "secondary": "white",
        "bg": "rgb(0, 0, 0)"
      },
    },
  },
  plugins: [],
}
