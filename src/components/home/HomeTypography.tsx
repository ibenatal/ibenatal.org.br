import { cn } from '@/lib/utils';

export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="md:text-6xl sm:text-4xl text-3xl font-bold text-center text-primary-700">
      {title}
    </h2>
  );
}

export function SectionDescription({ description }: { description: string }) {
  return (
    <p className="text-base sm:text-2xl text-center text-black/80 leading-relaxed">
      {description}
    </p>
  );
}

export function CardTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        'sm:text-4xl text-2xl font-bold text-center text-primary-700',
        className,
      )}
    >
      {title}
    </h3>
  );
}

export function CardDescription({ description }: { description: string }) {
  return (
    <p className="text-sm sm:text-xl text-black/80 leading-relaxed">
      {description}
    </p>
  );
}
