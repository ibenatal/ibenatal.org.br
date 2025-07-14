import type { SlideItem } from '@/components/HomeCarousel';

export const homeSlides: SlideItem[] = [
  {
    id: 1,
    image: '/images/carousel/igreja-pessoas.png',
    title: 'Igreja Batista da Esperança',
    subtitle: 'Uma igreja que transforma vidas',
    buttonText: 'Saiba Mais',
    buttonLink: '/sobre',
  },
  {
    id: 2,
    image: '/images/carousel/slide-2.jpg',
    title: 'Junte-se a Nós',
    subtitle: 'Faça parte da nossa comunidade',
    buttonText: 'Nossos Horários',
    buttonLink: '/horarios',
  },
  {
    id: 3,
    image: '/images/carousel/slide-3.jpg',
    title: 'Ministérios',
    subtitle: 'Descubra como você pode servir',
    buttonText: 'Conheça',
    buttonLink: '/ministerios',
  },
];
