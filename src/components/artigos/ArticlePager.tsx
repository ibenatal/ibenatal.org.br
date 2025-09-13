import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/app/(site)/artigos/get-posts';

type ArticlePagerProps = {
  prev?: Post | null;
  next?: Post | null;
};

export function ArticlePager({ prev, next }: ArticlePagerProps) {
  if (!prev && !next) return null;

  return (
    <nav aria-label="Navegação entre artigos" className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/artigos/${prev.slug}`}
            className="group flex items-center gap-4 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 sm:p-4"
          >
            <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={prev.image || '/images/articles/article-default.png'}
                alt={prev.title}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-500">Artigo anterior</div>
              <div className="truncate font-medium text-primary-800 group-hover:underline">
                {prev.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/artigos/${next.slug}`}
            className="group flex items-center gap-4 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 sm:p-4 sm:flex-row-reverse"
          >
            <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={next.image || '/images/articles/article-default.png'}
                alt={next.title}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 text-right">
              <div className="text-xs text-gray-500">Próximo artigo</div>
              <div className="truncate font-medium text-primary-800 group-hover:underline">
                {next.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}


