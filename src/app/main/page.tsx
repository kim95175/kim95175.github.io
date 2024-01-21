/* eslint-disable @typescript-eslint/consistent-type-assertions */

/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Link from 'next/link';

import matter from 'gray-matter';

import { readFile, readdir } from 'fs/promises';

export const metadata = {
  title: 'archive blog',
  description: 'frontend post',
};

interface Post {
  slug: string;
  title: string;
  date: string;
  spoiler: string;
}

export async function getPosts() {
  const entries = await readdir('./public/post/', { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map(async (dir) => await readFile('./public/post/' + dir + '/index.md', 'utf8')),
  );
  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);
    return { slug, ...data } as Post;
  });
  // posts.sort((a, b) => {
  //   return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  // });
  return posts;
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function HomePage({ posts }: { posts: Post[] }) {
  return (
    <div className="relative -top-[10px] flex flex-col gap-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="block py-4 hover:scale-[1.005]"
          href={'/main/' + post.slug + '/'}
        >
          <article>
            <h2 className="text-[28px] font-black text-white">{post.title}</h2>
            <p className="text-[13px] text-gray-700 dark:text-gray-300">
              {new Date(post.date).toLocaleDateString('en', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <p className="mt-1">{post.spoiler}</p>;
          </article>
        </Link>
      ))}
    </div>
  );
}
