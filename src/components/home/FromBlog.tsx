import Image from 'next/image';
import Link from 'next/link';
import { getPosts, type Post } from '@/app/(site)/artigos/get-posts';
import { BlogPostSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';
import { SectionDescription, SectionTitle } from './HomeTypography';

export default async function FromBlog() {
  const posts = await getPosts({ limit: 3 });

  return (
    <section aria-label="Reflexões e Artigos">
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title="Reflexões e Artigos" />
          <SectionDescription description="Confira as últimas notícias do nosso blog." />
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {posts.map((post, index) => (
            <ArticleCard
              key={post.slug}
              post={post}
              // title={post.title}
              // image={post.image || '/images/jovens.png'}
              // date={post.date}
              // author={post.author}
              // shortDescription={post.description}
              // url={`/artigos/${post.slug}`}
              className={cn(
                'w-full md:w-1/2 lg:w-1/3',
                index === 2 && 'last-of-type:hidden lg:last-of-type:flex',
              )}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

type ArticleCardProps = {
  post: Post;
  // title: string;
  // image: string;
  // date: string;
  // author: string;
  // shortDescription: string;
  // url: string;
  className?: string;
};

const ArticleCard = ({
  // title,
  // image,
  // date,
  // author,
  // shortDescription,
  // url,
  post,
  className,
}: ArticleCardProps) => {
  const formattedDate = dateIsoToDDMMYYYY(post.date);

  // Full absolute URL for schema
  const fullImageUrl = new URL(
    post.image || '/images/articles/article-default.png',
    'https://ibenatal.org',
  ).toString();
  const fullUrl = new URL(
    post.slug ? `/artigos/${post.slug}` : '/artigos',
    'https://ibenatal.org',
  ).toString();

  return (
    <article className={cn('flex flex-col gap-4', className)}>
      <BlogPostSchema
        headline={post.title}
        description={post.description}
        datePublished={post.date}
        author={post.author}
        image={fullImageUrl}
        url={fullUrl}
      />
      <Link
        href={`/artigos/${post.slug}`}
        className="group relative w-full aspect-video block overflow-hidden rounded-lg"
        aria-label={`Ler mais sobre ${post.title}`}
        title={`Ler mais sobre ${post.title}`}
      >
        <Image
          src={post.image || '/images/articles/article-default.png'}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </Link>
      <div className="flex flex-col gap-2 h-[5.25rem]">
        <Link href={`/artigos/${post.slug}`}>
          <h3 className="text-lg font-medium text-primary-800 hover:text-primary-500 hover:underline transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <div className="flex flex-row gap-2">
          <time dateTime={post.date} className="text-sm">
            {formattedDate}
          </time>
          <span className="text-sm">
            por <span>{post.author}</span>
          </span>
        </div>
      </div>
      <p className="text-base">{post.description}</p>
      <div className="flex flex-row gap-2 justify-end">
        <Button asChild outline variant="link" className="px-0">
          <Link
            href={`/artigos/${post.slug}`}
            aria-label={`Ler mais sobre ${post.title}`}
          >
            Ver mais
          </Link>
        </Button>
      </div>
    </article>
  );
};
