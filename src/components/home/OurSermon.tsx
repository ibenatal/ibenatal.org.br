import Image from 'next/image';
import Link from 'next/link';
import { VideoSchema } from '@/lib/schema';
import { Button } from '../ui/button';

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
      <div className="max-w-6xl mx-auto flex flex-col gap-16 py-24">
        <header className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold text-center text-primary">
            Nossas Pregações
          </h2>
          <p className="text-2xl text-center text-black/80">
            Confira as últimas pregações da nossa igreja.
          </p>
        </header>

        <article className="flex flex-row gap-8">
          <VideoSchema
            name={sermonTitle}
            description="Sermão da série sobre o livro de Romanos"
            thumbnailUrl={fullThumbnailUrl}
            uploadDate={sermonDate}
            contentUrl={videoUrl}
            author={preacher}
          />
          <div className="relative h-[192px] w-1/2">
            <Image
              src={thumbnailUrl}
              alt={sermonTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded object-cover"
            />
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <h3 className="text-4xl font-semibold text-primary">
              {sermonTitle}
            </h3>
            <div className="flex flex-row gap-8">
              <time dateTime={sermonDate} className="text-sm text-black/80">
                August 2024
              </time>
              <span className="text-sm text-black/80">
                Preleitor: {preacher}
              </span>
            </div>
            <div>
              <Button asChild>
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
      </div>
    </section>
  );
}
