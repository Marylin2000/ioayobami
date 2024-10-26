/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grad_1: '#ff6b6b', // Example of a custom color
        secondary: '#3498db', // Another custom color
        accent: '#f39c12', // Additional custom color
        // Add more colors as needed
      },
      backgroundImage: {
    hero: 'linear-gradient(rgba(8, 3, 71, 0.95), rgba(51, 21, 133, 0.95)), url(./assets/images/hero-bg.jpg)'
       
      
      },
    },
  },
  plugins: [],
}
