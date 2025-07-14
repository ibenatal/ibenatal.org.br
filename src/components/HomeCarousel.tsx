'use client';

import Image from 'next/image';
import Link from 'next/link';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from './ui/button';

export type SlideItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

interface HomeCarouselProps {
  slides: SlideItem[];
}

export default function HomeCarousel({ slides }: HomeCarouselProps) {
  return (
    <div className="relative w-full home-carousel">
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
            top: 90%;
          }
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
        modules={[Navigation, Pagination, A11y /*, Autoplay*/]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10_000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority
                unoptimized={slide.image.startsWith('http')}
              />
              <div className="absolute inset-0 bg-secondary/50" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 text-white">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl mb-8">{slide.subtitle}</p>
              <Button
                variant="primary"
                outline
                size="lg"
                className="text-white"
                asChild
              >
                <Link href={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
