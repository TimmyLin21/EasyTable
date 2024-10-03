/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sourcesan: "Source Sans 3, sans-serif",
        handwriting: "Waiting for the Sunrise, cursive",
      },
      colors: {
        primary: {
          50: "hsl(48,100%,96.1%)",
          100: "hsl(48,100%,88.8%)",
          200: "hsl(48,100%,76.7%)",
          300: "hsl(46,100%,64.5%)",
          400: "hsl(43,100%,55.9%)",
          500: "hsl(38,95.3%,50.2%)",
          600: "hsl(32,98.2%,43.7%)",
          700: "hsl(26,93.7%,37.1%)",
          800: "hsl(22,85%,31.4%)",
          900: "hsl(21,80.7%,26.5%)",
          950: "hsl(21,94.4%,14.1%)",
        },
        info: {
          50: "hsl(220,60%,97.1%)",
          100: "hsl(213,56.2%,93.7%)",
          200: "hsl(212,57.7%,86.1%)",
          300: "hsl(211,59.4%,73.9%)",
          400: "hsl(209,57.3%,59.6%)",
          500: "hsl(210,54.7%,48.4%)",
          600: "hsl(211,60.2%,39.4%)",
          700: "hsl(212,59.8%,32.2%)",
          800: "hsl(212,55.7%,27.5%)",
          900: "hsl(213,49.2%,23.9%)",
          950: "hsl(215,50.6%,15.9%)",
        },
        success: {
          50: "hsl(125,64.7%,96.7%)",
          100: "hsl(133,73.7%,92.5%)",
          200: "hsl(133,68.4%,85.1%)",
          300: "hsl(133,66.4%,73.1%)",
          400: "hsl(134,59.8%,58%)",
          500: "hsl(134,61.4%,44.7%)",
          600: "hsl(134,66.5%,36.3%)",
          700: "hsl(134,62.4%,29.2%)",
          800: "hsl(134,56.1%,24.1%)",
          900: "hsl(135,53.4%,20.2%)",
          950: "hsl(135,68.6%,10%)",
        },
        warning: {
          50: "hsl(55,100%,95.3%)",
          100: "hsl(56,100%,87.8%)",
          200: "hsl(54,100%,76.3%)",
          300: "hsl(51,100%,62.7%)",
          400: "hsl(48,100%,52.5%)",
          500: "hsl(45,100%,46.3%)",
          600: "hsl(40,100%,41%)",
          700: "hsl(35,97.6%,32.9%)",
          800: "hsl(31,86.4%,28.8%)",
          900: "hsl(28,77.1%,25.7%)",
          950: "hsl(26,88.9%,14.1%)",
        },
        danger: {
          50: "hsl(5,85.7%,97.3%)",
          100: "hsl(0,92.6%,94.7%)",
          200: "hsl(357,88.2%,90%)",
          300: "hsl(356,89.2%,81.8%)",
          400: "hsl(356,87.7%,71.4%)",
          500: "hsl(354,82.3%,60.2%)",
          600: "hsl(352,70.9%,49.8%)",
          700: "hsl(350,76%,40.8%)",
          800: "hsl(348,74%,34.7%)",
          900: "hsl(346,69%,30.4%)",
          950: "hsl(348,80.2%,15.9%)",
        },
        slate: {
          50: "hsl(220,20%,97.1%)",
          100: "hsl(220,18.7%,93.7%)",
          200: "hsl(222,18.3%,86.1%)",
          300: "hsl(214,17.3%,73.9%)",
          400: "hsl(215,17.5%,59.6%)",
          500: "hsl(215,16.3%,46.9%)",
          600: "hsl(217,18.4%,39.4%)",
          700: "hsl(218,18.3%,32.2%)",
          800: "hsl(220,17.1%,27.5%)",
          900: "hsl(220,14.8%,23.9%)",
          950: "hsl(218,13.6%,15.9%)",
        },
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + 24px))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + 24px))" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
      backgroundImage: {
        mapview: "url('mapview.png')",
      },
    },
  },
  plugins: [],
};
