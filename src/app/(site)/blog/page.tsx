import Image from 'next/image';
import Link from 'next/link';
import { FeaturedArticle } from '@/components/blog/FeaturedArticle';
import { Widget } from '@/components/blog/Widget';
import { SectionContainer } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <main className="bg-neutral-100 relative">
      <div className="bg-blue-500 h-[500px] absolute top-0 left-0 w-full z-0">
        <Image
          src="/images/articles/blog-header.png"
          alt="Blog"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>
      <SectionContainer className="relative z-10 pt-28">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl font-bold">Reflexões e Artigos</h1>
          <p className="text-white text-lg">
            Confira as últimas notícias do nosso blog.
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full 2/3">
              <FeaturedArticle />
            </div>
            <div className="w-1/3">
              <Widget />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold my-8">Ultimos Artigos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  rounded-lg">
              <CartArticle />
              <CartArticle />
              <CartArticle />
              <CartArticle />
              <CartArticle />
              <CartArticle />
              <CartArticle />
              <CartArticle />
              <CartArticle />
            </div>
            <Pagination />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}

function Pagination() {
  return (
    <div className="flex flex-row gap-4 relative justify-between py-10">
      <Button variant="primary" outline className="self-end">
        Anterior
      </Button>

      <div className="flex flex-row gap-4">
        <Button variant="primary" disabled>
          1
        </Button>
        <Button variant="primary" outline>
          2
        </Button>
        <Button variant="primary" outline>
          3
        </Button>
        <Button variant="primary" outline>
          4
        </Button>
        <Button variant="primary" outline>
          5
        </Button>
      </div>

      <Button variant="primary" outline className="self-end">
        Próxima
      </Button>
    </div>
  );
}

function CartArticle() {
  return (
    <Link href="/blog/using-richtexteditor-in-net-maui-apps" className="block">
      <div className="flex flex-col gap-4 h-full bg-white rounded-lg hover:shadow-lg transition-shadow">
        <div className="relative w-full pt-[60%]">
          <Image
            src="/images/articles/blog-header.png"
            alt="Blog"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 px-4 pt-4 pb-8">
          <h3 className="text-xl font-medium line-clamp-2">
            Using RichTextEditor in Your .NET MAUI Apps
          </h3>
          <p className="text-gray-600 line-clamp-3">
            Learn how to create sections of a landing page in Blazor—navigation
            bar, hero section, customer logos section, features sections,
            pricing section and a form section.
          </p>
          <div className="flex flex-row gap-4 text-sm text-gray-500">
            <span>by John Doe</span>
            <span>•</span>
            <span>12/12/2021</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
