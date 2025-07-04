import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function LastEvents() {
  return (
    <section aria-label="Últimos Eventos">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 py-24">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold text-center text-primary">
            Últimos Eventos
          </h2>
          <p className="text-2xl text-center text-black/80">
            Confira os últimos eventos da nossa igreja.
          </p>
        </div>

        <div className="flex flex-row gap-8">
          <EventCard
            className="w-1/2"
            title="Evento 1"
            image="/images/jovens.png"
            date="2024-01-01"
            address="Rua 1, 12345-678"
            description="Descrição do evento 1"
          />
          <EventCard
            className="w-1/2"
            title="Evento 2"
            image="/images/jovens.png"
            date="2024-01-01"
            address="Rua 2, 12345-678"
            description="Descrição do evento 2"
          />
        </div>
      </div>
    </section>
  );
}

type EventCardProps = {
  title: string;
  image: string;
  date: string;
  address: string;
  description: string;
  className?: string;
};

const EventCard = ({
  title,
  image,
  date,
  address,
  description,
  className,
}: EventCardProps) => {
  const day = new Date(date).getDate();
  const monthName = new Date(date)
    .toLocaleString('pt-BR', { month: 'long' })
    .slice(0, 3);

  return (
    <div className={cn('flex flex-row gap-2 items-start', className)}>
      <div className="flex flex-col gap-2 bg-white rounded-lg p-2">
        <span className="text-2xl font-bold text-primary text-center">
          {day}
        </span>
        <span className="text-sm bg-primary p-2 rounded-md text-white">
          {monthName}
        </span>
      </div>
      <div className="flex flex-col gap-4 flex-1">
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
        <div className="flex flex-col gap-2">
          <p className="text-lg text-black/80">{description}</p>
          <span className="text-black/80">{address}</span>
        </div>
      </div>
    </div>
  );
};
