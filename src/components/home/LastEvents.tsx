import Image from 'next/image';
import Link from 'next/link';
import { EventSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';
import { SectionDescription, SectionTitle } from './HomeTypography';

export default function LastEvents() {
  return (
    <section aria-label="Últimos Eventos">
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title="Próximos Eventos" />
          <SectionDescription description="Confira os próximos eventos da nossa igreja" />
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <EventCard
            className="w-full md:w-1/2"
            title="Um dia na roça"
            image="/images/eventos/um-dia-de-roca.png"
            date="2025-08-02"
            address="Avenida Adolfo Gordo - 1188, Cidade da esperança"
            description="Brincadeiras, brindes, comidas tipicas, quadrilhas malucas e sorteiro de balaio"
            url="/eventos/um-dia-de-roca"
          />
          <EventCard
            className="w-full md:w-1/2"
            title="Evento 2"
            image="/images/jovens.png"
            date="2024-01-01"
            address="Rua 2, 12345-678"
            description="Descrição do evento 2"
            url="/eventos/evento-2"
          />
        </div>
      </SectionContainer>
    </section>
  );
}

type EventCardProps = {
  title: string;
  image: string;
  date: string;
  address: string;
  description: string;
  url: string;
  className?: string;
};

const EventCard = ({
  title,
  image,
  date,
  address,
  description,
  url,
  className,
}: EventCardProps) => {
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const monthName = eventDate
    .toLocaleString('pt-BR', { month: 'long' })
    .slice(0, 3);

  // Full absolute URL for schema
  const fullImageUrl = new URL(image, 'https://ibenatal.org').toString();
  const fullUrl = new URL(url, 'https://ibenatal.org').toString();

  return (
    <article className={cn('flex flex-row gap-2 items-start', className)}>
      <EventSchema
        name={title}
        description={description}
        startDate={date}
        location={address}
        image={fullImageUrl}
        url={fullUrl}
      />
      <div className="flex flex-col gap-2 bg-white rounded-lg p-2">
        <time dateTime={date} className="flex flex-col">
          <span className="text-2xl font-bold text-primary text-center">
            {day}
          </span>
          <span className="text-sm bg-primary p-2 rounded-md text-white">
            {monthName}
          </span>
        </time>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="relative h-[192px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded object-cover"
          />
        </div>
        <h3 className="text-4xl font-bold text-primary">{title}</h3>
        <div className="flex flex-col gap-2 justify-start items-start">
          <p className="text-lg text-black/80">{description}</p>
          <address className="text-black/80 not-italic">{address}</address>
          <Button asChild outline variant="link" className="px-0">
            <Link
              href={url}
              className="text-primary hover:underline"
              aria-label={`Ver detalhes do evento ${title}`}
            >
              Ver detalhes
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};
