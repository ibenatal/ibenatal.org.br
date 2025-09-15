import Link from 'next/link';
import type { Post } from '@/app/(site)/artigos/get-posts';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';

export function Widget({ posts }: { posts: Post[] }) {
  return (
    <section
      className="rounded-lg bg-white p-4"
      aria-labelledby="most-popular-heading"
    >
      <MostPopularWidget posts={posts} />
    </section>
  );
}

export function MostPopularWidget({ posts }: { posts: Post[] }) {
  const mostPopularPosts = posts.slice(0, 5);
  return (
    <div className="rounded-lg bg-white">
      <h3 id="most-popular-heading" className="font-medium">
        Mais Populares
      </h3>
      <ul className="flex flex-col gap-4 divide-y divide-gray-200 py-4">
        {mostPopularPosts.map((post) => (
          <ArticleWidget key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}

function ArticleWidget({ post }: { post: Post }) {
  const formattedDate = dateIsoToDDMMYYYY(post.date);
  return (
    <li className="pb-4 last-of-type:pb-0">
      <h4 className="font-medium text-primary-800 text-xl">
        <Link
          href={`/artigos/${post.slug}`}
          className="transition-colors hover:text-primary-500 hover:underline"
        >
          {post.title}
        </Link>
      </h4>
      <time className="text-gray-500 text-sm" dateTime={post.date}>
        {formattedDate}
      </time>
    </li>
  );
}
