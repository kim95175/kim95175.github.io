/* eslint-disable camelcase */
import { Montserrat, Noto_Sans_KR, Press_Start_2P, Roboto } from 'next/font/google';

export const notosans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--notosans',
});

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  weight: ['400', '500', '700'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat',
});

export const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--pressStart',
});
