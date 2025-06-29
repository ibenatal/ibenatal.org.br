import Image from 'next/image';
import Link from 'next/link';
import { RoundMenuIcon } from '@/components/icons/RoundMenuIcon';
// import { useIsMobile } from '@/hooks/useBreakpoint';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useIsMobile();

  return (
    <div>
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
          <button
            type="button"
            className="md:hidden hover:bg-black/50 transition-colors duration-300 active:bg-black/50 rounded-full p-2"
          >
            <RoundMenuIcon className="w-7 h-7 text-white" />
          </button>
          <nav className="md:block hidden">
            <ul className="flex gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/sermoes">Sermões</Link>
              </li>
              <li>
                <Link href="/eventos">Eventos</Link>
              </li>
              <li>
                <Link href="/contatos">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
