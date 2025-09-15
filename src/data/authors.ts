import type { Author } from '@/@types/posts';

export type AuthorInfo = {
  name: string;
  avatarSrc?: string;
  instagramUrl?: string;
  catchphrase?: string;
};

const authors: Record<string, AuthorInfo> = {
  'Rev. Celso Gibbs': {
    name: 'Rev. Celso Gibbs',
    avatarSrc: '/images/article/author-celso-gibbs.png',
    instagramUrl: 'https://www.instagram.com/celso.gibbs/',
    catchphrase: 'No serviço do Senhor',
  },
};

export function getAuthorInfo(author: Author): AuthorInfo {
  const info = authors[author.name];
  if (!info) return author;
  return {
    ...info,
    ...author,
  };
}
