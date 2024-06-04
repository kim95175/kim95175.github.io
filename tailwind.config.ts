import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.card-grid': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: '50px 2vw',
      transformStyle: 'preserve-3d',
      height: '100%',
      maxWidth: '1200px',
      margin: 'auto',
      padding: '50px',
      position: 'relative',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});

const config: Config = {
  content: ['./{src,public}/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base100: 'var(--base100)',
        base200: 'var(--base200)',
        baseContent: 'var(--baseContent)',
        primary100: 'var(--primary100)',
        primary200: 'var(--primary200)',
        secondary100: 'var(--secondary100)',
        secondary200: 'var(--secondary200)',
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
        pretendard: ['Pretendard'],
        sbaggro: ['SBAggro'],
      },
    },
  },
  plugins: [Myclass],
};
export default config;
