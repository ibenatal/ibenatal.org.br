import { EventCard } from '@/components/home/GetInTouch';

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

export function WeeklyEvents() {
  const getNextEvents = () => {
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
      .map((event) => ({
        title: event.title,
        date: event.date
          .toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
          })
          .replace('.', '')
          .replace(' de ', ' '),
        time: event.time,
      }));
  };

  const nextEvents = getNextEvents();

  return (
    <div className="flex gap-8 sm:gap-12 sm:absolute sm:-bottom-12 md:-bottom-10 right-0 w-full sm:px-8 flex-col sm:flex-row mt-10 sm:mt-0">
      {nextEvents.map((event) => (
        <EventCard
          key={`${event.title}-${event.date}`}
          title={event.title}
          date={event.date}
          time={event.time}
        />
      ))}
    </div>
  );
}
