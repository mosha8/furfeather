import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '5xl': ['48px', '60px'],
        '6xl': ['60px', '88px'],
      },
      colors: {
        primary: '#EDEDED',
        background: '#171717',
        secondary: '#171717',
        dark: '#000A28',
        medium: '#2E2E2E', // decorative borders
        light: '#A0A0A2', // non-decorative borders
        navItemUnderline: '#4E4E4E',
        overlayLinkHover: '#242424',
        selectOptionBackground: '#242424',
      },
      lineHeight: {
        nav: '26px',
      },
      width: {
        '420': '420px',
      },
      height: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
};
export default config;
