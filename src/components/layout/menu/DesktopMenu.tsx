import Link from 'next/link';
import { menuItems } from './menuItems';

export function DesktopMenu() {
  return (
    <nav className="md:block hidden">
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link
              href={item.to}
              title={item.label}
              className="text-xl hover:bg-black/60 px-4 py-3"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
