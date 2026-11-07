import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Post } from '@/@types/posts';
import { getPosts } from '@/app/(site)/artigos/get-posts';
import { BlogPostSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { dateIsoToDDMMYYYY } from '@/utils/datetime';
import { SectionContainer } from '../../layout/Container';
import { ActionLink } from './ActionLink';
import { SectionHeader } from './SectionHeader';

const SITE_URL = 'https://ibenatal.org.br';
const DEFAULT_IMAGE = '/images/articles/article-default.png';

export default async function FromBlogV2() {
  const posts = await getPosts({ limit: 3 });

  return (
    <section aria-label="Reflexões e Artigos">
      <SectionContainer className="gap-10 lg:gap-14">
        <SectionHeader
          eyebrow="Blog"
          title="Reflexões e"
          accent="artigos"
          description="Confira as últimas reflexões publicadas no nosso blog."
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {posts.map((post, index) => (
            <ArticleCard
              key={post.slug}
              post={post}
              className={cn(index === 2 && 'md:hidden lg:flex')}
            />
          ))}
        </div>

        <ActionLink href="/artigos" variant="outline-dark" className="self-center">
          Ver todos os artigos <ArrowRight />
        </ActionLink>
      </SectionContainer>
    </section>
  );
}

function ArticleCard({ post, className }: { post: Post; className?: string }) {
  const href = `/artigos/${post.slug}`;
  const image = post.image || DEFAULT_IMAGE;

  return (
    <article className={cn('reveal group flex flex-col gap-4', className)}>
      <BlogPostSchema
        headline={post.title}
        description={post.description}
        datePublished={post.date}
        author={post.author}
        image={new URL(image, SITE_URL).toString()}
        url={new URL(href, SITE_URL).toString()}
      />
      <Link
        href={href}
        aria-label={`Ler ${post.title}`}
        className="relative block aspect-video overflow-hidden rounded-sm shadow-lg shadow-primary-900/10"
      >
        <Image
          src={image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <p className="font-heading font-semibold text-primary-800/60 text-xs uppercase tracking-[0.15em]">
          <time dateTime={post.date}>{dateIsoToDDMMYYYY(post.date)}</time> · {post.author.name}
        </p>
        <h3 className="line-clamp-2 font-bold text-2xl text-primary-800 leading-tight">
          <Link href={href} className="transition-colors hover:text-quaternary-500">
            {post.title}
          </Link>
        </h3>
      </div>
      <p className="line-clamp-3 text-base text-primary-800/75 leading-relaxed">
        {post.description}
      </p>
      <Link
        href={href}
        aria-label={`Ler ${post.title}`}
        className="mt-auto flex w-fit items-center gap-2 font-heading font-semibold text-quaternary-500 hover:text-quaternary-600"
      >
        Ler artigo <ArrowRight className="size-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
