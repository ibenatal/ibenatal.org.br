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
          className="rounded-full p-2 transition-colors duration-300 hover:bg-black/50 active:bg-black/50 md:hidden"
          aria-label="Menu"
        >
          <RoundMenuIcon className="h-7 w-7 text-white" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="!border-l-0 bg-[#696D5F] text-white">
        <DrawerHeader>
          <DrawerTitle className="font-bold text-black/50 text-xl">Menu</DrawerTitle>
          <DrawerClose
            className="absolute top-4 right-4 rounded-full p-2 hover:bg-black/50"
            aria-label="Close menu"
          >
            <BaselineCloseIcon className="h-6 w-6 text-white" />
          </DrawerClose>
        </DrawerHeader>
        <div className="p-4">
          <nav>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link href={item.to} className="block py-2 hover:text-white/70">
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
