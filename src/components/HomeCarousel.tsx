'use client';

import Image from 'next/image';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './ui/button';

export type SlideItem = {
  id: number;
  image: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  /** Escurece a imagem para dar contraste ao texto. Desligue para artes que já trazem texto. */
  overlay?: boolean;
  /**
   * Vídeo de fundo, sem áudio, tocando em loop por cima de `image` (que vira a capa enquanto carrega
   * e o que aparece para quem pediu menos animação no sistema).
   */
  video?: { av1: string; h264: string };
};

interface HomeCarouselProperties {
  slides: SlideItem[];
}

export default function HomeCarousel({ slides }: HomeCarouselProperties) {
  return (
    <div className="home-carousel relative w-full">
      <style jsx global>{`
        .home-carousel .swiper-button-next,
        .home-carousel .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-carousel .swiper-button-next:after,
        .home-carousel .swiper-button-prev:after {
          font-size: 20px;
        }

        @media (max-width: 767px) {
          .home-carousel .swiper-button-next,
          .home-carousel .swiper-button-prev {
            top: 84%;
          }
        }
        .home-carousel .swiper-pagination {
          left: 5rem;
          right: 5rem;
          width: calc(100% - 10rem);
        }

        .home-carousel .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
        }

        .home-carousel .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
        }
        .home-carousel .swiper-pagination-bullet {
          padding: 4px;
        }
      `}</style>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10_000, disableOnInteraction: false }}
        loop={true}
        className="aspect-video w-full lg:aspect-auto lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                className="object-contain object-center lg:object-cover"
                priority
                quality={90}
                sizes="100vw"
                // unoptimized={true}
                // unoptimized={slide.image.startsWith('http')}
              />
              {!!slide.video && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain object-center motion-reduce:hidden lg:object-cover"
                >
                  <source src={slide.video.av1} type='video/mp4; codecs="av01.0.08M.08"' />
                  <source src={slide.video.h264} type='video/mp4; codecs="avc1.640028"' />
                </video>
              )}
              {slide.overlay !== false && <div className="absolute inset-0 bg-secondary/50" />}
            </div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-8">
              {!!slide.title && (
                <h2 className="mb-4 font-bold text-2xl md:text-5xl">{slide.title}</h2>
              )}
              {!!slide.subtitle && <p className="mb-8 text-lg md:text-2xl">{slide.subtitle}</p>}
              {!!slide.buttonLink && !!slide.buttonText && (
                <Button variant="primary" outline size="lg" className="text-white" asChild>
                  <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
