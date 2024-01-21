"use client";
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import Link from 'next/link';

// import { getPosts } from '@apis/mdx/getPosts';
import { useEffect, useState } from 'react';

import type { Post } from '@models/post';


export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>();
  async function fetchPosts() {
    const response = await fetch('/api/posts');
    const responseJson = await response.json();

    setPosts(responseJson.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="relative -top-[10px] flex flex-col gap-8">
      {posts?.map((post) => (
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
