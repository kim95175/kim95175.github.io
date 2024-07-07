'use client';

import { ReactNode, createContext, useContext, useMemo } from 'react';

interface BlogContextProps {
  postTitle: string;
}

const BlogContext = createContext<BlogContextProps | undefined>(undefined);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
  postTitle: string;
}

export const BlogProvider = ({ children, postTitle }: BlogProviderProps) => {
  const contextValue = useMemo(() => ({ postTitle }), [postTitle]);

  return <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>;
};
