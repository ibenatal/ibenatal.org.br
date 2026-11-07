'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowLeft, ArrowRight, Hand } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../../layout/Container';

export type ShowcaseItem = {
  title: string;
  tagline?: string;
  image: string;
  /** Cor da faixa abaixo da foto (classe `bg-*`). */
  color: string;
  /** Ajuste de enquadramento para fotos em retrato (ex.: `object-[50%_70%]`). */
  imageClassName?: string;
};

const variants = {
  /** Fotos 16:9, cards grandes. */
  wide: {
    aspect: 'aspect-video',
    pinnedWidth: 'w-[min(34rem,38vw,calc((100vh-30rem)*16/9))]',
    pinnedSizes: '544px',
    swipeWidth: 'w-[86%] sm:w-[60%]',
    swipeSizes: '(min-width: 640px) 60vw, 86vw',
    gridItem: 'w-[calc((100%-3rem)/3)]',
    gridSizes: '360px',
    title: 'text-3xl sm:text-4xl',
    number: 'text-5xl sm:text-6xl',
  },
  /** Fotos 4:3, cards menores (cabem mais na tela). */
  compact: {
    aspect: 'aspect-[4/3]',
    pinnedWidth: 'w-[min(24rem,27vw,calc((100vh-30rem)*4/3))]',
    pinnedSizes: '384px',
    swipeWidth: 'w-[72%] sm:w-[42%]',
    swipeSizes: '(min-width: 640px) 42vw, 72vw',
    gridItem: 'w-[calc((100%-4.5rem)/4)]',
    gridSizes: '270px',
    title: 'text-2xl sm:text-3xl',
    number: 'text-4xl sm:text-5xl',
  },
};

const tones = {
  light: {
    hint: 'text-primary-800/60',
    progressTrack: 'bg-primary-800/10',
    progressBar: 'bg-quaternary-500',
    shadow: 'shadow-primary-900/25',
    arrow:
      'bg-quaternary-500 text-white hover:bg-quaternary-600 disabled:bg-primary-800/15 disabled:text-primary-800/40',
  },
  dark: {
    hint: 'text-white/60',
    progressTrack: 'bg-white/15',
    progressBar: 'bg-secondary-300',
    shadow: 'shadow-black/40',
    arrow:
      'bg-secondary-300 text-primary-900 hover:bg-secondary-200 disabled:bg-white/10 disabled:text-white/30',
  },
};

type Variant = (typeof variants)[keyof typeof variants];
type Tone = (typeof tones)[keyof typeof tones];

/**
 * Alinha o primeiro card com o conteúdo do `SectionContainer` (max-w-6xl + padding lateral) e
 * deixa a fileira de cards vazar até a borda da tela.
 */
const gutter = 'max(var(--gutter), calc((100% - 72rem) / 2 + var(--gutter)))';

interface CardShowcaseProperties {
  header: React.ReactNode;
  items: ShowcaseItem[];
  /** Texto pequeno acima do título de cada card, também usado no `alt` da foto. */
  eyebrow: string;
  /** Usado nas dicas: "Role a página para ver {itemsLabel}". */
  itemsLabel: string;
  ariaLabel: string;
  variant?: keyof typeof variants;
  tone?: keyof typeof tones;
}

/**
 * - Mobile/tablet: carrossel de arrastar com o dedo.
 * - Desktop: a seção fica fixa na tela e os cards correm para o lado conforme a página rola.
 * - Desktop com "reduzir movimento" ligado no sistema: grade estática com todos os cards.
 */
export function CardShowcase({
  header,
  items,
  eyebrow,
  itemsLabel,
  ariaLabel,
  variant: variantName = 'wide',
  tone: toneName = 'light',
}: CardShowcaseProperties) {
  const variant = variants[variantName];
  const tone = tones[toneName];
  const card = (item: ShowcaseItem, index: number, sizes: string, parallax = false) => (
    <ShowcaseCard
      item={item}
      index={index}
      eyebrow={eyebrow}
      sizes={sizes}
      parallax={parallax}
      variant={variant}
      tone={tone}
    />
  );

  return (
    <div className="[--gutter:0.75rem] sm:[--gutter:1rem]">
      <div className="lg:hidden">
        <SectionContainer className="pb-10 sm:pb-12">{header}</SectionContainer>
        <SwipeCarousel
          count={items.length}
          ariaLabel={ariaLabel}
          itemsLabel={itemsLabel}
          tone={tone}
        >
          {items.map((item, index) => (
            <li key={item.title} className={cn('shrink-0 snap-start', variant.swipeWidth)}>
              {card(item, index, variant.swipeSizes)}
            </li>
          ))}
        </SwipeCarousel>
      </div>

      <PinnedScroller
        header={header}
        itemsLabel={itemsLabel}
        tone={tone}
        className="hidden lg:motion-safe:block"
      >
        {items.map((item, index) => (
          <li
            key={item.title}
            className={cn('shrink-0', variant.pinnedWidth, index % 2 === 1 && 'mt-10')}
          >
            {card(item, index, variant.pinnedSizes, true)}
          </li>
        ))}
      </PinnedScroller>

      <SectionContainer className="hidden pb-0 lg:motion-reduce:flex">
        {header}
        <ul aria-label={ariaLabel} className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <li key={item.title} className={variant.gridItem}>
              {card(item, index, variant.gridSizes)}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </div>
  );
}

