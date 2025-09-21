import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';
import { SectionDescription, SectionTitle } from './HomeTypography';

interface LiveTransmission {
  id: string;
  title: string;
  videoId: string;
  publishedAt: string;
}

// Function to get YouTube thumbnail URL from video ID
// Available qualities:
// maxresdefault.jpg (1920x1080)
// sddefault.jpg (640x480)
// hqdefault.jpg (480x360)
// mqdefault.jpg (320x180)
// default.jpg (120x90)
function getYouTubeThumbnail(
  videoId: string,
  quality: 'max' | 'sd' | 'hq' | 'mq' | 'default' = 'max',
) {
  const qualityMap = {
    max: 'maxresdefault',
    sd: 'sddefault',
    hq: 'hqdefault',
    mq: 'mqdefault',
    default: 'default',
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

function getYouTubeVideoUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

// This would typically come from an API or CMS
const MOCK_TRANSMISSIONS: LiveTransmission[] = [
  {
    id: '2',
    title: 'Culto de Domingo - 28/07/2025',
    videoId: '24B-oRQwwfg',
    publishedAt: '2025-07-28',
  },
  {
    id: '3',
    title: 'Culto de Domingo - 20/07/2025',
    videoId: 'IHhFgFXJQDY',
    publishedAt: '2025-07-20',
  },
  {
    id: '4',
    title: 'Culto de Domingo - 18/08/2025',
    videoId: 'nIQsOfelZyA',
    publishedAt: '2025-08-18',
  },
  {
    id: '5',
    title: 'Culto de Domingo - 24/08/2025',
    videoId: 'N6BPaytgUnU',
    publishedAt: '2025-08-24',
  },
  {
    id: '6',
    title: 'Culto de Domingo - 31/08/2025',
    videoId: 'hwY9Xb27Af8',
    publishedAt: '2025-08-31',
  },
  {
    id: '7',
    title: 'Culto de Domingo - 07/09/2025',
    videoId: 'JTgJMbWo6e8',
    publishedAt: '2025-09-07',
  },
  {
    id: '8',
    title: 'Culto de Domingo - 14/09/2025',
    videoId: 'GbwhbMLh0kQ',
    publishedAt: '2025-09-14',
  },
  {
    id: '9',
    title: 'Culto de Domingo - 21/09/2025',
    videoId: '6DPozmQkygI',
    publishedAt: '2025-09-21',
  },
];

const YOUTUBE_CHANNEL_STREAMS = 'https://www.youtube.com/c/FamíliaIBE/streams';

function TransmissionCard({
  transmission,
  className,
}: {
  className?: string;
  transmission: LiveTransmission;
}) {
  const thumbnailUrl = getYouTubeThumbnail(transmission.videoId);
  const videoUrl = getYouTubeVideoUrl(transmission.videoId);

  return (
    <article className={cn('flex flex-col gap-4', className)}>
      <Link
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-video w-full overflow-hidden rounded-lg"
      >
        <Image
          src={thumbnailUrl}
          alt={transmission.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </Link>
      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-2 font-semibold text-lg">
          {transmission.title}
        </h3>
        <time
          dateTime={transmission.publishedAt}
          className="text-primary-900/70 text-sm"
        >
          {new Date(
            `${transmission.publishedAt}T00:00:00-03:00`,
          ).toLocaleDateString('pt-BR')}
        </time>
      </div>
    </article>
  );
}

export default function LiveTransmissions() {
  const last3Transmissions = MOCK_TRANSMISSIONS.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  ).slice(0, 4);
  return (
    <section aria-label="Transmissões ao Vivo">
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title="Transmissões" />
          <SectionDescription description="Assista nossas últimas transmissões" />
        </header>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {last3Transmissions.map((transmission, index) => (
              <TransmissionCard
                key={transmission.id}
                transmission={transmission}
                className={cn(
                  // 'w-full md:w-1/2 lg:w-1/3',
                  index === 3 &&
                    'last-of-type:hidden sm:last-of-type:flex lg:last-of-type:hidden',
                )}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link
                href={YOUTUBE_CHANNEL_STREAMS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Ver todas as transmissões
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
