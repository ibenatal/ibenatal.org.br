import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../../layout/Container';
import { ActionLink } from './ActionLink';
import { Eyebrow } from './Eyebrow';
import { SectionHeader } from './SectionHeader';

/** Seção com foto grande + texto (Perfil Pastoral, Riachuelo). */
export function FeatureSection({
  ariaLabel,
  eyebrow,
  title,
  accent,
  description,
  name,
  role,
  paragraphs,
  image,
  imageAlt,
  ctaText,
  ctaHref,
  facts,
  reverse = false,
  imageSize = 'large',
  className,
}: {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  name: string;
  role?: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  /** Números em destaque abaixo do conteúdo. */
  facts?: { value: string; label: string }[];
  reverse?: boolean;
  /** `small` para fotos de baixa resolução: a foto ocupa menos colunas no desktop. */
  imageSize?: 'large' | 'small';
  className?: string;
}) {
  return (
    <section aria-label={ariaLabel} className={className}>
      <SectionContainer className="gap-10 lg:gap-14">
        <SectionHeader eyebrow={eyebrow} title={title} accent={accent} description={description} />

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
          <div
            className={cn(
              'reveal relative aspect-[4/3] overflow-hidden rounded-sm shadow-primary-900/15 shadow-xl',
              imageSize === 'large' ? 'lg:col-span-7' : 'lg:col-span-5',
              reverse && 'lg:order-2',
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className={cn(
              'reveal flex flex-col gap-5',
              imageSize === 'large' ? 'lg:col-span-5' : 'lg:col-span-7',
            )}
          >
            <div className="flex flex-col gap-2">
              {!!role && <Eyebrow className="text-quaternary-500">{role}</Eyebrow>}
              <h3 className="font-bold text-3xl text-primary-800 sm:text-4xl">{name}</h3>
            </div>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base text-primary-800/75 leading-relaxed sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <ActionLink href={ctaHref} variant="wine" className="mt-2">
              {ctaText} <ArrowRight />
            </ActionLink>
          </div>
        </div>

        {!!facts?.length && (
          <ul className="reveal grid grid-cols-1 divide-y divide-primary-800/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {facts.map((fact) => (
              <li
                key={fact.label}
                className="flex flex-col gap-1 py-5 sm:px-6 sm:py-0 sm:first:pl-0"
              >
                <span className="font-bold font-heading text-5xl text-quaternary-500">
                  {fact.value}
                </span>
                <span className="text-base text-primary-800/75">{fact.label}</span>
              </li>
            ))}
          </ul>
        )}
      </SectionContainer>
    </section>
  );
}

export function OurPastorV2() {
  return (
    <FeatureSection
      ariaLabel="Perfil Pastoral"
      eyebrow="Liderança"
      title="Perfil"
      accent="pastoral"
      description="Conheça o pastor da IBENATAL."
      role="Pastor da IBE Natal"
      name="Rev. Celso Adriano da Silva"
      paragraphs={[
        'Um servo dedicado à Palavra de Deus, com uma trajetória marcada pela fidelidade ao evangelho e pelo zelo no ensino bíblico.',
        'Com sólida formação teológica e uma vocação pastoral enraizada no amor a Cristo e às pessoas, tem servido à igreja com graça, profundidade e compromisso.',
      ]}
      image="/images/pastor-celso.jpg"
      imageAlt="Rev. Celso pregando no púlpito da IBE"
      ctaText="Conhecer mais"
      ctaHref="/perfil-pastoral"
    />
  );
}

export function RiachueloV2() {
  return (
    <FeatureSection
      ariaLabel="Congregação Riachuelo"
      className="bg-secondary-100"
      eyebrow="Missões"
      title="Congregação"
      accent="Riachuelo"
      description="Conheça nossa missão pioneira em Riachuelo."
      role="Igreja plantada pela IBE"
      name="PIB Riachuelo"
      paragraphs={[
        'Em 2019, Deus colocou no coração da IBE o sonho de plantar a primeira Igreja Batista em Riachuelo. Após uma Escola de Sertões, Messias e Thalita foram enviados como família missionária.',
        'Hoje, através de Pequenos Grupos, projetos sociais e evangelismo, estamos levando o amor de Cristo aos corações riachuelenses.',
      ]}
      image="/images/pib-riachuelo/igreja-batista-de-riachuelo.jpg"
      imageAlt="Fachada da Primeira Igreja Batista em Riachuelo"
      ctaText="Conhecer a missão"
      ctaHref="/pib-riachuelo"
      reverse
      imageSize="small"
      facts={[
        { value: '2019', label: 'O sonho de plantar uma igreja em Riachuelo' },
        { value: '80', label: 'Missionários na Escola de Sertões' },
        { value: '2020', label: 'Envio da família missionária' },
      ]}
    />
  );
}
