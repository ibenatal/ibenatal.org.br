import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/app/(site)/artigos/get-posts';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';

export function FeaturedArticle({ post }: { post: Post }) {
  const formattedDate = dateIsoToDDMMYYYY(post.date);
  return (
    <div className="rounded-lg">
      <Link
        href={`/artigos/${post.slug}`}
        className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-white"
        aria-label={`Ler mais sobre ${post.title}`}
        title={`Ler mais sobre ${post.title}`}
      >
        <Image
          src={post.image || '/images/articles/article-default.png'}
          alt={post.title}
          fill
          className="rounded-t-lg object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </Link>
      <div className="flex flex-col gap-8 p-4 lg:p-10">
        <Link href={`/artigos/${post.slug}`}>
          <h3 className="font-bold text-2xl text-primary-800 transition-colors hover:text-primary-500 hover:underline lg:text-4xl">
            {post.title}
          </h3>
        </Link>
        <p className="text-base text-gray-500 lg:text-lg">{post.description}</p>
        <div className="flex flex-row gap-4 text-xs lg:text-base">
          <span>{post.author}</span>
          <span>{formattedDate}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}
