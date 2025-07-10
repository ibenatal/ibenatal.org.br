'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../../ui/button';
import { menuItems } from './menuItems';

export function MobileBottomBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-100 block md:hidden px-4">
      <div className="flex justify-between gap-[1px]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.to}
              size="icon"
              className="size-15"
              variant="ghost"
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <Icon
                  className={cn(
                    'size-6',
                    isActive(item.to) ? 'text-primary-600' : 'text-primary-400',
                  )}
                />
                <span
                  className={cn(
                    'text-xs',
                    isActive(item.to) ? 'text-primary-600' : 'text-primary-400',
                  )}
                >
                  {item.label}
                </span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
