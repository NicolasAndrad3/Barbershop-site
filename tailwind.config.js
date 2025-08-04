/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            cursive: ['"Great Vibes"', 'cursive'],
            graffiti: ['"Permanent Marker"', 'cursive'],
          },
        },
      },      
    plugins: [],
  }
