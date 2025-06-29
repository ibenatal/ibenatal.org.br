import Image from 'next/image';
import { DesktopMenu } from './menu/DesktopMenu';
import { MobileMenu } from './menu/MobileMenu';

export function Header() {
  return (
    <header className="bg-[#696D5F] text-white">
      <div className="flex max-w-7xl mx-auto justify-between items-center px-3 py-2 md:py-4 md:px-4">
        <div aria-description="Logo" className="flex items-center gap-8">
          <Image
            src="/ibe-logo.svg"
            alt="IBENATAL"
            width={107}
            height={80}
            className="w-[48px] md:w-[107px] h-auto"
          />
        </div>
        <h1 className="text-xl font-bold text-white/90 hidden md:block">
          Igreja Batista da Esperança
        </h1>
        <MobileMenu />
        <DesktopMenu />
      </div>
    </header>
  );
}
