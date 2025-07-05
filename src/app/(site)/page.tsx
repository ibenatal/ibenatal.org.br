import Image from 'next/image';
import HomeCarousel from '@/components/HomeCarousel';
import AboutUS from '@/components/home/AboutUS';
import FromBlog from '@/components/home/FromBlog';
import LastEvents from '@/components/home/LastEvents';
import OurMinistries from '@/components/home/OurMinistries';
import OurSermon from '@/components/home/OurSermon';

export const metadata = {
  // title: 'IBE - Igreja Batista da Esperança',
  // description: 'Igreja Batista da Esperança',
};

const slides = [
  {
    id: 1,
    image: '/images/carousel/slide-1.jpg',
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

export default function SitePage() {
  return (
    <main className="bg-neutral-100">
      <HomeCarousel slides={slides} />
      <AboutUS />
      <Separator />
      <OurMinistries />
      <Separator />
      <OurSermon />
      <Separator />
      <LastEvents />
      <Separator />
      <FromBlog />
    </main>
  );
}

const Separator = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8">
      <div className="h-[2px] w-full bg-secondary/50"></div>
      <Image
        src="/images/icons/separator.png"
        alt="Separator"
        width={80}
        height={80}
        className="opacity-50 w-10 h-10 sm:w-20 sm:h-20"
      />
      <div className="h-[2px] w-full bg-secondary/50"></div>
    </div>
  );
};
