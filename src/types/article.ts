export type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readingTime: string;
  tags?: string[];
};
