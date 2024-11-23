/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                        // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",          // Include all your source files
    "./node_modules/flowbite/**/*.js"      // Include Flowbite components
  ],
  theme: {
    extend: {},                             // Add custom themes if needed
  },
  plugins: [
    require('flowbite/plugin'),            // Include Flowbite plugin
  ],
};
