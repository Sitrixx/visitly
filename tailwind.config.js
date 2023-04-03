/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "gradient-chatbox": "#ff99d3",
      },
      backgroundImage: {
        "gradient-chatbox":
          "radial-gradient(at 32% 100%, hsla(222,70%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 61%, hsla(275,77%,71%,1) 0px, transparent 50%), radial-gradient(at 100% 53%, hsla(250,69%,65%,1) 0px, transparent 50%), radial-gradient(at 22% 20%, hsla(340,82%,60%,1) 0px, transparent 50%), radial-gradient(at 99% 13%, hsla(204,90%,77%,1) 0px, transparent 50%);",
      },
    },
  },
  plugins: [],
};
