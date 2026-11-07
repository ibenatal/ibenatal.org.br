import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import {
  getYouTubeThumbnail,
  getYouTubeVideoUrl,
  type LiveTransmission,
  MOCK_TRANSMISSIONS,
  YOUTUBE_CHANNEL_STREAMS,
} from '@/components/home/LiveTransmissions';
import { SectionContainer } from '../../layout/Container';
import { ActionLink } from './ActionLink';
import { Eyebrow } from './Eyebrow';

function formatDate(date: string) {
  return new Date(`${date}T00:00:00-03:00`).toLocaleDateString('pt-BR');
}

/** Versão compacta: cabeçalho em uma linha e os 3 últimos vídeos lado a lado. */
export default function LiveTransmissionsV2() {
  const latest = [...MOCK_TRANSMISSIONS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section aria-label="Transmissões ao Vivo" className="bg-primary-600 text-white">
      <SectionContainer className="gap-8 py-12 sm:py-16 lg:gap-10">
        <header className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <Eyebrow className="text-secondary-300">No YouTube</Eyebrow>
            <h2 className="font-bold text-4xl leading-tight sm:text-5xl">
              Nossas <span className="text-secondary-300">transmissões</span>
            </h2>
          </div>
          <ActionLink
            href={YOUTUBE_CHANNEL_STREAMS}
            external
            variant="outline-light"
            className="hidden sm:inline-flex"
          >
            Ver todas <ArrowRight />
          </ActionLink>
        </header>

        {/* Mobile: carrossel de arrastar; a partir do tablet: 3 colunas. */}
        <ul className="-mx-3 flex snap-x snap-mandatory scroll-px-3 gap-4 overflow-x-auto px-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
          {latest.map((transmission) => (
            <li key={transmission.id} className="w-[80%] shrink-0 snap-start sm:w-auto">
              <VideoCard transmission={transmission} />
            </li>
          ))}
        </ul>

        <ActionLink
          href={YOUTUBE_CHANNEL_STREAMS}
          external
          variant="outline-light"
          className="sm:hidden"
        >
          Ver todas as transmissões <ArrowRight />
        </ActionLink>
      </SectionContainer>
    </section>
  );
}

function VideoCard({ transmission }: { transmission: LiveTransmission }) {
  const date = formatDate(transmission.publishedAt);
  return (
    <Link
      href={getYouTubeVideoUrl(transmission.videoId)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Assistir ${transmission.title} de ${date}`}
      className="group flex flex-col gap-3"
    >
      <div className="relative aspect-video overflow-hidden rounded-sm shadow-black/40 shadow-xl">
        <Image
          src={getYouTubeThumbnail(transmission.videoId)}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 80vw"
          className="object-cover"
        />
        <span className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-sm bg-quaternary-500 text-white shadow-lg transition group-hover:scale-110">
          <Play className="size-5 fill-current" />
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="font-heading font-semibold text-secondary-300 text-xs uppercase tracking-[0.15em]">
          {date}
        </span>
        <h3 className="font-bold text-lg leading-tight transition-colors group-hover:text-secondary-200">
          {transmission.title}
        </h3>
      </div>
    </Link>
  );
}
