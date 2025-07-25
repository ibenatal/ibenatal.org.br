'use client';

import Image from 'next/image';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionContainer } from '../layout/Container';
import { CardTitle, SectionTitle } from './HomeTypography';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function OurPGMs() {
  return (
    <section aria-label="Nossos PGMs">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle title="Nossos PGMs" />
          <div className="flex flex-col gap-2">
            <p className="text-sm sm:text-base lg:text-lg text-left leading-relaxed">
              Um Pequeno Grupo Multiplicador é um grupo de pessoas que se reúne
              regularmente com o objetivo de promover o crescimento espiritual,
              a comunhão, o evangelismo e o discipulado, tendo como missão clara
              a multiplicação — ou seja, a formação de novos grupos a partir do
              grupo original. Os grupos se reúnem quinzenalmente, normalmente em
              casas ou em salas da igreja.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-left leading-relaxed">
              Os encontros geralmente incluem leitura e estudo da Bíblia,
              oração, partilha de experiências e apoio mútuo.
            </p>
          </div>
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
            
            .our-pgs-carousel .swiper-button-next,
            .our-pgs-carousel .swiper-button-prev {
              top: 90%;
            }
            .our-pgs-carousel .swiper-button-next:hover,
            .our-pgs-carousel .swiper-button-prev:hover {
              background: rgba(0, 0, 0, 0.5);
            }
            
            .our-pgs-carousel .swiper-pagination {
                left: 5rem;
                right: 5rem;
                width: calc(100% - 10rem);
            }
            .our-pgs-carousel .swiper-pagination-bullet {
              background: black;
              opacity: 0.3;
              padding: 6px;
            }
            .our-pgs-carousel .swiper-pagination-bullet:hover {
              background: black;
              opacity: 0.5;
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
                <div className="flex flex-col gap-6 sm:gap-8 p-4 pb-20">
                  <div className="relative h-[192px] w-full">
                    <Image
                      src={rede.image}
                      alt={rede.description}
                      height={333}
                      width={192}
                      className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
                    />
                  </div>
                  <CardTitle title={rede.description} />
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
  description: string;
  image: string;
}[] = [
  {
    id: 3,
    description: 'Kids',
    image: '/images/carousel/pg-criancas.png',
  },
  {
    id: 4,
    description: 'Turno Extra',
    image: '/images/carousel/pg-turno-extra.png',
  },
  {
    id: 5,
    description: 'A Forja',
    image: '/images/carousel/pg-forja.png',
  },
  {
    id: 6,
    description: 'Unidos em Cristo',
    image: '/images/carousel/pg-unidos.png',
  },
  {
    id: 7,
    description: 'Nasci de Novo',
    image: '/images/carousel/pg-nasci-de-novo.png',
  },
  {
    id: 8,
    description: 'Esperança',
    image: '/images/carousel/pg-esperanca.png',
  },
];
