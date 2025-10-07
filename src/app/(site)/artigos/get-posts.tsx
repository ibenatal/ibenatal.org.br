import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Post, PostMetadata } from '@/@types/posts';
import { getReadTime } from '@/utils/readtime';

type GetPostsProperties = {
  limit?: number;
};

async function loadPostMetadata(fileName: string): Promise<Post | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/(site)/artigos/content', fileName);
    const content = await readFile(filePath, 'utf8');
    const post = (await import(`./content/${fileName}`)) as {
      metadata: PostMetadata;
    };

    const metadata = {
      ...post.metadata,
      readTime: getReadTime(content),
    } as const;

    if (!metadata) {
      console.error(`No metadata found in ${fileName}`);
      return null;
    }

    const postMetadata: Omit<Post, 'slug' | 'lang'> = metadata;
    return {
      slug: fileName.replace('.mdx', ''),
      ...postMetadata,
      file: fileName,
    };
  } catch (error) {
    console.error(`Error loading post ${fileName}:`, error);
    return null;
  }
}

async function getContentFiles(): Promise<string[]> {
  try {
    const dirPath = path.join(process.cwd(), 'src/app/(site)/artigos/content');
    const files = (await readdir(dirPath, { withFileTypes: true }))
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.mdx'))
      .map((dirent) => dirent.name);

    return files;
  } catch (error) {
    console.error('Error reading content directory:', error);
    return [];
  }
}

export async function getPosts({ limit = 10 }: GetPostsProperties): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await getContentFiles();

  console.info('get posts from fill-destructive');

  const postsWithMetadata = (await Promise.all(files.map(loadPostMetadata))).filter(
    (post) => post !== null,
  );

  const sortedPosts = postsWithMetadata.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return sortedPosts;
}
