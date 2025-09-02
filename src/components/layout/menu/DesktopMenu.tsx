import Link from 'next/link';
import { menuItems } from './menuItems';

export function DesktopMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link
              href={item.to}
              title={item.label}
              className="px-4 py-3 text-lg hover:bg-black/60 xl:text-xl"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
