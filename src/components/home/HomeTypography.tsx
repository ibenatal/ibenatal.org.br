import { cn } from '@/lib/utils';

export function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      className={cn(
        'text-center font-bold text-3xl text-primary-700 sm:text-4xl md:text-5xl lg:text-6xl',
        // Dentro de `.home-v2` (home): títulos alinhados à esquerda, maiores e com marcador.
        'in-[.home-v2]:text-left in-[.home-v2]:text-5xl in-[.home-v2]:text-primary-800 in-[.home-v2]:leading-[1.05] sm:in-[.home-v2]:text-6xl lg:in-[.home-v2]:text-7xl',
        'in-[.home-v2]:before:mb-5 in-[.home-v2]:before:block in-[.home-v2]:before:h-1.5 in-[.home-v2]:before:w-14 in-[.home-v2]:before:bg-quaternary-500',
      )}
    >
      {title}
    </h2>
  );
}

export function SectionDescription({ description }: { description: string }) {
  return (
    <p
      className={cn(
        'text-center text-base leading-relaxed sm:text-xl lg:text-2xl',
        'in-[.home-v2]:max-w-2xl in-[.home-v2]:text-left in-[.home-v2]:text-lg in-[.home-v2]:text-primary-800/80 lg:in-[.home-v2]:text-xl',
      )}
    >
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
  return <p className="text-sm leading-relaxed sm:text-base lg:text-xl">{description}</p>;
}

export function CardParagraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-sm leading-relaxed sm:text-base lg:text-xl', className)}>{children}</p>
  );
}
