import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, House } from 'lucide-react';
import { ActionLink } from '@/components/home/v2/ActionLink';
import { Eyebrow } from '@/components/home/v2/Eyebrow';
import { WhatsappFillIcon } from '@/components/icons/WhatsappFillIcon';
import { SectionContainer } from '@/components/layout/Container';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileBottomBar } from '@/components/layout/menu/MobileBottomBar';
import { whatsapp } from '@/data/contacts';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
};

const atalhos = [
  { href: '/sobre-nos', label: 'Sobre nós', hint: 'Nossa história, missão e valores' },
  { href: '/artigos', label: 'Artigos', hint: 'Reflexões e estudos bíblicos' },
  { href: '/perfil-pastoral', label: 'Perfil pastoral', hint: 'Conheça o Rev. Celso' },
  { href: '/contatos', label: 'Contatos', hint: 'Endereço, horários e WhatsApp' },
];

export default function NotFound() {
  return (
    <div className="pt-14 md:pt-0">
      <Header />
      <main className="relative isolate overflow-hidden bg-secondary-50 text-primary-800">
        <div
          aria-hidden
          className="-top-24 -right-24 -z-10 absolute size-96 rounded-full bg-quaternary-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="-bottom-32 -left-32 -z-10 absolute size-96 rounded-full bg-secondary-300/40 blur-3xl"
        />

        <SectionContainer className="gap-14 lg:gap-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <Eyebrow className="text-quaternary-500">Erro 404</Eyebrow>
              <h1 className="font-bold text-5xl leading-[1.05] sm:text-6xl">
                Esta página <span className="text-quaternary-500">se perdeu</span> pelo caminho
              </h1>
              <p className="max-w-xl text-lg text-primary-800/75 leading-relaxed">
                O link pode estar quebrado ou a página mudou de endereço. Mas fique à vontade: aqui
                você é sempre bem-vindo.
              </p>
              <div className="flex flex-wrap gap-3">
                <ActionLink href="/" variant="wine">
                  <House /> Voltar para a home
                </ActionLink>
                <ActionLink href={whatsapp.hrefWithMessage} external variant="outline-dark">
                  <WhatsappFillIcon /> Fale com a gente
                </ActionLink>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <span
                aria-hidden
                className="bg-linear-to-br from-quaternary-500 to-secondary-500 bg-clip-text font-bold font-heading text-[9rem] text-transparent leading-none sm:text-[12rem]"
              >
                404
              </span>
              <figure className="flex flex-col gap-3 border-quaternary-500 border-l-4 pl-6">
                <blockquote className="font-heading font-semibold text-primary-800 text-xl italic leading-snug sm:text-2xl">
                  “Alegrai-vos comigo, porque já achei a minha ovelha perdida.”
                </blockquote>
                <figcaption className="font-heading font-semibold text-primary-800/60 text-sm uppercase tracking-[0.2em]">
                  Lucas 15:6
                </figcaption>
              </figure>
            </div>
          </div>

          <nav aria-label="Páginas do site" className="flex flex-col gap-5">
            <Eyebrow className="text-quaternary-500">Talvez você esteja procurando</Eyebrow>
            <ul className="grid border-primary-800/15 border-t sm:grid-cols-2 lg:grid-cols-4">
              {atalhos.map((atalho) => (
                <li key={atalho.href} className="border-primary-800/15 border-b">
                  <Link
                    href={atalho.href}
                    className="group flex items-center justify-between gap-4 py-5 sm:pr-6"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="font-bold font-heading text-primary-800 text-xl transition-colors group-hover:text-quaternary-500">
                        {atalho.label}
                      </span>
                      <span className="text-primary-800/65 text-sm">{atalho.hint}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 text-quaternary-500 transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SectionContainer>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
