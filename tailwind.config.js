/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors:{
            primaryBlue:"#0076CE",
            cardBlue:"#0076CE",
            cardRed:"#FF6666",
            cardInfoBg:"#F4F4F4"
          },
          fontFamily:{
            'poppins':["Poppins"]
          }
        },
    },
    plugins: [],
};
