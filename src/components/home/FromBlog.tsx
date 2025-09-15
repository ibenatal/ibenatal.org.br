import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/@types/posts';
import { getPosts } from '@/app/(site)/artigos/get-posts';
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

        <div className="flex flex-col gap-8 sm:flex-row">
          {posts.map((post, index) => (
            <ArticleCard
              key={post.slug}
              post={post}
              className={cn(
                'w-full md:w-1/2 lg:w-1/3',
                index === 2 && 'last-of-type:hidden lg:last-of-type:flex',
              )}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="primary">
            <Link href="/artigos">Ver mais artigos</Link>
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}

type ArticleCardProps = {
  post: Post;
  className?: string;
};

const ArticleCard = ({ post, className }: ArticleCardProps) => {
  const formattedDate = dateIsoToDDMMYYYY(post.date);

  // Full absolute URL for schema
  const fullImageUrl = new URL(
    post.image || '/images/articles/article-default.png',
    'https://ibenatal.org.br',
  ).toString();
  const fullUrl = new URL(
    post.slug ? `/artigos/${post.slug}` : '/artigos',
    'https://ibenatal.org.br',
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
        className="group relative block aspect-video w-full overflow-hidden rounded-lg"
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
      <div className="flex h-[5.25rem] flex-col gap-2">
        <Link href={`/artigos/${post.slug}`}>
          <h3 className="line-clamp-2 font-medium text-lg text-primary-800 transition-colors hover:text-primary-500 hover:underline">
            {post.title}
          </h3>
        </Link>
        <div className="flex flex-row gap-2">
          <time dateTime={post.date} className="text-sm">
            {formattedDate}
          </time>
          <span className="text-sm">
            por <span>{post.author.name}</span>
          </span>
        </div>
      </div>
      <p className="text-base">{post.description}</p>
      <div className="flex flex-row justify-end gap-2">
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
