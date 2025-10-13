import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { linksData } from '@/data/links';

export const metadata: Metadata = {
  title: 'Links',
  description: 'Acesso rápido aos nossos links oficiais',
  alternates: { canonical: '/links' },
  openGraph: {
    title: 'Links - IBE Natal',
    description: 'Acesso rápido aos nossos links oficiais',
    type: 'website',
  },
};

export default function LinksPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/bgGetInTouch.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-800/60" />
      </div>

      <section className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-10">
        <div className="mb-6 flex items-center gap-3 flex-col">
          <Image src="/ibe-logo.svg" alt="IBE Natal" width={100} height={100} className="p-2" />
          <h1 className="font-heading text-white text-sm leading-tight">
            Igreja Batista da Esperança
          </h1>
        </div>

        <ul className="flex w-full flex-col gap-3">
          {linksData.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center gap-3 rounded-xl border border-white/20 bg-white/85 px-4 py-3 text-foreground shadow transition hover:bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={56}
                  height={56}
                  quality={100}
                  className="w-[56px] h-[56px]"
                />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate font-semibold text-base">{item.title}</span>
                  <span className="truncate text-sm text-muted-foreground">{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center text-white/80 text-xs">
          <span>© {new Date().getFullYear()} Igreja Batista da Esperança</span>
        </div>
      </section>
    </main>
  );
}
