import { cn } from '@/lib/utils';

/** Texto pequeno acima dos títulos: caixa alta, espaçado e com um traço antes. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'flex items-center gap-3 font-heading font-semibold text-sm uppercase tracking-[0.2em]',
        className,
      )}
    >
      <span aria-hidden className="h-0.5 w-8 shrink-0 bg-current" />
      {children}
    </span>
  );
}
