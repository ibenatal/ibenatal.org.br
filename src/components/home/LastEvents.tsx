import capitalize from 'lodash/capitalize';
import Image from 'next/image';
import { locationInfo } from '@/data/contacts';
import { EventSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../layout/Container';
import { SectionDescription, SectionTitle } from './HomeTypography';

export default function LastEvents() {
  return (
    <section aria-label="Últimos Eventos">
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title="Próximos Eventos" />
          <SectionDescription description="Confira os próximos eventos da nossa igreja" />
        </header>

        <div className="flex flex-col md:flex-row gap-12 sm:gap-8">
          <EventCard
            className="w-full md:w-1/3"
            title="Bazar"
            image="/images/eventos/bazar.png"
            date="2025-08-01"
            time="08:00"
            address={locationInfo.getFullAddress()}
            description="Rede de Mulhores: Bazar"
            url="/eventos/evento-2"
          />
          <EventCard
            className="w-full md:w-1/3"
            title="Mutirão com Feijoada"
            image="/images/eventos/multirao.png"
            date="2024-08-02"
            time="08:00"
            address={locationInfo.getFullAddress()}
            description="A Rede de Homens da Igreja Batista da Esperança convida todos para um mutirão de limpeza"
            url="/eventos/evento-2"
          />
          <EventCard
            className="w-full md:w-1/3"
            title="Um dia na roça"
            image="/images/eventos/um-dia-de-roca.png"
            date="2025-08-02"
            time="10:00"
            address={locationInfo.getFullAddress()}
            description="Brincadeiras, brindes, comidas tipicas, quadrilhas malucas e sorteiro de balaio"
            url="/eventos/um-dia-de-roca"
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
  time: string;
  address: string;
  description: string;
  url: string;
  className?: string;
};

const EventCard = ({
  title,
  image,
  date,
  time,
  address,
  description,
  url,
  className,
}: EventCardProps) => {
  const eventDate = new Date(`${date}T00:00:00-03:00`);
  const day = eventDate.getDate();
  const monthName = eventDate
    .toLocaleString('pt-BR', { month: 'long' })
    .slice(0, 3);

  // Full absolute URL for schema
  const fullImageUrl = new URL(image, 'https://ibenatal.org').toString();
  const fullUrl = new URL(url, 'https://ibenatal.org').toString();

  return (
    <article
      className={cn('flex flex-row gap-2 items-start relative', className)}
    >
      <EventSchema
        name={title}
        description={description}
        startDate={date}
        location={address}
        image={fullImageUrl}
        url={fullUrl}
      />
      <div className="flex flex-col gap-2 bg-white rounded-lg p-2 max-sm:absolute max-sm:top-2 max-sm:left-2 max-sm:z-10 shadow-2xs max-sm:opacity-90">
        <time dateTime={date} className="flex flex-col">
          <span className="text-base text-primary text-center py-1">
            {day} {capitalize(monthName)}
          </span>
          <span className="text-sm bg-primary p-2 rounded-md text-white text-center">
            {time}
          </span>
        </time>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="relative aspect-3/4 w-full">
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
          <p className="text-lg">{description}</p>
          <address className="not-italic">{address}</address>
          {/* <Button asChild outline variant="link" className="px-0">
            <Link
              href={url}
              className="text-primary hover:underline"
              aria-label={`Ver detalhes do evento ${title}`}
            >
              Ver detalhes
            </Link>
          </Button> */}
        </div>
      </div>
    </article>
  );
};
