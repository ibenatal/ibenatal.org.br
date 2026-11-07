import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';

export type Tone = 'light' | 'dark';

/**
 * Cabeçalho padrão das seções da home: sobretítulo, título grande com uma palavra em destaque e,
 * no desktop, a descrição alinhada à direita.
 */
export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  tone = 'light',
  className,
}: {
  eyebrow: string;
  title: string;
  /** Palavra(s) no fim do título, em cor de destaque. */
  accent?: string | undefined;
  description?: React.ReactNode | undefined;
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === 'dark';
  return (
    <header
      className={cn(
        'reveal flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12',
        className,
      )}
    >
      <div className="flex flex-col gap-4 lg:min-w-0 lg:flex-1">
        <Eyebrow className={dark ? 'text-secondary-300' : 'text-quaternary-500'}>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            'font-bold text-5xl leading-[1.05] sm:text-6xl',
            dark ? 'text-white' : 'text-primary-800',
          )}
        >
          {title}
          {!!accent && (
            <>
              {' '}
              <span className={dark ? 'text-secondary-300' : 'text-quaternary-500'}>{accent}</span>
            </>
          )}
        </h2>
      </div>
      {!!description && (
        <p
          className={cn(
            'max-w-md text-lg leading-relaxed lg:max-w-sm lg:pb-1',
            dark ? 'text-primary-100/80' : 'text-primary-800/75',
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
