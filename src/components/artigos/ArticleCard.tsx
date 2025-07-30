import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/app/(site)/artigos/get-posts';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';

export function ArticleCard({ post }: { post: Post }) {
  const formattedDate = dateIsoToDDMMYYYY(post.date);

  return (
    <div className="flex flex-col gap-4 h-full bg-white rounded-lg">
      <Link
        href={`/artigos/${post.slug}`}
        className="group relative w-full aspect-video block overflow-hidden rounded-lg"
        aria-label={`Ler mais sobre ${post.title}`}
        title={`Ler mais sobre ${post.title}`}
      >
        <Image
          src={post.image || '/images/articles/article-default.png'}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </Link>
      <div className="flex flex-col gap-4 px-4 pt-4 pb-8">
        <Link href={`/artigos/${post.slug}`}>
          <h3 className="text-xl font-medium line-clamp-2 text-primary-800 hover:text-primary-500 hover:underline transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 line-clamp-3">{post.description}</p>
        <div className="flex flex-row gap-4 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}
