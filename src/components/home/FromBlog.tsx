import Image from 'next/image';
import Link from 'next/link';
import { BlogPostSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';
import { SectionDescription, SectionTitle } from './HomeTypography';

export default function FromBlog() {
  return (
    <section aria-label="Reflexões e Artigos">
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title="Reflexões e Artigos" />
          <SectionDescription description="Confira as últimas notícias do nosso blog." />
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <ArticleCard
            title="Article 1"
            image="/images/jovens.png"
            date="2024-01-01"
            author="John Doe"
            shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            url="/blog/article-1"
            className="w-full md:w-1/2 lg:w-1/3"
          />
          <ArticleCard
            title="Article 2"
            image="/images/jovens.png"
            date="2024-01-01"
            author="John Doe"
            shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            url="/blog/article-2"
            className="w-full md:w-1/2 lg:w-1/3"
          />
          <ArticleCard
            title="Article 3"
            image="/images/jovens.png"
            date="2024-01-01"
            author="John Doe"
            shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            url="/blog/article-3"
            className="w-full md:w-1/2 lg:w-1/3 last-of-type:hidden lg:last-of-type:block"
          />
        </div>
      </SectionContainer>
    </section>
  );
}

type ArticleCardProps = {
  title: string;
  image: string;
  date: string;
  author: string;
  shortDescription: string;
  url: string;
  className?: string;
};

const ArticleCard = ({
  title,
  image,
  date,
  author,
  shortDescription,
  url,
  className,
}: ArticleCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Full absolute URL for schema
  const fullImageUrl = new URL(image, 'https://ibenatal.org').toString();
  const fullUrl = new URL(url, 'https://ibenatal.org').toString();

  return (
    <article className={cn('flex flex-col gap-2', className)}>
      <BlogPostSchema
        headline={title}
        description={shortDescription}
        datePublished={date}
        author={author}
        image={fullImageUrl}
        url={fullUrl}
      />
      <div className="relative h-[192px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded object-cover"
        />
      </div>
      <h3 className="text-4xl font-bold text-primary">{title}</h3>
      <div className="flex flex-row gap-2">
        <time dateTime={date} className="text-sm text-black/80">
          {formattedDate}
        </time>
        <span className="text-sm text-black/80">
          por <span>{author}</span>
        </span>
      </div>
      <p className="text-lg text-black/80">{shortDescription}</p>
      <div className="flex flex-row gap-2">
        <Button asChild outline variant="link" className="px-0">
          <Link href={url} aria-label={`Ler mais sobre ${title}`}>
            Ver mais
          </Link>
        </Button>
      </div>
    </article>
  );
};
