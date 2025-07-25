import Image from 'next/image';
import Link from 'next/link';
import { VideoSchema } from '@/lib/schema';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';
import { CardTitle, SectionDescription, SectionTitle } from './HomeTypography';

export default function OurSermon() {
  const sermonTitle = 'Heading Title for Sermon Series';
  const sermonDate = '2024-08-01';
  const preacher = 'Rev. Celso';
  const thumbnailUrl = '/images/jovens.png';
  const sermonUrl = '/sermoes/heading-title-for-sermon-series';

  // Full absolute URLs for schema
  const fullThumbnailUrl = new URL(
    thumbnailUrl,
    'https://ibenatal.org',
  ).toString();
  const _fullSermonUrl = new URL(sermonUrl, 'https://ibenatal.org').toString();
  const videoUrl = new URL(
    '/videos/sermon-video.mp4',
    'https://ibenatal.org',
  ).toString();

  return (
    <section aria-label="Nossas Pregações">
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title="Reflexões" />
          <SectionDescription description="Confira as últimas reflexões" />
        </header>

        <article className="flex flex-col gap-6 sm:gap-8 sm:flex-row">
          <VideoSchema
            name={sermonTitle}
            description="Sermão da série sobre o livro de Romanos"
            thumbnailUrl={fullThumbnailUrl}
            uploadDate={sermonDate}
            contentUrl={videoUrl}
            author={preacher}
          />
          <div className="relative h-[192px] w-full sm:w-1/2">
            <Image
              src={thumbnailUrl}
              alt={sermonTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded object-cover"
            />
          </div>
          <div className="flex flex-col gap-8 w-full sm:w-1/2">
            <CardTitle title={sermonTitle} className="text-left" />
            <div className="flex flex-row gap-8">
              <time dateTime={sermonDate} className="text-sm">
                August 2024
              </time>
              <span className="text-sm">Preleitor: {preacher}</span>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Button asChild outline>
                <Link
                  href={sermonUrl}
                  aria-label={`Ver mais sobre a pregação ${sermonTitle}`}
                >
                  Ver mais
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </SectionContainer>
    </section>
  );
}
