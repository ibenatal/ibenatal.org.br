import Image from 'next/image';
import Link from 'next/link';
import { RoundMenuIcon } from '@/components/icons/RoundMenuIcon';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
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
            <DrawerContent className="bg-[#696D5F] text-white">
              <DrawerHeader>
                <DrawerTitle className="text-xl font-bold">Menu</DrawerTitle>
                <DrawerClose
                  className="absolute right-4 top-4 rounded-full hover:bg-black/50 p-2"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <title>Close</title>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </DrawerClose>
              </DrawerHeader>
              <div className="p-4">
                <nav>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <Link href="/" className="block py-2 hover:text-white/70">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="block py-2 hover:text-white/70"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sermoes"
                        className="block py-2 hover:text-white/70"
                      >
                        Sermões
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/eventos"
                        className="block py-2 hover:text-white/70"
                      >
                        Eventos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contatos"
                        className="block py-2 hover:text-white/70"
                      >
                        Contato
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
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