function ShowcaseCard({
  item,
  index,
  eyebrow,
  sizes,
  parallax,
  variant,
  tone,
}: {
  item: ShowcaseItem;
  index: number;
  eyebrow: string;
  sizes: string;
  parallax: boolean;
  variant: Variant;
  tone: Tone;
}) {
  return (
    <article className={cn('overflow-hidden rounded-sm shadow-xl', tone.shadow)}>
      <div className={cn('relative overflow-hidden', variant.aspect)}>
        <div
          data-parallax={parallax || undefined}
          style={parallax ? { transform: 'scale(1.15)' } : undefined}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={item.image}
            alt={`${eyebrow} ${item.title}`}
            fill
            sizes={sizes}
            className={cn('object-cover', item.imageClassName)}
          />
        </div>
      </div>
      <div
        className={cn(
          'flex items-end justify-between gap-4 px-5 py-4 text-white sm:px-6 sm:py-5',
          item.color,
        )}
      >
        <div className="flex flex-col gap-1">
          <span className="font-heading font-semibold text-white/75 text-xs uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
          <h3 className={cn('font-bold leading-none', variant.title)}>{item.title}</h3>
          {!!item.tagline && (
            <p className="mt-1 text-sm text-white/85 sm:text-base">{item.tagline}</p>
          )}
        </div>
        <span
          aria-hidden
          className={cn('font-bold font-heading text-white/25 leading-none', variant.number)}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </article>
  );
}

/** Desktop: rolagem vertical vira movimento horizontal, com parallax nas fotos. */
function PinnedScroller({
  header,
  itemsLabel,
  tone,
  className,
  children,
}: {
  header: React.ReactNode;
  itemsLabel: string;
  tone: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!outer || !track || !bar) return;

    const photos = [...track.querySelectorAll<HTMLElement>('[data-parallax]')];
    let shift = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (outer.offsetParent === null) return; // escondido (mobile ou reduzir movimento)

      const viewportWidth = document.documentElement.clientWidth;
      const rect = outer.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;

      track.style.transform = `translate3d(${-progress * shift}px, 0, 0)`;
      bar.style.transform = `scaleX(${progress})`;

      for (const photo of photos) {
        const box = photo.parentElement!.getBoundingClientRect();
        const offset = (box.left + box.width / 2 - viewportWidth / 2) / viewportWidth;
        const clamped = Math.min(1, Math.max(-1, offset));
        photo.style.transform = `translate3d(${clamped * -6}%, 0, 0) scale(1.15)`;
      }
    };

    const measure = () => {
      if (outer.offsetParent === null) return;
      shift = Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
      outer.style.height = `${window.innerHeight + shift}px`;
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div ref={outerRef} className={cn('relative h-screen', className)}>
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden py-10">
        <div className="mx-auto w-full max-w-6xl px-4">{header}</div>

        <ul
          ref={trackRef}
          style={{ paddingInline: gutter }}
          className="flex w-max items-start gap-6 will-change-transform"
        >
          {children}
        </ul>

        <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-4">
          <p className={cn('flex shrink-0 items-center gap-2 text-sm', tone.hint)}>
            <ArrowDown aria-hidden className="size-4 animate-bounce" />
            Role a página para ver {itemsLabel}
          </p>
          <div className={cn('h-1 flex-1 overflow-hidden', tone.progressTrack)}>
            <div
              ref={barRef}
              style={{ transform: 'scaleX(0)' }}
              className={cn('h-full origin-left', tone.progressBar)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile/tablet: carrossel com scroll-snap e setas. */
function SwipeCarousel({
  count,
  ariaLabel,
  itemsLabel,
  tone,
  children,
}: {
  count: number;
  ariaLabel: string;
  itemsLabel: string;
  tone: Tone;
  children: React.ReactNode;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(count > 1);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows]);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector('li');
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <ul
        ref={trackRef}
        onScroll={updateArrows}
        tabIndex={0}
        aria-label={ariaLabel}
        style={{ paddingInline: gutter, scrollPaddingInline: gutter }}
        className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto pt-2 pb-12 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-quaternary-400 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      <div style={{ paddingInline: gutter }} className="flex items-center justify-between gap-4">
        <p className={cn('flex items-center gap-2 text-sm', tone.hint)}>
          <Hand
            aria-hidden
            className="size-4 animate-[ibe-swipe_1.8s_ease-in-out_infinite] motion-reduce:animate-none"
          />
          Deslize para ver {itemsLabel}
        </p>
        <div className="flex gap-2">
          <ArrowButton label="Anterior" tone={tone} disabled={!canPrev} onClick={() => scroll(-1)}>
            <ArrowLeft className="size-5" />
          </ArrowButton>
          <ArrowButton label="Próximo" tone={tone} disabled={!canNext} onClick={() => scroll(1)}>
            <ArrowRight className="size-5" />
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}

function ArrowButton({
  label,
  tone,
  disabled,
  onClick,
  children,
}: {
  label: string;
  tone: Tone;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-sm shadow-md transition disabled:cursor-default disabled:shadow-none',
        tone.arrow,
      )}
    >
      {children}
    </button>
  );
}
