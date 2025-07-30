import Image from 'next/image';
import { ArticleCard } from '@/components/artigos/ArticleCard';
import { FeaturedArticle } from '@/components/artigos/FeaturedArticle';
import { Widget } from '@/components/artigos/Widget';
import { SectionContainer } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { isMobileDevice } from '@/utils/deviceDetection';
import { getPosts } from './get-posts';

export const metadata = {
  title: 'Reflexões e Artigos',
  description: 'Confira as últimas notícias do nosso blog.',
};

export default async function BlogPage() {
  const isMobile = await isMobileDevice();
  const posts = await getPosts({ limit: 10 });
  console.log({ posts });

  if (!posts || posts.length === 0) {
    return (
      <main className="bg-neutral-100 relative">
        <div className="bg-blue-500 h-[500px] absolute top-0 left-0 w-full z-0">
          <Image
            src="/images/articles/blog-header.png"
            alt="Blog"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        </div>
        <SectionContainer className="relative z-10 pt-28">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-bold">
              Reflexões e Artigos
            </h1>
            <p className="text-white text-lg">
              Nenhum artigo encontrado no momento.
            </p>
            <Breadcrumbs items={[{ label: 'Artigos', href: '/Artigos' }]} />
          </div>
        </SectionContainer>
      </main>
    );
  }

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="bg-neutral-100 relative">
      <div className="bg-blue-500 h-[500px] absolute top-0 left-0 w-full z-0">
        <Image
          src="/images/articles/blog-header.png"
          alt="Blog"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      </div>
      <SectionContainer className="relative z-10 pt-28">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl font-bold">Reflexões e Artigos</h1>
          <p className="text-white text-lg">
            Confira as últimas notícias do nosso blog.
          </p>
          <Breadcrumbs items={[{ label: 'Artigos', href: '/Artigos' }]} />
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full 2/3">
              <FeaturedArticle post={featuredPost} />
            </div>
            {!isMobile && (
              <div className="w-1/3 hidden lg:block">
                <Widget posts={remainingPosts} />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold my-8">Ultimos Artigos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
              {remainingPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
            {/* <Pagination /> */}
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
