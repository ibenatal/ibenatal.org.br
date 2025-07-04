import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export default function FromBlog() {
  return (
    <section aria-label="Nossas Pregações">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 py-24">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold text-center text-primary">
            Do blog
          </h2>
          <p className="text-2xl text-center text-black/80">
            Confira as últimas notícias do nosso blog.
          </p>
        </div>

        <div className="flex flex-row gap-8">
          <ArticleCard
            title="Article 1"
            image="/images/jovens.png"
            date="2024-01-01"
            author="John Doe"
            shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="w-1/3"
          />
          <ArticleCard
            title="Article 1"
            image="/images/jovens.png"
            date="2024-01-01"
            author="John Doe"
            shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="w-1/3"
          />
          <ArticleCard
            title="Article 1"
            image="/images/jovens.png"
            date="2024-01-01"
            author="John Doe"
            shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="w-1/3"
          />
        </div>
      </div>
    </section>
  );
}

type ArticleCardProps = {
  title: string;
  image: string;
  date: string;
  author: string;
  shortDescription: string;
  className?: string;
};

const ArticleCard = ({
  title,
  image,
  date,
  author,
  shortDescription,
  className,
}: ArticleCardProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative h-[192px] w-full">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
        />
      </div>
      <h3 className="text-4xl font-bold text-primary">{title}</h3>
      <div className="flex flex-row gap-2">
        <span className="text-sm text-black/80">{date}</span>
        <span className="text-sm text-black/80">{author}</span>
      </div>
      <p className="text-lg text-black/80">{shortDescription}</p>
      <div className="flex flex-row gap-2">
        <Button>Ver mais</Button>
      </div>
    </div>
  );
};
