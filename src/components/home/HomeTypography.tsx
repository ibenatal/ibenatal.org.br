import { cn } from '@/lib/utils';

export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-center font-bold text-3xl text-primary-700 sm:text-4xl md:text-5xl lg:text-6xl">
      {title}
    </h2>
  );
}

export function SectionDescription({ description }: { description: string }) {
  return (
    <p className="text-center text-base leading-relaxed sm:text-xl lg:text-2xl">
      {description}
    </p>
  );
}

export function CardTitle({
  title,
  children,
  className,
}: {
  /**
   * @deprecated Use children instead
   */
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        'text-center font-bold text-2xl text-primary-700 sm:text-2xl md:text-3xl lg:text-4xl ',
        className,
      )}
    >
      {title || children}
    </h3>
  );
}

export function CardDescription({ description }: { description: string }) {
  return (
    <p className="text-sm leading-relaxed sm:text-base lg:text-xl">
      {description}
    </p>
  );
}

export function CardParagraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-sm leading-relaxed sm:text-base lg:text-xl',
        className,
      )}
    >
      {children}
    </p>
  );
}
