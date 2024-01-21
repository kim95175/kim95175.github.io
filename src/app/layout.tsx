import type { Metadata } from 'next';
import React from 'react';

import '@styles/globals.css';
import { montserrat, notosans, pressStart, roboto } from '@styles/Fonts';

const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export const metadata: Metadata = {
  title: 'kim95175',
  description: 'LOSETTA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
        <link href="/styles/global.css" rel="stylesheet" />
      </head>
      <body
        className={`${notosans.className}
        ${cls(montserrat.variable, pressStart.variable)}`}
      >
        {children}
      </body>
    </html>
  );
}