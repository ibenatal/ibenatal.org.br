import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/@types/posts';
import { cn } from '@/lib/utils';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';

type FeaturedArticleProperties = {
  post: Post;
  className?: string;
};

export function FeaturedArticle({ post, className }: FeaturedArticleProperties) {
  const formattedDate = dateIsoToDDMMYYYY(post.date);
  return (
    <article
      className={cn('rounded-lg bg-white', className)}
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link
        href={`/artigos/${post.slug}`}
        className="group block overflow-hidden rounded-lg bg-white"
        aria-label={`Ler mais: ${post.title}`}
      >
        <div className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={post.image || '/images/articles/article-default.png'}
            alt={post.image ? post.title : 'Imagem padrão de artigo'}
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
            className="rounded-t-lg object-cover transition-transform group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"
          />
        </div>
        <div className="flex flex-col gap-8 p-4 lg:p-10">
          <h3
            className="font-bold text-2xl text-primary-800 transition-colors group-hover:text-primary-500 group-hover:underline lg:text-4xl"
            itemProp="headline"
          >
            {post.title}
          </h3>
          <p className="text-base text-gray-500 lg:text-lg" itemProp="description">
            {post.description}
          </p>
          <div className="flex flex-row gap-4 text-gray-500 text-xs lg:text-base">
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{post.author.name}</span>
            </span>
            <time dateTime={post.date} itemProp="datePublished">
              {formattedDate}
            </time>
            <span aria-description="Tempo de leitura" title={`Tempo de leitura ${post.readTime}`}>
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
