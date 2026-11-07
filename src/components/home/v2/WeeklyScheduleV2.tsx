'use client';

import { useEffect, useState } from 'react';
import { computeNextEvents, type DisplayEvent } from '@/components/events/WeeklyEvents';

/** Cards dos próximos cultos da semana. Calculado no navegador para usar a data atual. */
export function WeeklyScheduleV2() {
  const [events, setEvents] = useState<DisplayEvent[]>([]);

  useEffect(() => {
    setEvents(computeNextEvents());
  }, []);

  if (events.length === 0) {
    return (
      <>
        {[0, 1].map((index) => (
          <div key={index} className="h-[88px] w-full animate-pulse rounded-sm bg-white/60" />
        ))}
      </>
    );
  }

  return (
    <>
      {events.map((event) => (
        <div
          key={`${event.title}-${event.date}`}
          className="flex w-full items-center gap-4 rounded-sm bg-white p-3 shadow-2xl shadow-black/25"
        >
          <div className="flex w-16 shrink-0 flex-col overflow-hidden rounded-sm text-center">
            <span className="bg-secondary-100 px-2 py-2 font-bold font-heading text-quaternary-600 text-sm uppercase">
              {event.date}
            </span>
            <span className="bg-quaternary-500 px-2 py-1 font-heading font-semibold text-white text-xs">
              {event.time}
            </span>
          </div>
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="font-heading font-semibold text-primary-800/60 text-xs uppercase tracking-[0.15em]">
              Programação
            </span>
            <span className="line-clamp-2 font-bold font-heading text-lg text-primary-800 leading-tight">
              {event.title}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
