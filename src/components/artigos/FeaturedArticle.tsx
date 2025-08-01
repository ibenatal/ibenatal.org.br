import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/app/(site)/artigos/get-posts';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';

export function FeaturedArticle({ post }: { post: Post }) {
  const formattedDate = dateIsoToDDMMYYYY(post.date);
  return (
    <div className="bg-white rounded-lg">
      <Link
        href={`/artigos/${post.slug}`}
        className="group relative w-full aspect-video block overflow-hidden"
        aria-label={`Ler mais sobre ${post.title}`}
        title={`Ler mais sobre ${post.title}`}
      >
        <Image
          src={post.image || '/images/articles/article-default.png'}
          alt={post.title}
          fill
          className="object-cover rounded-t-lg transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </Link>
      <div className="p-4 lg:p-10 flex flex-col gap-8">
        <Link href={`/artigos/${post.slug}`}>
          <h3 className="text-2xl lg:text-4xl font-bold text-primary-800 hover:text-primary-500 hover:underline transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-base lg:text-lg text-gray-500">{post.description}</p>
        <div className="flex flex-row gap-4 text-xs lg:text-base">
          <span>{post.author}</span>
          <span>{formattedDate}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}
