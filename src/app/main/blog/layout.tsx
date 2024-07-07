'use client';

import React from 'react';

import { MDXProvider } from '@mdx-js/react';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <MDXProvider>
      <div className="my-4 px-4 markdown-body">{children}</div>
    </MDXProvider>
  );
}
