import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");



const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    "animation": {
      "shine": "shine 2s linear infinite",
      "border-width": "border-width 3s infinite alternate",
      "border-widthchange": "border-widthchange 3s infinite alternate",
      "flip": "flip 6s infinite steps(2, end)",
      "rotate": "rotate 3s linear infinite both",
      "text-gradient": "text-gradient 1.5s linear infinite"
    },
    "keyframes": {
      "text-gradient": {
        "to": {
          "backgroundPosition": "200% center"
        }
      },
      "shine": {
        "from": {
          "backgroundPosition": "0 0"
        },
        "to": {
          "backgroundPosition": "-200% 0"
        }
      },
      "flip": {
        "to": {
          "transform": "rotate(360deg)"
        }
      },
      "rotate": {
        "to": {
          "transform": "rotate(90deg)"
        }
      },
      "border-width": {
        "from": {
          "width": "10px",
          "opacity": "0"
        },
        "to": {
          "width": "100px",
          "opacity": "1"
        }
      },
      "border-widthchange":{
      "from": {
          "width": "20px",
          "opacity": "0"
        },
        "to": {
          "width": "500px",
          "opacity": "1"
        }
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}