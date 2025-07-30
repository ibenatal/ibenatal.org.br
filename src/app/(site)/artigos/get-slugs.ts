import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function getSlugs(): Promise<string[]> {
  try {
    const dirPath = path.join(__dirname, 'content');
    const files = await readdir(dirPath);

    // Filter for MDX files and remove the extension
    return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace('.mdx', ''));
  } catch (error) {
    console.error('Error reading content directory:', error);
    return [];
  }
}
