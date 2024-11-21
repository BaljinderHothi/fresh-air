/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the "app" directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the "components" directory
    "./public/**/*.{html,js}", // Add support for any static HTML or JS files in "public"
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"], // Custom Gotham font for typography
      },
      backgroundImage: {
        lung: "url('/images/lung background.png')", // Custom background for lungs
      },
      height: {
        'screen-minus-header': 'calc(100vh - 4rem)', // Custom height to account for header (adjust 4rem if needed)
      },
      colors: {
        customGray: "#f5f5f5", // Add any custom colors if required
      },
    },
  },
  plugins: [],
};
