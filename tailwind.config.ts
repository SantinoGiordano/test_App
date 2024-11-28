import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        cutouts: 'var(--font-cutouts)',
        printClearly: 'var(--font-printClearly)'
      },
      backgroundImage: {
        'rave-bg': "url('/festival.jpg')",
        'background-image-about': "url('/resturaunt.jpg')",
        'background-image-home': "url('/festival.jpg')",
        'background-image-event': "url('/items.jpg')",

      },
    },
  },
  plugins: [],
} satisfies Config;
