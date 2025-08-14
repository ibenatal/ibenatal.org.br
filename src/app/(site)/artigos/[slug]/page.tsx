import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { BlogPostSchema } from '@/lib/schema';
import { getPost } from '../get-post';
import { getSlugs } from '../get-slugs';
import { ArrowLeftIcon } from 'lucide-react';

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

  const imageUrl = new URL(
    post.image || '/images/articles/article-default.png',
    'https://ibenatal.org.br',
  ).toString();

  const pageUrl = new URL(
    `/artigos/${slug}`,
    'https://ibenatal.org.br',
  ).toString();

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
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Get post metadata
  const post = await getPost(slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  // Dynamically import the MDX content
  const { default: Content } = await import(`../content/${slug}.mdx`);

  // Format the date for display
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Full URLs for schema
  const fullImageUrl = new URL(
    post.image || '/images/articles/article-default.png',
    'https://ibenatal.org.br',
  ).toString();

  const fullUrl = new URL(
    `/artigos/${slug}`,
    'https://ibenatal.org.br',
  ).toString();

  return (
    <main className="bg-neutral-100">
      <SectionContainer className="relative pb-16 max-w-4xl lg:pt-8 lg:gap-8">
        <div className="relative aspect-video">
          <Image
            src={post.image || '/images/articles/article-default.png'}
            alt={post.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <BlogPostSchema
            headline={post.title}
            description={post.description}
            datePublished={post.date}
            author={post.author}
            image={fullImageUrl}
            url={fullUrl}
          />

          <div className="px-8 py-8 md:p-12 lg:py-12">
            <header className="max-w-3xl mx-auto mb-12">
              <Link href={`/artigos/${post.slug}`} className="flex items-center gap-2" prefetch={false} title={post.title}>
                <Heading as="h1" className="mb-8 text-5xl">
                  {post.title}
                </Heading>
              </Link>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>Por {post.author}</span>
                </div>
                <span>•</span>
                <time dateTime={post.date}>{formattedDate}</time>
                <span>•</span>
                <span>{post.readTime} min de leitura</span>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="max-w-3xl mx-auto prose prose-lg prose-primary gap-6 flex flex-col">
              <Content />
            </div>

            <footer className="max-w-3xl mx-auto mt-12 pt-8 border-t">
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
