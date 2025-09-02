import Image from 'next/image';
import { SectionContainer } from '../layout/Container';

export default function WaysToContribute() {
  return (
    <section aria-label="Como contribuir" className="relative bg-primary-200">
      <Image
        src="/images/bgGetInTouch.jpeg"
        alt="Como contribuir"
        fill
        className="z-0 object-cover opacity-5"
        priority
      />
      <SectionContainer className="relative z-10 flex flex-col flex-wrap gap-14 py-20 sm:py-10 md:flex-row md:py-10 lg:flex-nowrap lg:gap-2 lg:px-4">
        <div className="flex w-full flex-col gap-2 md:self-center lg:flex-1">
          <div className="text-base text-primary-500">Contribuir</div>
          <div className="text-3xl">Formas de contribuir</div>
        </div>
        <div className="flex flex-col gap-2 text-primary-900 md:w-1/2 lg:w-4/12 xl:w-3/12">
          <div className="font-bold text-2xl">Banco Bradesco</div>
          <div className="text-lg">Agência: 3224-7</div>
          <div className="text-lg">Conta Corrente: 0075754-3</div>
          <div className="text-lg">CNPJ: 08.512.048/0001/90</div>
        </div>
        <div className="md:1/2 flex flex-col gap-2 text-primary-900 lg:w-4/12 xl:w-3/12">
          <div className="font-bold text-2xl">PIX</div>
          <div className="text-lg">IGREJA BATISTA DA ESPERANÇA</div>
          <div className="text-lg">BCO BRADESCO S.A.</div>
          <div className="text-lg">08.512.048/0001/90</div>
        </div>
      </SectionContainer>
    </section>
  );
}
