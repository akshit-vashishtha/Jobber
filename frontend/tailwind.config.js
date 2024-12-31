/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./index.html",                        // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",          // Include all your source files
    "./node_modules/flowbite/**/*.js"      // Include Flowbite components
  ],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(-3deg)' },  // Tilt left
          '50%': { transform: 'rotate(3deg)' },         // Tilt right
        },
      },
      animation: {
        tilt: 'tilt 1.5s infinite ease-in-out',         // Apply the tilt animation
      },
    },
  },
  plugins: [
    flowbitePlugin,            // Use Flowbite plugin
  ],
};
