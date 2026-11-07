import { BookOpen, HandHeart, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../../layout/Container';
import { CardShowcase, type ShowcaseItem } from './CardShowcase';
import { Eyebrow } from './Eyebrow';
import { SectionHeader } from './SectionHeader';

const redes: ShowcaseItem[] = [
  {
    title: 'Crianças',
    tagline: 'Ensinando o caminho desde cedo',
    image: '/images/rede-de-criancas.jpg',
    color: 'bg-secondary-700',
  },
  {
    title: 'Jovens',
    tagline: 'Fé com propósito e muita energia',
    image: '/images/rede-de-jovens.jpg',
    color: 'bg-primary-800',
  },
  {
    title: 'Casais',
    tagline: 'Lares edificados sobre a Rocha',
    image: '/images/rede-de-casais.jpg',
    color: 'bg-quaternary-500',
  },
  {
    title: 'Homens',
    tagline: 'Força para liderar e servir',
    image: '/images/rede-de-homens.jpg',
    color: 'bg-tertiary-600',
  },
  {
    title: 'Mulheres',
    tagline: 'Graça que transforma e inspira',
    image: '/images/rede-de-mulheres.jpg',
    color: 'bg-quaternary-400',
  },
];

const propositos = [
  { verb: 'Atrair', color: 'text-quaternary-600' },
  { verb: 'Conectar', color: 'text-primary-600' },
  { verb: 'Expandir', color: 'text-tertiary-600' },
];

const oportunidades = [
  'evangelismo',
  'comunhão',
  'discipulado',
  'edificação',
  'alcance relacional',
];

const focos = [
  { icon: Music, label: 'Louvor' },
  { icon: HandHeart, label: 'Adoração' },
  { icon: BookOpen, label: 'Palavra' },
];

export default function OurMinistriesV2() {
  return (
    <section
      aria-label="Nossas Redes"
      className="relative overflow-x-clip bg-primary-600 text-white"
    >
      <CardShowcase
        items={redes}
        eyebrow="Rede de"
        itemsLabel="todas as redes"
        ariaLabel="Redes da IBE"
        tone="dark"
        header={
          <SectionHeader
            tone="dark"
            eyebrow="Comunhão que conecta"
            title="Nossas"
            accent="Redes"
            description="Tem um lugar para você e para toda a sua família. Encontre pessoas na mesma fase da vida e cresça junto."
          />
        }
      />

      <SectionContainer className="pt-10 sm:pt-12 lg:pt-4">
        {/* O que são + versículo */}
        <div className="grid gap-10 border-white/15 border-t pt-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal flex flex-col gap-5 lg:col-span-7">
            <Eyebrow className="text-secondary-300">O que são</Eyebrow>
            <p className="font-heading font-semibold text-3xl text-white leading-tight sm:text-4xl">
              Grupos intencionais que{' '}
              <span className="text-secondary-300 underline decoration-4 decoration-quaternary-400 underline-offset-[6px]">
                conectam pessoas
              </span>{' '}
              por fase da vida, interesses e características em comum.
            </p>
            <p className="max-w-2xl text-base text-primary-100/75 leading-relaxed sm:text-lg">
              Fundamentados na comunhão e no encorajamento mútuo{' '}
              <span className="whitespace-nowrap">(At 2:42-47; Hb 10:24-25)</span>, são espaços para
              conexões mais profundas, crescimento e engajamento ativo na vida e na missão da
              igreja.
            </p>
          </div>

          <figure className="reveal flex flex-col justify-center gap-4 border-secondary-300 border-l-4 pl-6 lg:col-span-5 lg:pl-8">
            <blockquote className="font-heading font-semibold text-2xl text-secondary-200 italic leading-snug sm:text-3xl">
              “Consideremo-nos também uns aos outros, para nos estimularmos ao amor e às boas
              obras.”
            </blockquote>
            <figcaption className="font-heading font-semibold text-white/50 text-sm uppercase tracking-[0.2em]">
              Hebreus 10:24
            </figcaption>
          </figure>
        </div>

        {/* Propósito + Foco: uma faixa só */}
        <div className="reveal grid overflow-hidden rounded-sm bg-secondary-300 text-primary-900 lg:grid-cols-12">
          <div className="flex flex-col gap-6 p-6 sm:p-10 lg:col-span-7">
            <Eyebrow className="text-quaternary-600">Propósito</Eyebrow>
            <ol className="flex flex-col divide-y divide-primary-900/15 sm:flex-row sm:divide-x sm:divide-y-0">
              {propositos.map(({ verb, color }, index) => (
                <li
                  key={verb}
                  className="flex items-baseline gap-3 py-3 sm:flex-1 sm:flex-col sm:gap-1 sm:px-5 sm:py-0 sm:first:pl-0"
                >
                  <span className="font-bold font-heading text-primary-900/40 text-sm tabular-nums">
                    0{index + 1}
                  </span>
                  <span className={cn('font-bold font-heading text-3xl leading-none', color)}>
                    {verb}
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-base text-primary-900/75 leading-relaxed">
              Gerando oportunidades para{' '}
              {oportunidades.map((item, index) => (
                <span key={item}>
                  <strong className="font-semibold text-primary-900">{item}</strong>
                  {index < oportunidades.length - 2 && ', '}
                  {index === oportunidades.length - 2 && ' e '}
                </span>
              ))}
              .
            </p>
          </div>

          <div className="flex flex-col gap-6 bg-quaternary-500 p-6 text-white sm:p-10 lg:col-span-5 lg:border-t-0">
            <Eyebrow className="text-secondary-200">Foco</Eyebrow>
            <h3 className="font-bold text-3xl leading-tight">
              Um momento devocional em todo encontro
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {focos.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 font-heading font-semibold text-lg"
                >
                  <Icon aria-hidden className="size-5 text-secondary-200" />
                  {label}
                </li>
              ))}
            </ul>
            <p className="text-sm text-white/75 sm:text-base">
              Sempre adaptado ao contexto de cada evento.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
