// import Image, { ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '1rem' }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '0.75rem' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '0.5rem' }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '0.5rem' }}>{children}</h4>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '1rem' }}>{children}</p>
    ),
    a: ({ children, ...props }) => (
      <a style={{ color: '#1e90ff', textDecoration: 'underline' }} {...props}>
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ol>
    ),
    li: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: '4px solid #ddd',
          paddingLeft: '1rem',
          color: '#666',
          marginBottom: '1rem',
        }}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code
        style={{
          background: '#f5f5f5',
          padding: '0.2rem 0.4rem',
          borderRadius: '4px',
          fontFamily: 'monospace',
        }}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          background: '#333',
          color: '#f5f5f5',
          padding: '1rem',
          borderRadius: '8px',
          overflowX: 'auto',
        }}
      >
        {children}
      </pre>
    ),
    // img: (props: ImageProps) => (
    //   <Image
    //     sizes="100vw"
    //     style={{
    //       width: '100%',
    //       height: 'auto',
    //       borderRadius: '8px',
    //       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    //     }}
    //     {...props}
    //   />
    // ),
    table: ({ children }) => (
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
        {children}
      </table>
    ),
    th: ({ children }) => (
      <th
        style={{
          border: '1px solid #ddd',
          padding: '0.5rem',
          backgroundColor: '#f5f5f5',
          fontWeight: 'bold',
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{children}</td>
    ),
    tr: ({ children }) => <tr style={{ borderBottom: '1px solid #ddd' }}>{children}</tr>,
    ...components,
  };
}
