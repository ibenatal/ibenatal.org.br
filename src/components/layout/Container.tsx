import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

export function SectionContainer({
  children,
  className,
  isContentPage = false,
}: {
  children: React.ReactNode;
  className?: string;
  isContentPage?: boolean;
}) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-6xl flex-col gap-8 py-16 sm:px-4 sm:py-24 lg:gap-16',
        isContentPage ? '' : 'px-3',
        className,
      )}
    >
      {children}
    </div>
  );
}
