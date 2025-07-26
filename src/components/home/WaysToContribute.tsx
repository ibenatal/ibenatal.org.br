import Image from 'next/image';
import { SectionContainer } from '../layout/Container';

export default function WaysToContribute() {
  return (
    <section aria-label="Como contribuir" className="bg-primary-200 relative">
      <Image
        src="/images/bgGetInTouch.jpeg"
        alt="Como contribuir"
        fill
        className="object-cover z-0 opacity-5"
        priority
      />
      <SectionContainer className="relative z-10 lg:px-4 sm:py-10 py-20 md:py-10 flex flex-col md:flex-row gap-14 lg:gap-2 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-2 w-full lg:flex-1 md:self-center">
          <div className="text-base text-primary-500">Contribuir</div>
          <div className="text-3xl">Formas de contribuir</div>
        </div>
        <div className="flex flex-col gap-2 text-primary-900 md:w-1/2 lg:w-4/12 xl:w-3/12">
          <div className="text-2xl font-bold">Banco Bradesco</div>
          <div className="text-lg">Agência: 3224-7</div>
          <div className="text-lg">Conta Corrente: 0075754-3</div>
          <div className="text-lg">CNPJ: 08.512.048/0001/90</div>
        </div>
        <div className="flex flex-col gap-2 text-primary-900 md:1/2 lg:w-4/12 xl:w-3/12">
          <div className="text-2xl font-bold">PIX</div>
          <div className="text-lg">IGREJA BATISTA DA ESPERANÇA</div>
          <div className="text-lg">BCO BRADESCO S.A.</div>
          <div className="text-lg">08.512.048/0001/90</div>
        </div>
      </SectionContainer>
    </section>
  );
}
