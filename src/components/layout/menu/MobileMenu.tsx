import Link from 'next/link';
import { BaselineCloseIcon } from '@/components/icons/BaselineCloseIcon';
import { RoundMenuIcon } from '@/components/icons/RoundMenuIcon';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { menuItems } from './menuItems';

export function MobileMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button
          type="button"
          className="md:hidden hover:bg-black/50 transition-colors duration-300 active:bg-black/50 rounded-full p-2"
          aria-label="Menu"
        >
          <RoundMenuIcon className="w-7 h-7 text-white" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-[#696D5F] text-white !border-l-0">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold text-black/50">
            Menu
          </DrawerTitle>
          <DrawerClose
            className="absolute right-4 top-4 rounded-full hover:bg-black/50 p-2"
            aria-label="Close menu"
          >
            <BaselineCloseIcon className="w-6 h-6 text-white" />
          </DrawerClose>
        </DrawerHeader>
        <div className="p-4">
          <nav>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="block py-2 hover:text-white/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
