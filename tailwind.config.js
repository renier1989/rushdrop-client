/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'lines-bg': "url('/bg.svg')",
        // 'logo': "url('/public/logo.svg')",
      },
      fontFamily : {
        'Anton' : ['Anton', 'san-serif'],
        'Rubik' : ['Rubik', 'san-serif'],
      }
    },
  },
  plugins: [],
};
