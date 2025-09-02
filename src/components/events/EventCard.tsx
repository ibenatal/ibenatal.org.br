interface EventCardProps {
  title: string;
  date: string;
  time: string;
}

export const EventCard = ({ title, date, time }: EventCardProps) => {
  return (
    <div className="flex flex-row gap-2 rounded-2xl bg-white px-3 py-3 shadow-2xl sm:w-1/2">
      <div className="flex shrink-0 flex-col">
        <div className="w-[60px] rounded-t-lg bg-primary-200 px-2 py-3 text-center text-primary-500 text-sm">
          {date}
        </div>
        <div className="rounded-b-lg bg-primary-500 px-2 py-1 text-center text-white text-xs">
          {time}
        </div>
      </div>
      <div className="flex min-w-0 flex-col">
        <div className="text-primary-500/80 text-xs">Programação</div>
        <div className="line-clamp-2 font-bold text-lg text-primary-500 leading-tight">
          {title}
        </div>
      </div>
    </div>
  );
};
