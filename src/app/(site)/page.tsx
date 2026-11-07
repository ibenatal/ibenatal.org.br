import NextEvents from '@/components/home/NextEvents';
import AboutUsV2 from '@/components/home/v2/AboutUsV2';
import { OurPastorV2, RiachueloV2 } from '@/components/home/v2/FeatureSection';
import FromBlogV2 from '@/components/home/v2/FromBlogV2';
import { GetInTouchV2 } from '@/components/home/v2/GetInTouchV2';
import LiveTransmissionsV2 from '@/components/home/v2/LiveTransmissionsV2';
import OurMinistriesV2 from '@/components/home/v2/OurMinistriesV2';
import OurPGMsV2 from '@/components/home/v2/OurPGMsV2';
import WaysToContributeV2 from '@/components/home/v2/WaysToContributeV2';
import HomeCarousel from '@/components/HomeCarousel';
import { homeSlides } from '@/data/carousel';

export default function SitePage() {
  // `home-v2` aplica o estilo novo dos títulos em `NextEvents`, que usa a tipografia compartilhada.
  return (
    <main className="home-v2 bg-secondary-50">
      <HomeCarousel slides={homeSlides} />
      <AboutUsV2 />
      <OurMinistriesV2 />
      <OurPastorV2 />
      <GetInTouchV2 />
      <OurPGMsV2 />
      <FromBlogV2 />
      <RiachueloV2 />
      <NextEvents />
      <LiveTransmissionsV2 />
      <WaysToContributeV2 />
    </main>
  );
}
