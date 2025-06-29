import Link from 'next/link';
import { menuItems } from './menuItems';

export function DesktopMenu() {
  return (
    <nav className="md:block hidden">
      <ul className="flex gap-4">
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link href={item.to} title={item.label}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
