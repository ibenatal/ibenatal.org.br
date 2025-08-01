'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../../ui/button';
import { menuItems } from './menuItems';

export function MobileBottomBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-100 block md:hidden px-4 sm:px-4 z-50">
      <div className="flex justify-between h-15 items-center max-w-[40rem]  w-full mx-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.to} key={item.to}>
              <Button
                size="icon"
                className="size-12 sm:size-15"
                variant="ghost"
                asChild
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <Icon
                    className={cn(
                      'size-6',
                      isActive(item.to)
                        ? 'text-primary-700'
                        : 'text-primary-400',
                    )}
                  />
                  <span
                    className={cn(
                      'text-xs',
                      isActive(item.to)
                        ? 'text-primary-700'
                        : 'text-primary-400',
                    )}
                  >
                    {item.label}
                  </span>
                </div>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
