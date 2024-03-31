import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(237,237,237)',
        darkest: '#171717',
        dark: '#000A28',
        medium: 'rgba(0,10,40,0.6)',
        light: 'rgba(160,160,162)',
      },
    },
  },
  plugins: [],
};
export default config;
