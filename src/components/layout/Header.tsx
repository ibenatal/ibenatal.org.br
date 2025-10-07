'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { DesktopMenu } from './menu/DesktopMenu';

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isVisible, setIsVisible] = useState(true);
  const [_lastScrollY, setLastScrollY] = useState(0);
  const headerReference = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        globalThis.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const headerHeight = headerReference.current?.offsetHeight || 0;

          // Show header at the top of the page
          if (currentScrollY < headerHeight) {
            setIsVisible(true);
          } else {
            // Show header when scrolling up, hide when scrolling down
            setIsVisible(currentScrollY < lastScrollTop);
          }

          lastScrollTop = currentScrollY;
          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerReference}
      className={cn(
        'fixed top-0 right-0 left-0 z-50 h-14 w-full bg-primary-500 text-white/90 transition-transform duration-300 ease-in-out md:relative md:h-auto',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-3 py-2 md:justify-between md:px-4 md:py-4">
        <div aria-description="Logo" className="flex items-center gap-8">
          <Link href="/" title="Ir para a página inicial">
            <Image
              src="/ibe-logo.svg"
              alt="Igreja Batista da Esperança"
              width={107}
              height={80}
              className="h-auto w-[48px] md:w-[107px]"
            />
          </Link>
        </div>
        <Link href="/" title="Ir para a página inicial">
          {isHomePage ? (
            <h1 className="textlg hidden font-bold text-white/90 lg:block xl:text-xl">
              Igreja Batista da Esperança
            </h1>
          ) : (
            <p className="textlg hidden font-bold text-white/90 lg:block xl:text-xl">
              Igreja Batista da Esperança
            </p>
          )}
        </Link>
        {/* <MobileMenu /> */}
        <DesktopMenu />
      </div>
    </header>
  );
}
