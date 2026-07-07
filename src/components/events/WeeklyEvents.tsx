'use client';

import { useEffect, useState } from 'react';
import { EventCard } from './EventCard';

interface WeeklyEvent {
  title: string;
  dayOfWeek: number;
  time: string;
}

const WEEKLY_EVENTS: WeeklyEvent[] = [
  {
    title: 'Culto de Oração',
    dayOfWeek: 3, // Wednesday
    time: '19:30',
  },
  {
    title: 'Culto de celebração dominical',
    dayOfWeek: 0, // Sunday
    time: '18:00',
  },
];

interface DisplayEvent {
  title: string;
  date: string;
  time: string;
}

function computeNextEvents(): DisplayEvent[] {
  try {
    const now = new Date();
    const timeZone = 'America/Fortaleza';
    const currentDate = new Date(now.toLocaleString('en-US', { timeZone }));
    const currentDay = currentDate.getDay();
    const currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();

    const eventsWithDates = WEEKLY_EVENTS.map((event) => {
      let daysUntilEvent = event.dayOfWeek - currentDay;
      if (daysUntilEvent < 0) {
        daysUntilEvent += 7;
      } else if (daysUntilEvent === 0) {
        const eventTime = Number.parseInt(event.time.replace(':', ''));
        if (currentTime >= eventTime) daysUntilEvent = 7;
      }

      const eventDate = new Date(currentDate);
      eventDate.setDate(currentDate.getDate() + daysUntilEvent);

      return {
        ...event,
        dateObj: eventDate,
      };
    });

    return eventsWithDates
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())
      .slice(0, 2)
      .map((event) => {
        const isToday = event.dateObj.toDateString() === currentDate.toDateString();
        return {
          title: event.title,
          date: isToday
            ? 'Hoje'
            : event.dateObj
                .toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                })
                .replace('.', '')
                .replace(' de ', ' '),
          time: event.time,
        };
      });
  } catch (error) {
    console.error('Error computing events:', error);
    return [];
  }
}

export function WeeklyEvents() {
  const [nextEvents, setNextEvents] = useState<DisplayEvent[]>([]);

  useEffect(() => {
    setNextEvents(computeNextEvents());
  }, []);

  return (
    <>
      {nextEvents.length === 0 ? (
        <>
          <div className="h-[92px] w-full animate-pulse rounded-2xl bg-slate-200"></div>
          <div className="h-[92px] w-full animate-pulse rounded-2xl bg-slate-200"></div>
        </>
      ) : (
        nextEvents.map((event) => (
          <EventCard
            key={`${event.title}-${event.date}`}
            title={event.title}
            date={event.date}
            time={event.time}
          />
        ))
      )}
    </>
  );
}
