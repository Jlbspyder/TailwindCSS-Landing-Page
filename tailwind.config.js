/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '967px',
      xl: '1440px'
    },
    transitionDuration: {
      '2000': '2000ms',
    },
    extend: {
      colors: {
        BrightRed: 'hsl(12, 88%, 59%)',
        BrightRedLight: 'hsl(12, 85%, 68%)',
        DarkBlue: 'hsl(228, 39%, 23%)',
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        VeryDarkBlue: 'hsl(233, 12%, 13%)',
        VeryPaleRed: 'hsl(13, 100%, 96%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
      } 
    },
  },
  plugins: [],
}

