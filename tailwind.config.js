/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "gradient-chatbox": "#ff99d3",
      },
      backgroundImage: {
        test: "url('/images/Maps/map.svg')",
        "gradient-insta":
          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        "gradient-chatbox":
          "radial-gradient(at 32% 100%, hsla(222,70%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 61%, hsla(275,77%,71%,1) 0px, transparent 50%), radial-gradient(at 100% 53%, hsla(250,69%,65%,1) 0px, transparent 50%), radial-gradient(at 22% 20%, hsla(340,82%,60%,1) 0px, transparent 50%), radial-gradient(at 99% 13%, hsla(204,90%,77%,1) 0px, transparent 50%);",
        "gradient-spotify":
          "linear-gradient(63deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 18%, rgba(0,0,0,1) 45%, rgba(14,180,0,1) 100%);",
      },
      gridTemplateColumns: {
        "column-layout": "1fr 1fr",
      },
      gridTemplateRows: {
        "row-layout": "auto auto",
      },
      fontSize: {
        xxs: [
          "0.65rem",
          {
            lineHeight: "1rem",
          },
        ],
      },
      boxShadow: {
        spotify: "0 0px 60px 0 rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
