import Link from 'next/link';
import { cn } from '@/lib/utils';

const variants = {
  /** Areia: para fundos escuros. */
  sand: 'bg-secondary-300 text-primary-900 hover:bg-secondary-200',
  /** Vinho: para fundos claros. */
  wine: 'bg-quaternary-500 text-white hover:bg-quaternary-600',
  'outline-light': 'border-2 border-white/30 text-white hover:bg-white/10',
  'outline-dark': 'border-2 border-primary-800/25 text-primary-800 hover:bg-primary-800/5',
};

/** Botão-link padrão da home: mesma altura, fonte e cantos em todas as seções. */
export function ActionLink({
  href,
  children,
  variant = 'wine',
  external = false,
  className,
  ...properties
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
} & Pick<React.ComponentProps<'a'>, 'aria-label' | 'title'>) {
  return (
    <Link
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(
        'inline-flex h-12 w-fit items-center justify-center gap-2 rounded-sm px-6 font-heading font-semibold text-base transition [&_svg]:size-4 [&_svg]:shrink-0',
        variants[variant],
        className,
      )}
      {...properties}
    >
      {children}
    </Link>
  );
}
