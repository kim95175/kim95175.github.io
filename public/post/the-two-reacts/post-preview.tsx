import matter from 'gray-matter';

import { readFile } from 'fs/promises';

export async function PostPreview({ slug }: { slug: string }) {
  const fileContent = await readFile('./public/post/' + slug + '/index.md', 'utf8');
  const { data, content } = matter(fileContent);
  const wordCount = content.split(' ').filter(Boolean).length;

  return (
    <section className="rounded-md bg-black/5 p-2">
      <h5 className="font-bold">{data.title}</h5>
      <i>{wordCount} words</i>
    </section>
  );
}
