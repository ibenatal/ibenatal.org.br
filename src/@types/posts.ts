export type Author = {
  name: string;
  avatarSrc?: string;
  instagramUrl?: string;
  catchphrase?: string;
};

export type PostMetadata = {
  image?: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  author: Author;
  file: string;
};

export type Post = {
  image?: string;
  /** Versão borrada da capa (data URL), mostrada enquanto a imagem carrega */
  imageBlurDataURL?: string | undefined;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  author: Author;
  readTime: string;
  file: string;
};
