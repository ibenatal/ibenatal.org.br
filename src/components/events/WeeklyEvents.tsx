import 'server-only';

import { EventCard } from './EventCard';

interface WeeklyEvent {
  title: string;
  dayOfWeek: number;
  time: string;
}

const WEEKLY_EVENTS: WeeklyEvent[] = [
  {
    title: 'Culto de Fé',
    dayOfWeek: 3, // Wednesday
    time: '19:30',
  },
  {
    title: 'Culto de celebração dominical',
    dayOfWeek: 0, // Sunday
    time: '18:00',
  },
];

async function getNextEvents() {
  try {
    const now = new Date();
    const timeZone = 'America/Fortaleza';
    const currentDate = new Date(now.toLocaleString('en-US', { timeZone }));
    const currentDay = currentDate.getDay();
    const currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();

    const events = WEEKLY_EVENTS.map((event) => {
      let daysUntilEvent = event.dayOfWeek - currentDay;
      if (daysUntilEvent < 0) daysUntilEvent += 7;
      else if (daysUntilEvent === 0) {
        const eventTime = parseInt(event.time.replace(':', ''));
        if (currentTime >= eventTime) daysUntilEvent = 7;
      }

      const eventDate = new Date(currentDate);
      eventDate.setDate(currentDate.getDate() + daysUntilEvent);

      return {
        ...event,
        date: eventDate,
      };
    });

    return events
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 2)
      .map((event) => {
        const isToday =
          event.date.toDateString() === currentDate.toDateString();
        return {
          title: event.title,
          date: isToday
            ? 'Hoje'
            : event.date
                .toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                })
                .replace('.', '')
                .replace(' de ', ' '),
          time: event.time,
        };
      });
  } catch (err) {
    console.error('Error fetching events:', err);
    throw new Error(
      'Erro ao carregar eventos. Por favor, tente novamente mais tarde.',
    );
  }
}

export async function WeeklyEvents() {
  const nextEvents = await getNextEvents();

  return (
    <>
      {nextEvents.map((event) => (
        <EventCard
          key={`${event.title}-${event.date}`}
          title={event.title}
          date={event.date}
          time={event.time}
        />
      ))}
    </>
  );
}
