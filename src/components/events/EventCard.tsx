interface EventCardProps {
  title: string;
  date: string;
  time: string;
}

export const EventCard = ({ title, date, time }: EventCardProps) => {
  return (
    <div className="flex flex-row gap-2 bg-white rounded-2xl px-3 py-3 sm:w-1/2 shadow-2xl">
      <div className="flex flex-col shrink-0">
        <div className="text-sm bg-primary-200 text-primary-500 text-center px-2 py-3 rounded-t-lg">
          {date}
        </div>
        <div className="text-xs bg-primary-500 text-center text-white px-2 py-1 rounded-b-lg">
          {time}
        </div>
      </div>
      <div className="flex flex-col min-w-0">
        <div className="text-xs text-primary-500/80">Programação</div>
        <div className="text-lg font-bold text-primary-500 leading-tight line-clamp-2">
          {title}
        </div>
      </div>
    </div>
  );
};
