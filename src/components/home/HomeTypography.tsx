import { cn } from '@/lib/utils';

export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold text-center text-primary-700">
      {title}
    </h2>
  );
}

export function SectionDescription({ description }: { description: string }) {
  return (
    <p className="text-base sm:text-xl lg:text-2xl text-center leading-relaxed">
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
        'sm:text-2xl text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary-700 ',
        className,
      )}
    >
      {title}
    </h3>
  );
}

export function CardDescription({ description }: { description: string }) {
  return (
    <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
      {description}
    </p>
  );
}
