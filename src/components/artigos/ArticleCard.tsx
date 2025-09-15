import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/@types/posts';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';

export function ArticleCard({ post }: { post: Post }) {
  const formattedDate = dateIsoToDDMMYYYY(post.date);

  return (
    <article
      className="flex h-full flex-col gap-4 rounded-lg bg-white"
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link
        href={`/artigos/${post.slug}`}
        className="group block overflow-hidden rounded-lg"
        aria-label={`Ler mais: ${post.title}`}
      >
        <div className="relative block aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.image || '/images/articles/article-default.png'}
            alt={`Capa do artigo: ${post.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"
          />
        </div>
        <div className="flex flex-col gap-4 px-4 pt-4 pb-8">
          <h3
            className="line-clamp-2 font-medium text-primary-800 text-xl transition-colors group-hover:text-primary-500 group-hover:underline"
            itemProp="headline"
          >
            {post.title}
          </h3>
          <p className="line-clamp-3 text-gray-600" itemProp="description">
            {post.description}
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 px-4 pb-4 text-gray-500 text-sm">
          <span
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">{post.author.name}</span>
          </span>
          <span aria-hidden="true">•</span>
          <time dateTime={post.date} itemProp="datePublished">
            {formattedDate}
          </time>
          <span aria-hidden="true">•</span>
          <span
            aria-description="Tempo de leitura"
            title={`Tempo de leitura ${post.readTime}`}
          >
            {post.readTime}
          </span>
        </div>
      </Link>
    </article>
  );
}
