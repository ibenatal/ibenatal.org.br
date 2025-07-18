import Image from 'next/image';
import Link from 'next/link';
import { DesktopMenu } from './menu/DesktopMenu';

export function Header() {
  return (
    <header className="bg-primary-500 text-white/90">
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
