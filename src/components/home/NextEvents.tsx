import 'server-only';
import { Suspense } from 'react';
import { locationInfo } from '@/data/contacts';
import { SectionContainer } from '../layout/Container';
import { SectionDescription, SectionTitle } from './HomeTypography';
import { Separator } from './Separator';
import { SpecialEventCards } from './SpecialEventCards';

interface SpecialEvent {
  title: string;
  image: string;
  date: string;
  time: string;
  address: string;
  description: string;
  url: string;
}

const SPECIAL_EVENTS: SpecialEvent[] = [
  {
    title: 'Bazar',
    image: '/images/eventos/bazar-2.png',
    date: '2025-08-16',
    time: '08:00',
    address: locationInfo.getFullAddress(),
    description: 'Rede de Mulheres: Bazar',
    url: '/eventos/evento-2',
  },
  {
    title: 'Retiro de Casais 2025',
    image: '/images/eventos/retiro-de-casais.jpg',
    date: '2025-10-31',
    time: '08:00',
    address: locationInfo.getFullAddress(),
    description:
      'Um final de semana especial para fortalecer laços, crescer em fé e viver momentos inesquecíveis. De 31 de outubro a 02 de novembro no Hotel Marista, com palestras, dinâmicas, noites temáticas e todas as refeições inclusas. Participe!',
    url: '/eventos/evento-2',
  },
  {
    title: 'Um dia na roça',
    image: '/images/eventos/um-dia-de-roca.png',
    date: '2025-08-02',
    time: '10:00',
    address: locationInfo.getFullAddress(),
    description:
      'Brincadeiras, brindes, comidas tipicas, quadrilhas malucas e sorteiro de balaio',
    url: '/eventos/um-dia-de-roca',
  },
];

function LoadingEventCards() {
  return (
    <div className="flex flex-col md:flex-row gap-12 sm:gap-8">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="w-full md:w-1/3 flex flex-row gap-2 items-start relative animate-pulse"
        >
          <div className="flex flex-col gap-2 bg-slate-200 rounded-lg p-2 h-[72px] w-[72px]" />
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative aspect-3/4 w-full bg-slate-200 rounded" />
            <div className="h-8 bg-slate-200 rounded w-3/4" />
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function getUpcomingEvents() {
  try {
    const now = new Date();
    const timeZone = 'America/Fortaleza';
    const currentDate = new Date(now.toLocaleString('en-US', { timeZone }));

    // Filter and sort events
    const upcomingEvents = SPECIAL_EVENTS.filter((event) => {
      const eventDate = new Date(`${event.date}T${event.time}:00-03:00`);
      return eventDate >= currentDate;
    })
      .sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}:00-03:00`);
        const dateB = new Date(`${b.date}T${b.time}:00-03:00`);
        return dateA.getTime() - dateB.getTime();
      })
      .slice(0, 3); // Get next 3 upcoming events

    return upcomingEvents;
  } catch (err) {
    console.error('Error fetching special events:', err);
    throw new Error(
      'Erro ao carregar eventos especiais. Por favor, tente novamente mais tarde.',
    );
  }
}

export default async function NextEvents() {
  const upcomingEvents = await getUpcomingEvents();

  // Don't render the section if there are no upcoming events
  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <>
      <section aria-label="Próximos Eventos">
        <SectionContainer>
          <header className="flex flex-col gap-8">
            <SectionTitle title="Próximos Eventos" />
            <SectionDescription description="Confira os próximos eventos da nossa igreja" />
          </header>

          <Suspense fallback={<LoadingEventCards />}>
            <SpecialEventCards events={upcomingEvents} />
          </Suspense>
        </SectionContainer>
      </section>
      <Separator />
    </>
  );
}
