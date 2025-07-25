import Image from 'next/image';
import { SectionContainer } from '../layout/Container';
import { CardTitle, SectionDescription, SectionTitle } from './HomeTypography';

export default function OurMinistries() {
  return (
    <section aria-label="Nossas Redes">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle title="Nossas Redes" />
          <SectionDescription description="Nossa igreja é composta por várias redes que trabalham juntos para levar a palavra de Deus a todos." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {redes.slice(0, 3).map((rede) => (
            <div key={rede.id} className="flex flex-col gap-6 sm:gap-8">
              <div className="relative h-[192px] w-full">
                <Image
                  src={rede.image}
                  alt={rede.title}
                  height={333}
                  width={192}
                  className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
                />
              </div>
              <CardTitle title={rede.title} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-auto md:w-2/3 mt-8">
          {redes.slice(3).map((rede) => (
            <div key={rede.id} className="flex flex-col gap-6 sm:gap-8">
              <div className="relative h-[192px] w-full">
                <Image
                  src={rede.image}
                  alt={rede.title}
                  height={333}
                  width={192}
                  className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
                />
              </div>
              <CardTitle title={rede.title} />
              {/* <CardDescription description={rede.description} /> */}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

const redes: {
  id: number;
  title: string;
  image: string;
  link: string;
}[] = [
  {
    id: 3,
    title: 'Crianças',
    image: '/images/rede-de-criancas.png',
    link: '/criancas',
  },
  {
    id: 1,
    title: 'Jovens',
    image: '/images/rede-de-jovens.png',
    link: '/jovens',
  },
  {
    id: 2,
    title: 'Casais',
    image: '/images/rede-de-casais.png',
    link: '/casais',
  },
  {
    id: 4,
    title: 'Homens',
    image: '/images/rede-de-homens.png',
    link: '/homens',
  },
  {
    id: 5,
    title: 'Mulheres',
    image: '/images/rede-de-mulheres.png',
    link: '/mulheres',
  },
];
