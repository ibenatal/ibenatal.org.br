import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Post, PostMetadata } from '@/@types/posts';
import { getReadTime } from '@/utils/readtime';

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/(site)/artigos/content', `${slug}.mdx`);
    const content = await readFile(filePath, 'utf8');

    // Import the MDX file to get its metadata
    const post = (await import(`./content/${slug}.mdx`)) as {
      metadata: PostMetadata;
    };

    if (!post.metadata) {
      console.error(`No metadata found in ${slug}.mdx`);
      return null;
    }

    return {
      ...post.metadata,
      file: filePath,
      slug,
      readTime: getReadTime(content),
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}
