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
