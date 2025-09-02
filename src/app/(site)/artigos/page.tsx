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

  if (!posts || posts.length === 0) {
    return (
      <main className="relative bg-neutral-100">
        <div className="absolute top-0 left-0 z-0 h-[500px] w-full bg-blue-500">
          <Image
            src="/images/articles/blog-header.png"
            alt="Blog"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/70"></div>
        </div>
        <SectionContainer className="relative z-10 pt-28">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl text-white">
              Reflexões e Artigos
            </h1>
            <p className="text-lg text-white">
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
    <main className="relative bg-neutral-100">
      <div className="absolute top-0 left-0 z-0 h-[500px] w-full bg-blue-500">
        <Image
          src="/images/articles/blog-header.png"
          alt="Blog"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/70"></div>
      </div>
      <SectionContainer className="relative z-10 pt-28">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-white">Reflexões e Artigos</h1>
          <p className="text-lg text-white">
            Confira as últimas notícias do nosso blog.
          </p>
          <Breadcrumbs items={[{ label: 'Artigos', href: '/Artigos' }]} />
        </div>
        <div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="2/3 w-full">
              <FeaturedArticle post={featuredPost} />
            </div>
            {!isMobile && (
              <div className="hidden w-1/3 lg:block">
                <Widget posts={remainingPosts} />
              </div>
            )}
          </div>
          <div>
            <h3 className="my-8 font-bold text-2xl">Últimos Artigos</h3>
            <div className="grid grid-cols-1 gap-8 rounded-lg md:grid-cols-2 lg:grid-cols-3">
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
