'use client';

import Image from 'next/image';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionContainer } from '../layout/Container';
import {
  CardDescription,
  CardTitle,
  SectionDescription,
  SectionTitle,
} from './HomeTypography';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function OurPGMs() {
  return (
    <section aria-label="Nossos PGMs">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle title="Nossos PGMs" />
          <SectionDescription description="Pequenos Grupos de Multiplicador" />
        </div>

        <div className="w-full our-pgs-carousel">
          <style jsx global>{`
            .our-pgs-carousel .swiper-button-next,
            .our-pgs-carousel .swiper-button-prev {
              color: white;
              background: rgba(0, 0, 0, 0.3);
              width: 50px;
              height: 50px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .our-pgs-carousel .swiper-button-next:after,
            .our-pgs-carousel .swiper-button-prev:after {
              font-size: 20px;
            }
            
            @media (max-width: 767px) {
              .our-pgs-carousel .swiper-button-next,
              .our-pgs-carousel .swiper-button-prev {
                top: 90%;
              }
            }
            
            .our-pgs-carousel .swiper-pagination-bullet {
              background: black;
              opacity: 0.7;
              padding: 4px;
            }
            
            .our-pgs-carousel .swiper-pagination-bullet-active {
              background: black;
              opacity: 1;
            }
          `}</style>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {redes.map((rede) => (
              <SwiperSlide key={rede.id}>
                <div className="flex flex-col gap-6 sm:gap-8 p-4">
                  <div className="relative h-[192px] w-full">
                    <Image
                      src={rede.image}
                      alt={rede.title}
                      height={333}
                      width={192}
                      className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
                    />
                  </div>
                  <CardTitle title={rede.title} />
                  <CardDescription description={rede.description} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionContainer>
    </section>
  );
}

const redes: {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}[] = [
  {
    id: 1,
    title: 'Jovens',
    description:
      'A contribuição fiel garante que a igreja mantenha sua voz profética, sem precisar negociar princípios por favores ou recursos governamentais.',
    image: '/images/jovens.png',
    link: '/jovens',
  },
  {
    id: 2,
    title: 'Casais',
    description:
      'A rede de apoio para casais que desejam viver uma vida de amor e harmonia.',
    image: '/images/casais.png',
    link: '/casais',
  },
  {
    id: 3,
    title: 'Crianças',
    description: 'A igreja que ama os filhos e os transforma em líderes.',
    image: '/images/criancas.png',
    link: '/criancas',
  },
  {
    id: 4,
    title: 'Homens',
    description: 'A igreja que ama os filhos e os transforma em líderes.',
    image: '/images/casais.png',
    link: '/homens',
  },
  {
    id: 5,
    title: 'Mulheres',
    description: 'A igreja que ama os filhos e os transforma em líderes.',
    image: '/images/casais.png',
    link: '/mulheres',
  },
];
