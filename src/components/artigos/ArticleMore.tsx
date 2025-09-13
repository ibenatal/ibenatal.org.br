import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/app/(site)/artigos/get-posts';

export async function ArticleMore({ slug }: { slug: string }) {
  const allPosts = await getAllPosts();
  const index = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = index < allPosts.length - 1 ? allPosts[index + 1] : null; // older
  const nextPost = index > 0 ? allPosts[index - 1] : null; // newer

  if (!prevPost && !nextPost) return null;

  return (
    <section aria-labelledby="more-articles-heading" className="mb-8">
      <h3 id="more-articles-heading" className="mb-4 font-bold text-2xl text-center">
        Quer ler mais?
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {prevPost ? (
          <Link
            href={`/artigos/${prevPost.slug}`}
            className="group flex items-center gap-4 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 sm:p-4"
            aria-label={`Ler artigo anterior: ${prevPost.title}`}
            title={prevPost.title}
          >
            <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={prevPost.image || '/images/articles/article-default.png'}
                alt={prevPost.title}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-500">Artigo anterior</div>
              <div className="truncate font-medium text-primary-800 group-hover:underline">
                {prevPost.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" aria-hidden="true" />
        )}

        {nextPost ? (
          <Link
            href={`/artigos/${nextPost.slug}`}
            className="group flex items-center gap-4 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 sm:p-4 sm:flex-row-reverse"
            aria-label={`Ler próximo artigo: ${nextPost.title}`}
            title={nextPost.title}
          >
            <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={nextPost.image || '/images/articles/article-default.png'}
                alt={nextPost.title}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 text-right">
              <div className="text-xs text-gray-500">Próximo artigo</div>
              <div className="truncate font-medium text-primary-800 group-hover:underline">
                {nextPost.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}


