import Link from 'next/link';
import { cn } from '@/lib/utils';
import { menuItems } from './menuItems';

/** `light` para o topo claro da home. */
export function DesktopMenu({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link
              href={item.to}
              title={item.label}
              className={cn(
                'px-4 py-3 text-lg xl:text-xl',
                tone === 'dark'
                  ? 'hover:bg-black/60'
                  : 'rounded-sm font-medium hover:bg-primary-800/10 hover:text-quaternary-500',
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
