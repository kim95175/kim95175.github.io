/* eslint-disable no-return-await */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable prefer-template */

/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { NextResponse } from 'next/server';

import matter from 'gray-matter';

import type { Post } from '@models/post';

import { readFile, readdir } from 'fs/promises';

async function getPosts(): Promise<Post[]> {
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
  return posts;
}

export async function GET(req: Request) {
  try {
    const posts = await getPosts();
    return NextResponse.json({ data: posts });
  } catch (error) {
    throw new Error(String(error));
  }
}
