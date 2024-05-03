/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pano: ["Panoptica W00 Script"],
       
        allerta: ['Allerta Stencil'],
        inter:['Inter'],
      
        64:['Sixtyfour'],
        whisper:["Whisper"],
        pacifico:["Pacifico"],
        montserrat:["Montserrat"],
       
      },
      spacing: {
        side:'60px',
        top:'100px'
      },
      colors:{
        first:"#0e0c0e"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".minimal-scrollbar::-webkit-scrollbar": {
          width: "0px", // Width of the scrollbar
          height: "0px", // Height of the scrollbar (only for horizontal scrollbar)
        },
        ".minimal-scrollbar::-webkit-scrollbar-thumb": {
          display: "none", // Hide the scrollbar thumb
        },
        ".minimal-scrollbar::-webkit-scrollbar-track": {
          display: "none", // Hide the scrollbar track
        },
        ".minimal-scrollbar": {
          "-ms-overflow-style": "none", // IE scrollbar style
          "scrollbar-width": "none", // Width of the scrollbar (for Firefox)
          overflow: "auto" // Enable scrolling
        },
      };
  
      addUtilities(newUtilities);
    },
  ],
  
  
  
  
  
  
}

