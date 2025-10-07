import Image from 'next/image';
import capitalize from 'lodash/capitalize';
import { EventSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';

export interface SpecialEvent {
  title: string;
  image: string;
  date: string;
  time: string;
  address: string;
  description: string;
}

type EventCardProperties = {
  title: string;
  image: string;
  date: string;
  time: string;
  address: string;
  description: string;
  url?: string;
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
}: EventCardProperties) => {
  const eventDate = new Date(`${date}T00:00:00-03:00`);
  const day = eventDate.getDate();
  const monthName = eventDate.toLocaleString('pt-BR', { month: 'long' }).slice(0, 3);

  // Full absolute URL for schema
  const fullImageUrl = new URL(image, 'https://ibenatal.org.br').toString();
  const fullUrl = url ? new URL(url, 'https://ibenatal.org.br').toString() : undefined;

  return (
    <article className={cn('relative flex flex-row items-start gap-2', className)}>
      <EventSchema
        name={title}
        description={description}
        startDate={date}
        location={address}
        image={fullImageUrl}
        url={fullUrl}
      />
      <div className="flex flex-col gap-2 rounded-lg bg-white p-2 shadow-2xs max-sm:absolute max-sm:top-2 max-sm:left-2 max-sm:z-10 max-sm:opacity-90">
        <time dateTime={date} className="flex flex-col">
          <span className="py-1 text-center text-base text-primary">
            {day} {capitalize(monthName)}
          </span>
          <span className="rounded-md bg-primary p-2 text-center text-sm text-white">{time}</span>
        </time>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="relative aspect-3/4 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded object-cover"
          />
        </div>
        <h3 className="font-bold text-2xl text-primary">{title}</h3>
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="text-sm lg:text-base">{description}</p>
          <address className="text-sm not-italic lg:text-base">{address}</address>
        </div>
      </div>
    </article>
  );
};

interface SpecialEventCardsProperties {
  events: SpecialEvent[];
}

export function SpecialEventCards({ events }: SpecialEventCardsProperties) {
  return (
    <div className="flex flex-col gap-12 sm:flex-row sm:gap-4">
      {events.map((event) => (
        <EventCard
          key={`${event.title}-${event.date}`}
          className="w-full sm:w-1/2 md:w-1/3"
          {...event}
        />
      ))}
    </div>
  );
}
