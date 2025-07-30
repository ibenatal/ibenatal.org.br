import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { BlogPostSchema } from '@/lib/schema';
import type { Article } from '@/types/article';

// This would typically come from your CMS or API
async function getArticle(slug: string): Promise<Article> {
  // Mock data for now - replace with actual API call
  return {
    id: '1',
    slug,
    title: 'Using RichTextEditor in Your .NET MAUI Apps',
    description:
      'Learn how to create sections of a landing page in Blazor—navigation bar, hero section, customer logos section, features sections, pricing section and a form section.',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

      Getting Started
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Implementation
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

      Conclusion
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    image: '/images/articles/blog-header.png',
    author: {
      name: 'John Doe',
      avatar: '/images/authors/john-doe.png',
    },
    publishedAt: '2024-03-20',
    readingTime: '12 min read',
    tags: ['MAUI', '.NET', 'Development'],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  // Format the date for display
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'pt-BR',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );

  // Full URLs for schema
  const fullImageUrl = new URL(
    article.image,
    'https://ibenatal.org',
  ).toString();
  const fullUrl = new URL(
    `/artigos/${article.slug}`,
    'https://ibenatal.org',
  ).toString();

  // Format content paragraphs
  const paragraphs = article.content.split('\n\n').filter((p) => p.trim());

  return (
    <main className="bg-neutral-100">
      <SectionContainer className="relative pb-16 max-w-4xl lg:pt-8 lg:gap-8">
        <Image
          src={article.image}
          alt={article.title}
          width={1000}
          height={1000}
          className="w-full h-auto rounded-lg"
        />

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <BlogPostSchema
            headline={article.title}
            description={article.description}
            datePublished={article.publishedAt}
            author={article.author.name}
            image={fullImageUrl}
            url={fullUrl}
          />

          <div className="px-8 py-4 md:p-12 lg:py-8">
            <header className="max-w-3xl mx-auto mb-12">
              <Heading as="h1" className="mb-6">
                {article.title}
              </Heading>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  {article.author.avatar && (
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <span>por {article.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={article.publishedAt}>{formattedDate}</time>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(0, 20)}`}
                  className="leading-relaxed"
                >
                  {paragraph.trim()}
                </p>
              ))}
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
