import type { Metadata } from 'next';
import React from 'react';

import { montserrat, notosans, pressStart } from '@styles/Fonts';
import '@styles/globals.css';
import { cls } from '@utils/utils';

export const metadata: Metadata = {
  title: 'Archive by kim95175',
  description: 'A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
      </head>
      <body
        className={`
        ${cls(montserrat.variable, pressStart.variable, notosans.variable)}`}
      >
        {children}
      </body>
    </html>
  );
}
