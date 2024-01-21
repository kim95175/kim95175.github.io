import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base100: 'var(--base100)',
        base200: 'var(--base200)',
        baseContent: 'var(--baseContent)',
        primary100: 'var(--primary100)',
        primary200: 'var(--primary200)',
        accent100: 'var(--accent100)',
        accent200: 'var(--accent200)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['var(--montserrat)'],
        pressStart: ['var(--pressStart)'],
        roboto: ['var(--roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
