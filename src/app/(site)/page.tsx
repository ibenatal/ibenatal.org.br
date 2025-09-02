import HomeCarousel from '@/components/HomeCarousel';
import AboutUS from '@/components/home/AboutUS';
import FromBlog from '@/components/home/FromBlog';
import { GetInTouch } from '@/components/home/GetInTouch';
import LiveTransmissions from '@/components/home/LiveTransmissions';
import NextEvents from '@/components/home/NextEvents';
import OurMinistries from '@/components/home/OurMinistries';
import { OurPastor } from '@/components/home/OurPastor';
import OurPGMs from '@/components/home/OurPGMs';
import { Separator } from '@/components/home/Separator';
import WaysToContribute from '@/components/home/WaysToContribute';
import { homeSlides } from '@/data/carousel';
import { Riachuelo } from '@/components/home/Riachuelo';

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
      <Riachuelo />
      <Separator />
      <NextEvents />
      <LiveTransmissions />
      <WaysToContribute />
    </main>
  );
}
