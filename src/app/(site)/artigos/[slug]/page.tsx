import { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AuthorCard } from '@/components/artigo/AuthorCard';
import { ArticleMore } from '@/components/artigos/ArticleMore';
import { SectionContainer } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { blurPlaceholder } from '@/lib/image-placeholder';
import { BlogPostSchema } from '@/lib/schema';
import { formatArticleDate } from '@/utils/datetime';
import { getPost } from '../get-post';
import { getSlugs } from '../get-slugs';

// O MDX também é usado em Sobre nós, Perfil pastoral e PIB Riachuelo, então a tipografia
// do artigo fica aqui no container, e não em mdx-components.tsx. Os seletores [&_p] têm
// prioridade sobre os tamanhos que mdx-components.tsx define, e o texto fica em 20px
// também no mobile. A fonte é a Roboto do site, herdada do body.
const articleBodyClassName = [
  'mx-auto flex max-w-3xl flex-col gap-[0.8rem] lg:gap-[1.6rem]',
  '[&_li]:text-xl [&_li]:text-neutral-700',
  '[&_p]:text-xl [&_p]:leading-relaxed [&_p]:text-neutral-700',
  '[&_strong]:font-bold [&_strong]:text-neutral-950',
].join(' ');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  // Add cache-busting parameter for social media
  const buildTimestamp = process.env.BUILD_TIMESTAMP || Date.now().toString();
  const imageUrl = new URL(
    post.image || '/images/articles/article-default.png',
    'https://ibenatal.org.br',
  );
  imageUrl.searchParams.set('v', buildTimestamp);
  const imageUrlString = imageUrl.toString();

  const pageUrl = new URL(`/artigos/${slug}`, 'https://ibenatal.org.br').toString();

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/artigos/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: pageUrl,
      siteName: 'IBE - Igreja Batista da Esperança',
      locale: 'pt_BR',
      images: [
        {
          url: imageUrlString,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrlString],
    },
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Get post metadata
  const post = await getPost(slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  // Dynamically import the MDX content
  const { default: Content } = await import(`../content/${slug}.mdx`);

  // Format the date for display using the utility function
  const formattedDate = formatArticleDate(post.date);

  // Full URLs for schema with cache-busting
  const buildTimestamp = process.env.BUILD_TIMESTAMP || Date.now().toString();
  const fullImageUrl = new URL(
    post.image || '/images/articles/article-default.png',
    'https://ibenatal.org.br',
  );
  fullImageUrl.searchParams.set('v', buildTimestamp);
  const fullImageUrlString = fullImageUrl.toString();

  const fullUrl = new URL(`/artigos/${slug}`, 'https://ibenatal.org.br').toString();

  // Load author info for the AuthorCard
  const { getAuthorInfo } = await import('@/data/authors');
  const authorInfo = getAuthorInfo(post.author);
  return (
    <main className="bg-neutral-100">
      <SectionContainer className="relative max-w-4xl pb-16 lg:gap-8 lg:pt-8" isContentPage>
        <div className="relative aspect-video">
          <Image
            src={post.image || '/images/articles/article-default.png'}
            {...blurPlaceholder(post.imageBlurDataURL)}
            alt={post.title}
            fill
            preload
            className="object-cover sm:rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          />
        </div>

        <article className="overflow-hidden rounded-lg bg-white shadow-lg">
          <BlogPostSchema
            headline={post.title}
            description={post.description}
            datePublished={post.date}
            author={post.author}
            image={fullImageUrlString}
            url={fullUrl}
          />

          <div className="py-8 sm:px-8 md:p-12 lg:py-12">
            <header className="mx-auto mb-12 max-w-3xl px-2.5 sm:px-0">
              <Link
                href={`/artigos/${post.slug}`}
                className="flex items-center gap-2"
                prefetch={false}
                title={post.title}
              >
                <Heading as="h1" className="mb-8 text-5xl">
                  {post.title}
                </Heading>
              </Link>

              <div className="flex flex-wrap items-center gap-2 font-heading font-semibold text-primary-800/60 text-xs uppercase tracking-[0.15em] sm:gap-4 sm:text-sm">
                <div className="flex items-center gap-2">
                  <span>Por {post.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={post.date}>{formattedDate}</time>
                <span>•</span>
                <span>{post.readTime} de leitura</span>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-gray-700 text-xs capitalize sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className={articleBodyClassName}>
              <Content />
            </div>

            <div className="mx-auto mt-10 max-w-3xl px-2.5 sm:px-0">
              <AuthorCard {...authorInfo} />
            </div>

            <footer className="mx-auto mt-12 max-w-3xl border-t px-2.5 pt-8 sm:px-0">
              <Suspense
                fallback={<div className="mb-8 h-24 w-full animate-pulse rounded-lg bg-gray-100" />}
              >
                <ArticleMore slug={slug} />
              </Suspense>
              <div className="border-t pt-8" />
              <Button asChild variant="primary">
                <Link href="/artigos">← Voltar para lista de artigos</Link>
              </Button>
            </footer>
          </div>
        </article>
      </SectionContainer>
    </main>
  );
}
