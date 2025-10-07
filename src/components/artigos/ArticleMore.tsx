import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/app/(site)/artigos/get-posts';

export async function ArticleMore({ slug }: { slug: string }) {
  const allPosts = await getAllPosts();
  const index = allPosts.findIndex((p) => p.slug === slug);
  const previousPost = index < allPosts.length - 1 ? allPosts[index + 1] : null; // older
  const nextPost = index > 0 ? allPosts[index - 1] : null; // newer

  if (!previousPost && !nextPost) return null;

  return (
    <section aria-labelledby="more-articles-heading" className="mb-8">
      <h3 id="more-articles-heading" className="mb-4 text-center font-bold text-2xl">
        Quer ler mais?
      </h3>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {previousPost ? (
          <li>
            <Link
              href={`/artigos/${previousPost.slug}`}
              rel="prev"
              className="group flex items-center gap-4 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 sm:p-4"
              aria-label={`Artigo anterior: ${previousPost.title}`}
            >
              <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={previousPost.image || '/images/articles/article-default.png'}
                  alt={`Capa do artigo: ${previousPost.title}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-gray-500 text-xs">Artigo anterior</div>
                <div className="truncate font-medium text-primary-800 group-hover:underline">
                  {previousPost.title}
                </div>
              </div>
            </Link>
          </li>
        ) : (
          <li className="hidden sm:block" aria-hidden="true" />
        )}

        {nextPost ? (
          <li>
            <Link
              href={`/artigos/${nextPost.slug}`}
              rel="next"
              className="group flex items-center gap-4 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 sm:flex-row-reverse sm:p-4"
              aria-label={`Próximo artigo: ${nextPost.title}`}
            >
              <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={nextPost.image || '/images/articles/article-default.png'}
                  alt={`Capa do artigo: ${nextPost.title}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 sm:text-right">
                <div className="text-gray-500 text-xs">Próximo artigo</div>
                <div className="truncate font-medium text-primary-800 group-hover:underline">
                  {nextPost.title}
                </div>
              </div>
            </Link>
          </li>
        ) : (
          <li className="hidden sm:block" aria-hidden="true" />
        )}
      </ul>
    </section>
  );
}
