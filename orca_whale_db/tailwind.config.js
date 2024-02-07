//tailwind allows us to use our own custom variables
//we do not write CSS in 2024. Just understand it.

/** @type {import('tailwindcss').Config} */

export default{
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
      extend: {
          colors:{

          }
      }
  },
  plugins: [],
    corePlugins: {
        preflight: false,
    }
}

//figma:

//all desktops have standardized size: 14x40px
//encourage designers and developers to work with layers and grids