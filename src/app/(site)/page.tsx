import AboutUS from '@/components/home/AboutUS';
import FromBlog from '@/components/home/FromBlog';
import { GetInTouch } from '@/components/home/GetInTouch';
import LiveTransmissions from '@/components/home/LiveTransmissions';
import NextEvents from '@/components/home/NextEvents';
import OurMinistries from '@/components/home/OurMinistries';
import { OurPastor } from '@/components/home/OurPastor';
import OurPGMs from '@/components/home/OurPGMs';
import { Riachuelo } from '@/components/home/Riachuelo';
import { Separator } from '@/components/home/Separator';
import WaysToContribute from '@/components/home/WaysToContribute';
import HomeCarousel from '@/components/HomeCarousel';
import { homeSlides } from '@/data/carousel';

export default function SitePage() {
  return (
    <main className="bg-neutral-100">
      <HomeCarousel slides={homeSlides} />
      <AboutUS />
      <OurMinistries />
      <OurPastor />
      <GetInTouch />
      <OurPGMs />
      <Separator />
      <FromBlog />
      <Riachuelo />
      <NextEvents />
      <LiveTransmissions />
      <WaysToContribute />
    </main>
  );
}
