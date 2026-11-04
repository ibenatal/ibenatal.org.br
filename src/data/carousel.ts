import type { SlideItem } from '@/components/HomeCarousel';

export const homeSlides: SlideItem[] = [
  {
    id: 1,
    image: '/images/carousel/carrossel-01.jpg',
    imageAlt:
      'Culto de aniversário de 57 anos da Igreja Batista da Esperança: Proclamando Cristo, nossa única esperança! 22 de novembro, às 18h, na R. Adolfo Gordo, 1188, Cidade da Esperança',
    overlay: false,
  },
  {
    id: 2,
    image: '/images/carousel/carrossel-02-poster.jpg',
    imageAlt: 'Igreja reunida em louvor durante o culto',
    video: {
      av1: '/videos/carrossel-02-av1.mp4',
      h264: '/videos/carrossel-02-h264.mp4',
    },
    title: 'Ser uma família de muitos filhos',
    subtitle: 'Semelhantes a Jesus!',
  },
  {
    id: 3,
    image: '/images/carousel/carrossel-03.jpg',
    imageAlt: 'Fachada da Igreja Batista da Esperança',
    title: 'Junte-se a Nós',
    subtitle: 'Faça parte da nossa comunidade',
  },
  {
    id: 4,
    image: '/images/carousel/carrossel-04.jpg',
    imageAlt: 'Momento de louvor no culto',
    title: 'Nossos Cultos',
    subtitle: 'Domingo às 18h · Quarta às 19h30',
  },
  {
    id: 5,
    image: '/images/carousel/carrossel-05.jpg',
    imageAlt: 'Membros da igreja reunidos no palco',
    title: 'Nossas Redes',
    subtitle: 'Conectando pessoas através da fé, comunhão e propósito.',
  },
];
