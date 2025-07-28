import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-6xl mx-auto flex flex-col gap-8 lg:gap-16 py-16 sm:py-24 px-3 sm:px-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
