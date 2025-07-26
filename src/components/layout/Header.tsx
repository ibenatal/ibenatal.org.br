'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { DesktopMenu } from './menu/DesktopMenu';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [_lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const headerHeight = headerRef.current?.offsetHeight || 0;

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
      ref={headerRef}
      className={`
        bg-primary-500 text-white/90
        md:relative
        fixed top-0 left-0 right-0 w-full
        transition-transform duration-300 ease-in-out
        z-50
        ${!isVisible ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="flex max-w-7xl mx-auto justify-center md:justify-between items-center px-3 py-2 md:py-4 md:px-4">
        <div aria-description="Logo" className="flex items-center gap-8">
          <Link href="/" title="Ir para a página inicial">
            <Image
              src="/ibe-logo.svg"
              alt="Igreja Batista da Esperança"
              width={107}
              height={80}
              className="w-[48px] md:w-[107px] h-auto"
            />
          </Link>
        </div>
        <Link href="/" title="Ir para a página inicial">
          <h1 className="textlg xl:text-xl font-bold text-white/90 hidden lg:block">
            Igreja Batista da Esperança
          </h1>
        </Link>
        {/* <MobileMenu /> */}
        <DesktopMenu />
      </div>
    </header>
  );
}
