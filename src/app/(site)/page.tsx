import Image from 'next/image';
import HomeCarousel from '@/components/HomeCarousel';
import AboutUS from '@/components/home/AboutUS';
import FromBlog from '@/components/home/FromBlog';
import { GetInTouch } from '@/components/home/GetInTouch';
import LastEvents from '@/components/home/LastEvents';
import LiveTransmissions from '@/components/home/LiveTransmissions';
import OurMinistries from '@/components/home/OurMinistries';
import { OurPastor } from '@/components/home/OurPastor';
import OurPGMs from '@/components/home/OurPGMs';
import WaysToContribute from '@/components/home/WaysToContribute';
import { homeSlides } from '@/data/carousel';

export const metadata = {
  // title: 'IBE - Igreja Batista da Esperança',
  // description: 'Igreja Batista da Esperança',
};

export default function SitePage() {
  return (
    <main className="bg-neutral-100">
      <HomeCarousel slides={homeSlides} />
      <AboutUS />
      <Separator />
      <OurMinistries />
      <Separator />
      <OurPastor />
      <GetInTouch />
      <OurPGMs />
      <Separator />
      <FromBlog />
      <Separator />
      <LastEvents />
      <Separator />
      <LiveTransmissions />
      <WaysToContribute />
    </main>
  );
}

const Separator = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8">
      <div className="h-[2px] w-full bg-secondary/50"></div>
      <Image
        src="/images/icons/separator-symbol.svg"
        alt="Separator"
        width={80}
        height={80}
        className="opacity-50 w-10 h-10 sm:w-20 sm:h-20"
      />
      <div className="h-[2px] w-full bg-secondary/50"></div>
    </div>
  );
};
