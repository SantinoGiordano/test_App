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
      },
      backgroundImage: {
        'rave-bg': "url('/festival.jpg')",
        'background-image': "url('/resturaunt.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
