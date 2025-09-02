import Link from 'next/link';
import type { Post } from '@/app/(site)/artigos/get-posts';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';

export function Widget({ posts }: { posts: Post[] }) {
  return (
    <div className="rounded-lg bg-white p-4">
      <MostPopularWidget posts={posts} />
    </div>
  );
}

export function MostPopularWidget({ posts }: { posts: Post[] }) {
  const mostPopularPosts = posts.slice(0, 5);
  return (
    <div className="rounded-lg bg-white">
      <h3 className="font-medium">Mais Populares</h3>
      <div className="flex flex-col gap-4 divide-y divide-gray-200 py-4">
        {mostPopularPosts.map((post) => (
          <ArticleWidget key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

function ArticleWidget({ post }: { post: Post }) {
  const formattedDate = dateIsoToDDMMYYYY(post.date);
  return (
    <Link
      href={`/artigos/${post.slug}`}
      className="block pb-4 last-of-type:pb-0"
    >
      <h3 className="font-medium text-primary-800 text-xl transition-colors hover:text-primary-500 hover:underline">
        {post.title}
      </h3>
      <div className="text-gray-500 text-sm">{formattedDate}</div>
    </Link>
  );
}
