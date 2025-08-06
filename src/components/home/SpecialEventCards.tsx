import capitalize from 'lodash/capitalize';
import Image from 'next/image';
import { EventSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';

interface SpecialEvent {
  title: string;
  image: string;
  date: string;
  time: string;
  address: string;
  description: string;
  url: string;
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
  const fullImageUrl = new URL(image, 'https://ibenatal.org.br').toString();
  const fullUrl = new URL(url, 'https://ibenatal.org.br').toString();

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
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <div className="flex flex-col gap-2 justify-start items-start">
          <p className="text-base">{description}</p>
          <address className="not-italic">{address}</address>
        </div>
      </div>
    </article>
  );
};

interface SpecialEventCardsProps {
  events: SpecialEvent[];
}

export function SpecialEventCards({ events }: SpecialEventCardsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-12 sm:gap-8">
      {events.map((event) => (
        <EventCard
          key={`${event.title}-${event.date}`}
          className="w-full md:w-1/3"
          {...event}
        />
      ))}
    </div>
  );
}
