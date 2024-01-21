/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

import matter from 'gray-matter';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkSmartypants from 'remark-smartypants';
import { remarkMdxEvalCodeBlock } from "./mdx";
import './markdown.css';

import { readFile, readdir } from 'fs/promises';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const filename = './public/post/' + params.slug + '/index.md';
  const file = await readFile(filename, 'utf8');

  let postComponents = {};
  try {
    postComponents = await import('../../../../../public/post/' + params.slug + '/components.tsx');
  } catch (e) {
    throw new Error('No components.tsx found');
  }
  const { content, data } = matter(file);
  const editUrl = `https://github.com/kim95175/kim95175.github.io/tree/main/public/post/${encodeURIComponent(
    params.slug,
  )}/index.md`;
  return (
    <article>
      <h1 className="text-[40px] font-black leading-[44px]">{data.title}</h1>
      <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
        {new Date(data.date).toLocaleDateString('en', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <div className="markdown mt-10">
        <MDXRemote
          source={content}
          components={{
            ...postComponents,
          }}
          options={{
            mdxOptions: {
              useDynamicImport: true,
              remarkPlugins: [
                remarkSmartypants,
                [remarkMdxEvalCodeBlock, filename]
              ],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                ],
              ],
            },
          }}
        />
        <p>
          <Link href={editUrl}>Edit on GitHub</Link>
        </p>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const entries = await readdir('./public/post/', { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const file = await readFile('./public/post/' + params.slug + '/index.md', 'utf8');
  const { data } = matter(file);
  return {
    title: data.title + ' — archvie',
    description: data.spoiler,
  };
}
