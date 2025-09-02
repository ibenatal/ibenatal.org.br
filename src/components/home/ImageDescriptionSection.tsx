import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';
import { CardTitle, SectionDescription, SectionTitle } from './HomeTypography';
import { cn } from '@/lib/utils';

interface ImageDescriptionSectionProps {
  title: string;
  subtitle: string;
  personName: string;
  descriptions: string[];
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonUrl: string;
  buttonAriaLabel: string;
  imageClass?: string;
  contentClass?: string;
  layout?: 'left-to-right' | 'right-to-left';
}

export function ImageDescriptionSection({
  title,
  subtitle,
  personName,
  descriptions,
  imageUrl,
  imageAlt,
  buttonText,
  buttonUrl,
  buttonAriaLabel,
  contentClass,
  imageClass = 'h-[450px]',
  layout = 'left-to-right',
}: ImageDescriptionSectionProps) {
  const isReversed = layout === 'right-to-left';

  const contentSection = (
    <div className={cn('flex w-full flex-col gap-8 sm:w-5/12', contentClass)}>
      <CardTitle className="text-left">{personName}</CardTitle>
      <div className="flex flex-col gap-4">
        {descriptions.map((description, index) => (
          <p
            key={String(index)}
            className="text-sm leading-relaxed sm:text-base lg:text-lg"
          >
            {description}
          </p>
        ))}
      </div>
      <div className="flex justify-center sm:justify-start">
        <Button asChild outline>
          <Link href={buttonUrl} aria-label={buttonAriaLabel}>
            {buttonText}
          </Link>
        </Button>
      </div>
    </div>
  );

  const imageSection = (
    <div className={cn('relative w-full sm:w-7/12', imageClass)}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="rounded object-cover"
      />
    </div>
  );

  return (
    <section aria-label={title}>
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title={title} />
          <SectionDescription description={subtitle} />
        </header>

        <article className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          {isReversed ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </article>
      </SectionContainer>
    </section>
  );
}
