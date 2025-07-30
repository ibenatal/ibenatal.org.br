import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { getReadTime } from '@/utils/readtime';

export type Post = {
  image?: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  author: string;
  readTime: number;
  file: string;
};

type GetPostsProps = {
  limit?: number;
};

async function loadPostMetadata(fileName: string): Promise<Post | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      'src/app/(site)/artigos/content',
      fileName,
    );
    const content = await readFile(filePath, 'utf8');
    const post = await import(`./content/${fileName}`);

    const metadata = {
      ...post.metadata,
      readTime: getReadTime(content),
    };

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

export async function getPosts({ limit = 10 }: GetPostsProps): Promise<Post[]> {
  const files = await getContentFiles();
  const posts: Post[] = [];
  let count = 0;

  for (const fileName of files) {
    if (count >= limit) break;

    const post = await loadPostMetadata(fileName);
    if (post) {
      posts.push(post);
      count++;
    }
  }

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
