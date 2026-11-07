import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkle } from 'lucide-react';
import { whatsapp } from '@/data/contacts';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../../layout/Container';
import { ActionLink } from './ActionLink';
import { Eyebrow } from './Eyebrow';

const pilares = [
  {
    verb: 'Atrair',
    description: 'Convidar e receber pessoas.',
    color: 'text-secondary-600',
  },
  {
    verb: 'Pertencer',
    description: 'Criar relacionamentos e senso de pertencimento.',
    color: 'text-primary-400',
  },
  {
    verb: 'Discipular',
    description: 'Ensinar e equipar para o crescimento.',
    color: 'text-quaternary-500',
  },
  {
    verb: 'Servir',
    description: 'Usar dons e talentos para o Reino.',
    color: 'text-tertiary-400',
  },
  {
    verb: 'Multiplicar',
    description: 'Compartilhar a fé e investir em outros.',
    color: 'text-quaternary-400',
  },
];

const valores = [
  'Amor Compassivo',
  'Acolhimento Genuíno',
  'Discipulado Transformador',
  'Servir com Excelência',
  'Unidade na Diversidade',
  'Compromisso com a Multiplicação',
  'Mordomia Responsável',
];

export default function AboutUsV2() {
  return (
    <section
      aria-label="Sobre a IBE"
      className="relative isolate overflow-hidden bg-secondary-50 text-primary-800"
    >
      {/* Manchas de cor ao fundo */}
      <div
        aria-hidden
        className="-top-24 -right-24 -z-10 absolute size-80 rounded-full bg-quaternary-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="-left-32 -z-10 absolute top-1/2 size-96 rounded-full bg-secondary-300/40 blur-3xl"
      />

      <SectionContainer className="gap-16 lg:gap-24">
        {/* Cabeçalho + visão */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal flex flex-col gap-6">
            <Eyebrow className="text-quaternary-500">Seja bem-vindo</Eyebrow>
            <h2 className="font-bold text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Venha conhecer a <span className="text-quaternary-500">IBENATAL</span>
            </h2>
            <p className="max-w-xl text-lg text-primary-800/75 leading-relaxed sm:text-xl">
              Estamos de braços abertos para receber você e sua família. Venha fazer parte da nossa
              comunidade e descobrir mais sobre nossa missão e valores.
            </p>
            <div className="flex flex-wrap gap-3">
              <ActionLink href="/sobre-nos" variant="wine">
                Quero conhecer <ArrowRight />
              </ActionLink>
              <ActionLink href={whatsapp.hrefWithMessage} external variant="outline-dark">
                Fale com a gente
              </ActionLink>
            </div>
          </div>

          <div className="reveal relative pb-24 sm:pb-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/sobre-nos/familia-ibe.jpg"
                alt="Família da IBE reunida em frente ao painel “Família: onde o amor gera propósito”"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figure className="absolute inset-x-4 bottom-0 rounded-sm border-secondary-300 border-l-4 bg-quaternary-500 p-6 text-white shadow-2xl shadow-primary-900/25 sm:inset-x-8 sm:p-8">
              <figcaption className="mb-2 font-heading font-semibold text-secondary-200 text-xs uppercase tracking-[0.2em]">
                Nossa visão
              </figcaption>
              <blockquote className="font-heading font-semibold text-2xl leading-tight sm:text-3xl">
                Ser uma família de muitos filhos semelhantes a Jesus.
              </blockquote>
            </figure>
          </div>
        </div>

        {/* Missão em 5 passos */}
        <div className="flex flex-col gap-8">
          <div className="reveal flex flex-col gap-4">
            <Eyebrow className="text-quaternary-500">Nossa missão</Eyebrow>
            <h3 className="max-w-3xl font-bold text-3xl leading-tight sm:text-4xl">
              Cinco passos para crescer na fé e fazer novos discípulos de Cristo
            </h3>
          </div>

          <ol className="grid border-primary-800/15 border-t lg:grid-cols-5 lg:border-t-0">
            {pilares.map((pilar, index) => (
              <li
                key={pilar.verb}
                className="reveal flex items-baseline gap-5 border-primary-800/15 border-b py-5 lg:flex-col lg:gap-3 lg:border-b-0 lg:border-l lg:px-6 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
              >
                <span
                  className={cn(
                    'w-12 shrink-0 font-bold font-heading text-4xl tabular-nums leading-none lg:w-auto lg:text-6xl',
                    pilar.color,
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold font-heading text-2xl">{pilar.verb}</span>
                  <span className="text-primary-800/70 text-sm leading-relaxed sm:text-base">
                    {pilar.description}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Valores em faixa rolando */}
        <div className="flex flex-col gap-6">
          <Eyebrow className="reveal text-quaternary-500">Nossos valores</Eyebrow>
          <div className="-mx-3 sm:-mx-4 overflow-hidden border-primary-800/15 border-y py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]">
            <div className="flex w-max animate-[ibe-marquee_50s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:px-3">
              <ValuesList />
              <ValuesList ariaHidden />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function ValuesList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className={cn(
        'flex items-center motion-reduce:flex-wrap motion-reduce:gap-y-2',
        ariaHidden && 'motion-reduce:hidden',
      )}
    >
      {valores.map((valor, index) => (
        <li key={valor} className="flex shrink-0 items-center">
          <span
            className={cn(
              'whitespace-nowrap font-bold font-heading text-3xl motion-reduce:whitespace-normal sm:text-5xl',
              index % 3 === 0 && 'text-primary-800',
              index % 3 === 1 && 'text-quaternary-500',
              index % 3 === 2 && 'text-secondary-600',
            )}
          >
            {valor}
          </span>
          <Sparkle aria-hidden className="mx-6 size-5 fill-current text-quaternary-400 sm:mx-8" />
        </li>
      ))}
    </ul>
  );
}
